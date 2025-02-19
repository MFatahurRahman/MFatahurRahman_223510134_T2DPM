import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default Header;
