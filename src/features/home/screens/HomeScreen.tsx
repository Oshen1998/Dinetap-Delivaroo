import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import HomeSearch from '../views/HomeSearch';
import InfiniteScrollGrid from '../../../components/scrollgrid/InfiniteScrollGrid';
import { useThemeStore } from '../../../store/themeStore';
import PartnerCardList from '../views/PartnerCardList';

const HomeScreen = () => {
  const { Colors } = useThemeStore();

  return (
    <View
      style={[styles.container, { backgroundColor: Colors.Background.PRIMARY }]}
    >
      <ScrollView
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <HomeSearch />
        <View style={styles.top}>
          <InfiniteScrollGrid />
        </View>
        <View style={styles.top}>
          <PartnerCardList />
        </View>
        <View style={styles.footerGap} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  top: {
    top: 50,
  },
  footerGap:{
    paddingBottom: 30
  }
});

export default HomeScreen;
