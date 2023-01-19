import axios from 'axios'
import { cartProps } from '../../interface/product';
import { getStripe }  from '../stripe';

export const buyProduct = async (Product: cartProps) => {
  const stripe = await getStripe();
  //TODO: ADD STRIPE
  const response = await axios({
    headers: { 'Content-Type': 'application/json' },
    method: 'post',
    url: '/api/stripe',
    data: JSON.stringify(Product)
  })
    .then(res => {
      stripe.redirectToCheckout({ sessionId: res.data.id });
    })
    .catch(error => {
      // TODO: handle error with message popup flash
      console.log(error);
    })
}