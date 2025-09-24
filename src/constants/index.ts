import i18n from '../i18n';
import { images } from '../themes/images';
import { PartnerCardData } from './interface/partnerCard';
import { MenuItemData } from './interface/restaurant';

export const DUMMY_DATA: PartnerCardData[] = [
  {
    id: '1',
    image: images.images.foods.food1,
    title: i18n.generic.partnership.partner.title,
    description:
      i18n.generic.partnership.partner.description,
    actionTitle: i18n.generic.partnership.partner.actionTitle,
  },
  {
    id: '2',
    image: images.images.foods.food2,
    title: i18n.generic.partnership.rider.title,
    description:
      i18n.generic.partnership.rider.description,
    actionTitle: i18n.generic.partnership.rider.actionTitle,
  },
  {
    id: '3',
    image: images.images.foods.food5,
    title: i18n.generic.partnership.work.title,
    description:
      i18n.generic.partnership.work.description,
    actionTitle:  i18n.generic.partnership.work.actionTitle,
  },
];

export interface SpyList {
  categoryId: string | number;
  categoryName: string;
}



export const RESTAURANT_DUMMIES: MenuItemData[] = [
  {
    restaurantId: 1,
    name: 'The Gourmet Grill',
    price: '£15.99',
    description:
      'A cozy, modern grill serving premium cuts and classic comfort food with a twist.',
    restaurantImage: images.images.foods.food1,
    isPopular: false,
  },
  {
    restaurantId: 2,
    name: 'Vegan Vibe Café',
    price: '£13.99',
    description:
      'A plant-based paradise offering fresh salads, bowls, and smoothies.',
    restaurantImage: images.images.foods.food2,
    isPopular: true,
  },
  {
    restaurantId: 3,
    name: 'Coastal Catch Seafood',
    price: '£13.99',
    description:
      'Serving the freshest catch of the day, with stunning ocean views.',
    restaurantImage: images.images.foods.food4,
    isPopular: true,
  },
  {
    restaurantId: 4,
    name: 'The Tuscan Trattoria',
    price: '£12.99',
    description:
      'Authentic Italian dishes prepared with traditional recipes and a rustic charm.',
    restaurantImage: images.images.foods.food6,
    isPopular: false,
  },
  {
    restaurantId: 5,
    name: 'Spicy Fusion Bistro',
    price: '£15.99',
    description:
      'A vibrant eatery blending bold flavors from Asian and Latin American cuisines.',
    restaurantImage: images.images.foods.food8,
    isPopular: true,
  },
];
