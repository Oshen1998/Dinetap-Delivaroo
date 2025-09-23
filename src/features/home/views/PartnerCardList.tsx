import React, { useCallback } from 'react';
import { FlatList, Alert, StyleSheet } from 'react-native';
import { PartnerCardData } from '../../../constants/interface/partnerCard';
import PartnerCard from '../../../components/cards/HomeCards/PartnerCard';
import { useDefaultHooks } from '../../../hooks/useLanguage';
import { images } from '../../../themes/images';
import i18n from '../../../i18n';

const PartnerCardList = () => {


  const handleAction = useCallback((id: string) => {
    Alert.alert('Action Pressed', `Button for card ID: ${id} pressed!`);
  }, []);

  const renderItem = ({ item }: { item: PartnerCardData }) => (
    <PartnerCard item={item} onActionPress={handleAction} />
  );

  useDefaultHooks()

const DUMMY_DATA: PartnerCardData[] = [
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


  return (
    <FlatList
      data={DUMMY_DATA}
      renderItem={renderItem}
      scrollEnabled={false}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.partnerList}
    />
  );
};

const styles = StyleSheet.create({
  partnerList: {
    paddingVertical: 10,
  },
});

export default PartnerCardList;
