import axios from 'axios';
import { cartProduct } from '../../interface/product';
import getStripe from '../stripe';

export const buyProduct = async (product: cartProduct[]) => {
  const stripe = await getStripe();

  return await axios({
    headers: { 'Content-Type': 'application/json' },
    method: 'post',
    url: '/api/stripe',
    data: JSON.stringify(product)
  })
    .then(res => {
      stripe!.redirectToCheckout({ sessionId: res.data.id });
    })
    .catch(error => {
      // TODO: handle error with message popup flash
      console.log(error);
    })
}