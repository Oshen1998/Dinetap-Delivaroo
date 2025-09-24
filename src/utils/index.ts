import { startCase } from 'lodash';
import { images } from '../themes/images';

export const titleCase = (title: string) => {
  return startCase(title);
};

export const generateRandomNumber = (
  start: number,
  between: number,
): number => {
  return Math.floor(Math.random() * between + start);
};

export const imageGallery = [
  images.images.foods.food1,
  images.images.foods.food2,
  images.images.foods.food4,
  images.images.foods.food5,
  images.images.foods.food6,
  images.images.foods.food7,
  images.images.foods.food8,
  images.images.foods.food9,
  images.images.foods.food10,
];

export const randomImage = () => {
  return imageGallery[generateRandomNumber(0, 9)];
};
