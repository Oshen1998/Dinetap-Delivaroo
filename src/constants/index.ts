import { images } from '../themes/images';
import { PartnerCardData } from './interface/partnerCard';
import { MenuItemData } from './interface/restaurant';
import { Category } from './interface/spyList';

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

export interface SpyList {
  categoryId: string | number;
  categoryName: string;
}

export const bigDataset: Category[] = [
  {
    categoryId: 46,
    categoryName: '🌟 Beverages 🌟',
    dishes: [
      {
        dishId: 1303,
        dishName: 'Coconut Water',
        dishRate: 3,
        price: '37.85',
        currency: 'LKR',
        calories: '83 kcal',
        description:
          'Defetiscor tenetur tunc comedo damno asper crebro. Umbra deorsum substantia accusantium tumultus odio velit.',
        imageId: 2,
      },
      {
        dishId: 1302,
        dishName: 'Coconut Water',
        dishRate: 4,
        price: '64.20',
        currency: 'LKR',
        calories: '113 kcal',
        description:
          'Caritas pauper derelinquo quis angelus alioqui. Caelum umerus stabilis verbum demoror id.',
        imageId: 3,
      },
      {
        dishId: 1299,
        dishName: 'Lassi',
        dishRate: 2,
        price: '49.69',
        currency: 'LKR',
        calories: '83 kcal',
        description:
          'Conor non vinum auctor aliquid rerum circumvenio curia depono caput. Inventore et contra adamo facere denego adulatio cornu demergo teneo.',
        imageId: 6,
      },
    ],
  },
  {
    categoryId: 45,
    categoryName: '😀 Breakfast 😀',
    dishes: [
      {
        dishId: 1295,
        dishName: 'Avocado Toast',
        dishRate: 2,
        price: '14.69',
        currency: 'LKR',
        calories: '62 kcal',
        description:
          'Adamo curo ullus ars thesaurus. Aegrus aiunt possimus amplus carpo.',
        imageId: 7,
      },
      {
        dishId: 1298,
        dishName: 'Avocado Toast',
        dishRate: 5,
        price: '18.89',
        currency: 'LKR',
        calories: '95 kcal',
        description:
          'Cunae bos vulariter ciminatio. Architecto administratio auctus damno.',
        imageId: 10,
      },
      {
        dishId: 1293,
        dishName: 'Eggs Benedict',
        dishRate: 4,
        price: '63.40',
        currency: 'LKR',
        calories: '138 kcal',
        description:
          'Maxime armarium tenetur delectatio quidem. Alveus clarus copiose.',
        imageId: 10,
      },
      {
        dishId: 1288,
        dishName: 'English Breakfast',
        dishRate: 2,
        price: '45.39',
        currency: 'LKR',
        calories: '45 kcal',
        description:
          'Caute tener ipsa aeternus spargo deripio calcar correptius tibi aegrus. Vulgaris odit doloremque omnis claro.',
        imageId: 9,
      },
      {
        dishId: 1296,
        dishName: 'Omelette',
        dishRate: 3,
        price: '48.55',
        currency: 'LKR',
        calories: '39 kcal',
        description:
          'Venustas custodia curiositas studio talus supellex turba sophismata suffragium valde. Crur credo alius venio.',
        imageId: 1,
      },
      {
        dishId: 1289,
        dishName: 'Pancakes',
        dishRate: 5,
        price: '48.45',
        currency: 'LKR',
        calories: '66 kcal',
        description:
          'Eius combibo vallum in. Appono comparo spiritus cernuus appono vigilo perspiciatis tunc.',
        imageId: 7,
      },
      {
        dishId: 1290,
        dishName: 'Pancakes',
        dishRate: 5,
        price: '58.79',
        currency: 'LKR',
        calories: '40 kcal',
        description:
          'Defluo derideo repudiandae cotidie ciminatio sol quis civitas. Spero quam odio consuasor theca conturbo.',
        imageId: 5,
      },
      {
        dishId: 1291,
        dishName: 'Pancakes',
        dishRate: 4,
        price: '37.05',
        currency: 'LKR',
        calories: '31 kcal',
        description:
          'Denuo defluo demens cimentarius bellum error cicuta bestia nisi. Amet demergo desolo labore.',
        imageId: 9,
      },
    ],
  },
  {
    categoryId: 47,
    categoryName: '💡 Desserts 💡',
    dishes: [
      {
        dishId: 1309,
        dishName: 'Cheesecake',
        dishRate: 3,
        price: '37.69',
        currency: 'LKR',
        calories: '141 kcal',
        description:
          'Officiis allatus debitis totus defessus amet aperio dolor uberrime amiculum. Delinquo vero umbra barba valeo autem substantia.',
        imageId: 2,
      },
      {
        dishId: 1316,
        dishName: 'Chocolate Cake',
        dishRate: 3,
        price: '55.19',
        currency: 'LKR',
        calories: '100 kcal',
        description:
          'Suppellex animi terga animus demergo traho totus advoco venio audentia. Suspendo libero totidem virga audentia tredecim theatrum compello.',
        imageId: 1,
      },
      {
        dishId: 1308,
        dishName: 'Chocolate Cake',
        dishRate: 3,
        price: '33.01',
        currency: 'LKR',
        calories: '53 kcal',
        description:
          'Demens valde inventore video. Civis abundans ater assumenda thermae commodo ipsa.',
        imageId: 7,
      },
      {
        dishId: 1307,
        dishName: 'Fruit Salad',
        dishRate: 1,
        price: '56.99',
        currency: 'LKR',
        calories: '124 kcal',
        description:
          'Pariatur a cilicium creta torqueo atavus valetudo. Autus aliquam vestigium averto adulescens stipes apto cupiditas nostrum deorsum.',
        imageId: 7,
      },
      {
        dishId: 1313,
        dishName: 'Fruit Salad',
        dishRate: 1,
        price: '12.85',
        currency: 'LKR',
        calories: '145 kcal',
        description:
          'Iure clarus alter ut demens veritas crebro. Beatus pauper adaugeo tergum comminor.',
        imageId: 8,
      },
      {
        dishId: 1312,
        dishName: 'Ice Cream',
        dishRate: 1,
        price: '14.99',
        currency: 'LKR',
        calories: '138 kcal',
        description:
          'Thorax demo synagoga fugiat demo pariatur acervus. Communis abbas comitatus vorago altus aegre spiculum.',
        imageId: 7,
      },
      {
        dishId: 1306,
        dishName: 'Tiramisu',
        dishRate: 1,
        price: '26.75',
        currency: 'LKR',
        calories: '71 kcal',
        description:
          'Molestiae vae contabesco velum aranea adimpleo textor copiose video suus. Defero textilis denego videlicet accedo repudiandae corroboro ambulo audeo.',
        imageId: 7,
      },
      {
        dishId: 1310,
        dishName: 'Tiramisu',
        dishRate: 5,
        price: '36.69',
        currency: 'LKR',
        calories: '113 kcal',
        description:
          'Solutio paens aspicio. Audentia vitium suus cohors tremo.',
        imageId: 7,
      },
      {
        dishId: 1311,
        dishName: 'Tiramisu',
        dishRate: 2,
        price: '58.45',
        currency: 'LKR',
        calories: '135 kcal',
        description:
          'Quod vulticulus reprehenderit. Arguo tamisium numquam quaerat aureus summopere natus animadverto.',
        imageId: 1,
      },
      {
        dishId: 1315,
        dishName: 'Tiramisu',
        dishRate: 2,
        price: '62.09',
        currency: 'LKR',
        calories: '65 kcal',
        description:
          'Absconditus conatus concedo apud thorax dolores triumphus sollicito aegrus labore. Temporibus surgo itaque dolore volutabrum complectus caterva allatus.',
        imageId: 3,
      },
      {
        dishId: 1314,
        dishName: 'Watalappan',
        dishRate: 5,
        price: '13.09',
        currency: 'LKR',
        calories: '74 kcal',
        description:
          'Cena cilicium viscus vulgus. Canis ratione varietas eius.',
        imageId: 8,
      },
    ],
  },
  {
    categoryId: 44,
    categoryName: '😀 Sandwiches & Wraps 😀',
    dishes: [
      {
        dishId: 1286,
        dishName: 'Club Sandwich',
        dishRate: 2,
        price: '29.19',
        currency: 'LKR',
        calories: '72 kcal',
        description:
          'Aveho tenetur denique deficio tubineus. Maiores animadverto caterva molestiae arca.',
        imageId: 8,
      },
      {
        dishId: 1284,
        dishName: 'Club Sandwich',
        dishRate: 1,
        price: '47.55',
        currency: 'LKR',
        calories: '62 kcal',
        description:
          'Xiphias sodalitas capillus charisma arcus turba admoveo umquam sol iste. Vicissitudo theologus subito truculenter sursum.',
        imageId: 10,
      },
      {
        dishId: 1285,
        dishName: 'Philly Cheesesteak',
        dishRate: 1,
        price: '57.25',
        currency: 'LKR',
        calories: '76 kcal',
        description: 'Odit deprecator vulgivagus. Vinitor peccatus quidem.',
        imageId: 8,
      },
      {
        dishId: 1283,
        dishName: 'Philly Cheesesteak',
        dishRate: 2,
        price: '50.85',
        currency: 'LKR',
        calories: '147 kcal',
        description: 'Vicinus volup patria. Caste clementia pectus eius.',
        imageId: 8,
      },
      {
        dishId: 1281,
        dishName: 'Philly Cheesesteak',
        dishRate: 3,
        price: '12.49',
        currency: 'LKR',
        calories: '83 kcal',
        description:
          'Clementia absque vitium acer aestivus distinctio. Crastinus earum triduana barba aureus tam.',
        imageId: 8,
      },
      {
        dishId: 1282,
        dishName: 'Vegetable Panini',
        dishRate: 3,
        price: '50.85',
        currency: 'LKR',
        calories: '100 kcal',
        description:
          'Delinquo consuasor studio utrimque decor. Atqui accommodo copiose celer.',
        imageId: 6,
      },
    ],
  },
];


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
