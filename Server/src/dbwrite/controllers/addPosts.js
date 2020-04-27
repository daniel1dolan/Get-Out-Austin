import db from "../../../models";

export function addPosts(req, res) {
  //Need to get the post_author from the user firebase object, set to 1.
  let post_author = 1;
  let post_title = req.body.title;
  let post_description = req.body.description;
  let post_category = req.body.category;
  let post_images = req.body.photos;
  let post_price = req.body.price;
  let post_starting_date = req.body.date_range[0];
  let post_ending_date = req.body.date_range[1];
  let post_max_guests = req.body.guest_range[1];
  let post_booked_guests = 0;
  let post_min_guests = req.body.guest_range[0];
  let post_complete = false;

  let createPost = () => {
    db.posts
      .create({
        post_author,
        post_title,
        post_description,
        post_category,
        post_images,
        post_price,
        post_starting_date,
        post_ending_date,
        post_max_guests,
        post_booked_guests,
        post_min_guests,
        post_complete,
      })
      .then((results) => {
        res.send(JSON.stringify(results));
      })
      .catch((err) => {
        console.log(err);
        res.send(JSON.stringify("Error: ", err));
      });
  };

  //Check if the posting is a duplicate (author has posting with same title)
  db.posts
    .findAll({ where: { post_author: post_author, post_title: post_title } })
    .then((results) => {
      console.log(results[0].post_title);
      let notDuplicate = results[0].post_title === post_title ? false : true;
      if (notDuplicate) {
        console.log("...creating posting.");
        createPost();
      } else {
        console.log("...duplicate found.");
        res.send(
          JSON.stringify(
            "Sorry, the posting you added seems to be a duplicate."
          )
        );
      }
    });
}
