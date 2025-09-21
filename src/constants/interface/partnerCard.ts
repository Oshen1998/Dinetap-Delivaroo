import { ImageSourcePropType } from 'react-native';

export interface PartnerCardData {
  id: string
  image: ImageSourcePropType;
  title: string;
  description: string;
  actionTitle: string;
}

export interface PartnerCardProps {
  item: PartnerCardData;
  onActionPress: (id: string) => void;
}