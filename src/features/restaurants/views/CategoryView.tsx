import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import AppText from '../../../components/texts/AppText';
import SpyFlatList from '../../../components/spyList/SpyFlatList';

export interface RestaurantData {
  name: string;
  categories: string[];
  distance: string;
  openTime: string;
  openDay: string;
  minimumOrder: string;
  deliveryFee: string;
  rating: number;
  reviewCount: number;
  restaurantImage: ImageSourcePropType;
}

export interface RestaurantScreenProps {
  restaurantData: RestaurantData;
  onBack?: () => void;
  onStartGroupOrder: () => void;
  onChangeDelivery?: () => void;
}

const CategoryView = ({
  restaurantData,
  onBack,
  onStartGroupOrder,
  onChangeDelivery,
}: RestaurantScreenProps) => {



  const {
    name,
    categories,
    distance,
    openTime,
    openDay,
    minimumOrder,
    deliveryFee,
    rating,
    reviewCount,
    restaurantImage,
  } = restaurantData;



  return (
    <ScrollView
      style={styles.container}
      stickyHeaderIndices={[4]}
      nestedScrollEnabled={false} // Disable nested scrolling for outer ScrollView
        showsVerticalScrollIndicator={false}
    >
      {/* Fixed Header Section */}
      <View style={styles.headerContainer}>
        {/* Hero Image with Back Button and Group Order */}
        <View style={styles.heroSection}>
          <Image source={restaurantImage} style={styles.heroImage} />

          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>

          {/* Group Order Button */}
          <TouchableOpacity
            style={styles.groupOrderButton}
            onPress={onStartGroupOrder}
          >
            <Text style={styles.groupOrderIcon}>👥</Text>
            <Text style={styles.groupOrderText}>Start group order</Text>
          </TouchableOpacity>
        </View>

        {/* Restaurant Info */}
        <View style={styles.restaurantInfo}>
          <Text style={styles.restaurantName}>{name}</Text>
          <Text style={styles.categories}>{categories.join(' · ')}</Text>
          <Text style={styles.details}>
            {distance} · Opens at {openTime} on {openDay} · {minimumOrder}{' '}
            minimum · {deliveryFee} delivery
          </Text>
        </View>
      </View>

      {/* Info Section */}
      <TouchableOpacity style={styles.infoRow}>
        <View style={styles.infoIcon}>
          <AppText>i</AppText>
        </View>
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoTitle}>Info</Text>
          <Text style={styles.infoSubtitle}>
            Map, allergens and hygiene rating
          </Text>
        </View>
        <Text style={styles.chevron}>›</Text>
      </TouchableOpacity>

      {/* Rating Section */}
      <TouchableOpacity style={styles.infoRow}>
        <View style={styles.ratingIcon}>
          <Text style={styles.star}>★</Text>
        </View>
        <View style={styles.infoTextContainer}>
          <Text style={styles.ratingText}>{rating} Excellent</Text>
          <Text style={styles.reviewText}>See all {reviewCount} reviews</Text>
        </View>
        <Text style={styles.chevron}>›</Text>
      </TouchableOpacity>

      {/* Delivery Section */}
      <View style={styles.infoRow}>
        <View style={styles.deliveryIcon}>
          <Text style={styles.deliveryIconText}>🚴</Text>
        </View>
        <View style={styles.infoTextContainer}>
          <Text style={styles.deliveryText}>Deliver</Text>
        </View>
        <TouchableOpacity onPress={onChangeDelivery}>
          <Text style={styles.changeText}>Change</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.spyFlatListContainer}>
        <SpyFlatList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  heroSection: {
    position: 'relative',
    height: 200,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButtonText: {
    fontSize: 20,
    color: '#333',
  },
  groupOrderButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  groupOrderIcon: {
    marginRight: 8,
    fontSize: 16,
  },
  groupOrderText: {
    color: '#00bfa5',
    fontWeight: '600',
    fontSize: 14,
  },
  restaurantInfo: {
    padding: 16,
  },
  restaurantName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  categories: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  scrollContent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  infoIconText: {
    color: '#666',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#4caf50',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  star: {
    color: '#fff',
    fontSize: 16,
  },
  deliveryIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#00bfa5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  deliveryIconText: {
    fontSize: 16,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  infoSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4caf50',
    marginBottom: 2,
  },
  reviewText: {
    fontSize: 14,
    color: '#666',
  },
  deliveryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  chevron: {
    fontSize: 24,
    color: '#ccc',
  },
  changeText: {
    fontSize: 16,
    color: '#00bfa5',
    fontWeight: '600',
  },
  tabsContainer: {
    marginTop: 8,
    paddingHorizontal: 16,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginRight: 12,
    borderRadius: 25,
    backgroundColor: '#f8f8f8',
  },
  activeTab: {
    backgroundColor: '#00bfa5',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  contentPlaceholder: {
    padding: 32,
    alignItems: 'center',
  },
  placeholderText: {
    color: '#999',
    fontSize: 16,
  },
  spyFlatListContainer: {
    flex: 1,
    minHeight: 400, 
    backgroundColor: '#fff',
  },
});

export default CategoryView;
