import litePlanImg from '../imgs/lite.svg';
import proPlanImg from '../imgs/pro.svg';
import enterprisePlanImg from '../imgs/enterprise.svg';

export const pricingPlans = [
  {
    img: litePlanImg,
    header: 'lite plan',
    features: ['lorem ipsum', 'dolor sit amet consectetur'],
    price: '$50 per month',
    priceButton: 'sign up',
  },
  {
    img: proPlanImg,
    header: 'pro plan',
    features: ['lorem ipsum', 'dolor sit amet consectetur', 'adipisicing elit'],
    price: '$100 per month',
    priceButton: 'sign up',
  },
  {
    img: enterprisePlanImg,
    header: 'enterprise plan',
    features: [
      'lorem ipsum',
      'dolor sit amet consectetur',
      'adipisicing elit',
      'Consequatur nisi',
    ],
    price: '$300 per month',
    priceButton: 'free trial',
  },
];
