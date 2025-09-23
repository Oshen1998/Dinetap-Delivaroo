import { ImageSourcePropType } from 'react-native';

export interface MenuItemData {
  restaurantId: number;
  name: string;
  price?: string; 
  description: string;
  restaurantImage?: ImageSourcePropType;
  isPopular?: boolean; 
}

export interface MenuItemCardProps {
  item: MenuItemData;
  onPress: (restaurantId: number) => void;
}