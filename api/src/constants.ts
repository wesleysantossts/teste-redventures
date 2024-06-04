import { BrothDto } from "dtos/order.dto";

export const BROTHS: BrothDto[] = [
  { 
    id: "1", 
    imageInactive: "https://tech.redventures.com.br/icons/salt/inactive.svg", 
    imageActive: "https://tech.redventures.com.br/icons/salt/active.svg", 
    name: "Salt", 
    description: "Simple like the seawater, nothing more", 
    price: 10, 
  },
  { 
    id: "2", 
    imageInactive: "https://tech.redventures.com.br/icons/shoyu/inactive.svg", 
    imageActive: "https://tech.redventures.com.br/icons/shoyu/active.svg", 
    name: "Shoyo", 
    description: "The good old and traditional soy sauce", 
    price: 10, 
  },
  { 
    id: "3", 
    imageInactive: "https://tech.redventures.com.br/icons/miso/inactive.svg", 
    imageActive: "https://tech.redventures.com.br/icons/miso/active.svg", 
    name: "Miso", 
    description: "Paste made of fermented soybeans", 
    price: 12, 
  },
];

export const PROTEINS = [
  { 
    id: "1", 
    imageInactive: "https://tech.redventures.com.br/icons/pork/inactive.svg", 
    imageActive: "https://tech.redventures.com.br/icons/pork/active.svg", 
    name: "Chasu", 
    description: "A sliced flavourful pork meat with a selection of season vegetables.", 
    price: 10, 
  },
  { 
    id: "2", 
    imageInactive: "https://tech.redventures.com.br/icons/yasai/inactive.svg", 
    imageActive: "https://tech.redventures.com.br/icons/yasai/active.svg", 
    name: "Yasai Vegetarian", 
    description: "A delicious vegetarian lamen with a selection of season vegetables.", 
    price: 10, 
  },
  { 
    id: "3", 
    imageInactive: "https://tech.redventures.com.br/icons/chicken/inactive.svg", 
    imageActive: "https://tech.redventures.com.br/icons/chicken/active.svg", 
    name: "Karaague", 
    description: "Three units of fried chicken, moyashi, ajitama egg and other vegetables.", 
    price: 12, 
  },
];

export const ORDER_IMAGE = [
  { type: "chasu", url: "https://interviewtests-wesley.s3.amazonaws.com/redventures/assets/img/ramen/chasu.png" },
  { type: "yasai vegetarian", url: "https://interviewtests-wesley.s3.amazonaws.com/redventures/assets/img/ramen/yasai.png" },
  { type: "karaague", url: "https://interviewtests-wesley.s3.amazonaws.com/redventures/assets/img/ramen/karaague.png" },
]; 