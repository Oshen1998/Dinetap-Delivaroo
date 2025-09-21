import React, { useCallback } from 'react';
import { FlatList, Alert, StyleSheet } from 'react-native';
import { PartnerCardData } from '../../../constants/interface/partnerCard';
import PartnerCard from '../../../components/cards/HomeCards/PartnerCard';
import { DUMMY_DATA } from '../../../constants';



const PartnerCardList = () => {
  
  const handleAction = useCallback((id: string) => {
    Alert.alert('Action Pressed', `Button for card ID: ${id} pressed!`);
  }, []);

  const renderItem = ({ item }: { item: PartnerCardData }) => (
    <PartnerCard item={item} onActionPress={handleAction} />
  );

  return (
    <FlatList
      data={DUMMY_DATA}
      renderItem={renderItem}
      scrollEnabled={false}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.partnerList} 
    />
  );
};

const styles = StyleSheet.create({
    partnerList:{
        paddingVertical: 10
    }
})

export default PartnerCardList;