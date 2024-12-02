import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/styles';

const ArticleCard = ({ title, description, image }) => {
  return (
    <View style={styles.articleCard}>
      <Image source={{ uri: image }} style={styles.articleImage} />
      <View style={styles.articleContent}>
        <Text style={styles.articleTitle}>{title}</Text>
        <Text style={styles.articleDescription}>{description}</Text>
      </View>
    </View>
  );
};

export default ArticleCard;
