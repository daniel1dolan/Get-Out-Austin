import React, { Component, useContext } from 'react';
import { Formik, useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from './Form.component';
import Paper from '@material-ui/core/Paper';
import validationSchema from './yupValidation';
import PostToast from './PostToast.component';
import UserContext from '../../src/context/userContext.context';
import 'isomorphic-unfetch';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  container: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}));

const InputForm = (props) => {
  const classes = useStyles();
  const { userGlobal } = useContext(UserContext);

  const [toastStatus, setValue] = React.useState({ status: false, data: 0 });

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      category: '',
      photos: '',
      price: 0,
      guest_range: [1, 20],
      date_range: [null, null],
      uid: '',
      image_avatar: '',
      address: '',
    },
  });

  const onSubmit = (data) => {
    data.uid = userGlobal.uid;
    data.image_avatar = userGlobal.photoURL;
    let Lat = '';
    let Lon = '';
    let mapbox_description = '';
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${data.address}.json?access_token=pk.eyJ1IjoiYWJkZW5ueSIsImEiOiJjazlkNjNrMmUwMGRkM21sZTB0OXdseWl2In0.iQVMKfidmj4BKLbJxAot6w`
    )
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response);
        mapbox_description = response.features[0].place_name;
        Lon = response.features[0].center[0];
        Lat = response.features[0].center[1];
        data = {
          ...data,

          Lat,
          Lon,
          mapbox_description,
        };
      })
      .then(() => {
        fetch(
          'http://ec2-52-14-187-195.us-east-2.compute.amazonaws.com/dbwrite/v1/posts',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          }
        )
          .then((result) => {
            return result.json();
          })
          .then((result) => {
            setValue({ status: true, data: result });
            console.log(result);
          });
      });
  };
  return (
    <>
      <React.Fragment>
        <div className={classes.container}>
          {toastStatus.status && <PostToast status={toastStatus.data} />}
          <Paper elevation={1} className={classes.paper}>
            <h1>Add a Posting</h1>
            <Formik
              render={(props) => <Form {...props} />}
              handleChange={formik.handleChange}
              initialValues={formik.initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            />
          </Paper>
        </div>
      </React.Fragment>
    </>
  );
};

export default InputForm;
