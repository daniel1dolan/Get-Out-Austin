import React, { useContext } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import UserContext from '../../src/context/userContext.context';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const StripeCheckoutButton = ({
  post_price,
  post_id,
  post_guests,
  disabled,
}) => {
  const classes = useStyles();
  const { userGlobal } = useContext(UserContext);
  const priceForStripe = post_price * post_guests * 100;
  const publishableKey = 'pk_test_rs6ShmyUDyefKyUmvFkOcvk800QtJrAhp9';

  const onToken = (token) => {
    token = {
      ...token,
      uid: userGlobal.uid,
      post_id: post_id,
      quest_count: post_guests,
      paid: true,
    };
    console.log(token);
    fetch(
      'http://ec2-52-14-187-195.us-east-2.compute.amazonaws.com/dbwrite/v1/posts/guests',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(token),
      }
    ).then((result) => {
      return result.json();
    });

    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Get Out Austin Ltd.'
      componentClass='div'
      billingAddress
      shippingAddress
      image='https://getoutaustin.s3.us-east-2.amazonaws.com/Screen+Shot+2020-04-28+at+1.44.11+PM.png'
      description={`Your total is $${post_price * post_guests}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    >
      <Button
        className={classes.submit}
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        disabled={disabled}
      >
        Purchase
      </Button>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
