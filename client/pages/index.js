import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UserContext from '../src/context/userContext.context';
import Link from 'next/link';
import 'isomorphic-unfetch';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Index(props) {
  const { userGlobal } = useContext(UserContext);
  const classes = useStyles();
  let filteredItems = [];
  for (let index = 0; index <= 8; index++) {
    filteredItems.push(props.posts[index]);
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Get Out, Austin
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              Designed to connect adventure seekers. Find your next hobby,
              event, or excursion.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Link href='/posts'>
                    <Button variant='contained' color='primary'>
                      View Postings
                    </Button>
                  </Link>
                </Grid>
                {/* <Grid item>
                  <Button variant='outlined' color='primary'>
                    Secondary action
                  </Button>
                </Grid> */}
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {filteredItems.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card key={index} className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.post_images}
                    title='Image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {card.post_title}
                    </Typography>
                    <Typography>{card.post_description}</Typography>
                  </CardContent>
                  <CardActions>
                    {userGlobal ? (
                      <Link href={`/posts/${card.id}`}>
                        <Button size='small' color='secondary'>
                          View
                        </Button>
                      </Link>
                    ) : (
                      <Typography color='secondary'>Login to view</Typography>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  const res = await fetch(
    'http://ec2-52-14-187-195.us-east-2.compute.amazonaws.com/api/v1/posts'
  );
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
