import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/styles';

const Banner = () => {
  return (
    <View style={styles.banner}>
      <Image
        source={{ uri: 'https://fmclinic.co.id/wp-content/uploads/2022/08/Promo-Poli-Gigi-1536x513.jpeg' }}
        style={styles.bannerImage}
      />
      <Text style={styles.bannerText}>Promo Kesehatan Gigi Bulan Ini</Text>
    </View>
  );
};

export default Banner;
