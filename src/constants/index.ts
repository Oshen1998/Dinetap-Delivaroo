import { images } from "../themes/images";
import { PartnerCardData } from "./interface/partnerCard";

export const DUMMY_DATA: PartnerCardData[] = [
  {
    id: '1',
    image: images.images.foods.food1,
    title: 'Partner with us',
    description:
      'Join Deliveroo and reach more customers than ever. We handle delivery, so you can focus on the food.',
    actionTitle: 'Get started',
  },
  {
    id: '2',
    image: images.images.foods.food2,
    title: 'Become a Rider',
    description:
      'Earn great money on your own schedule. Be your own boss and deliver food to hungry customers.',
    actionTitle: 'Apply now',
  },
  {
    id: '3',
    image: images.images.foods.food5,
    title: 'Deliveroo for Work',
    description:
      "From team lunches to meal allowances for your late night workers, we've got your workplace meals covered.",
    actionTitle: 'Get started',
  },
];