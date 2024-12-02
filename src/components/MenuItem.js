import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

const MenuItem = ({ title, icon }) => {
  return (
    <View style={styles.menuItem}>
      <Text style={styles.menuIcon}>{icon}</Text>
      <Text style={styles.menuText}>{title}</Text>
    </View>
  );
};

export default MenuItem;
