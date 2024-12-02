import React, { useState } from 'react';
import { View, ScrollView, FlatList, Text } from 'react-native';
import Header from '../components/Header';
import Banner from '../components/Banner';
import MenuItem from '../components/MenuItem';
import ArticleCard from '../components/ArticleCard';
import styles from '../styles/styles';

const HomeScreen = () => {
  const [menus, setMenus] = useState([
    { id: 1, title: 'Konsultasi Dokter', icon: '🩺' },
    { id: 2, title: 'Toko Obat', icon: '💊' },
    { id: 3, title: 'Tes Lab', icon: '🧪' },
    { id: 4, title: 'Janji Medis', icon: '📅' },
  ]);

  const [articles, setArticles] = useState([
    {
      id: 1,
      title: 'Cara Menjaga Kesehatan Gigi dan Mulut',
      description: 'Tips mudah untuk menjaga kesehatan gigi dan mulut Anda.',
      image: 'https://teramedik.com/cenews/wp-content/uploads/2022/11/Untitled-design-27-scaled-e1668391316543.jpg',
    },
    {
      id: 2,
      title: 'Manfaat Rutin Periksa Kesehatan',
      description: 'Kenapa perlu memeriksa kesehatan secara rutin?',
      image: 'https://teramedik.com/cenews/wp-content/uploads/2022/11/Untitled-design-13-scaled-e1667549600530-150x150.jpg',
    },
  ]);

  return (
    <FlatList
    ListHeaderComponent={
      <>
        <Header title="MedicCall" />
        <Banner />
        <Text style={styles.sectionTitle}>Layanan Kami</Text>
        <FlatList
          data={menus}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MenuItem title={item.title} icon={item.icon} />}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.sectionTitle}>Artikel Kesehatan</Text>
      </>
    }
    data={articles}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <ArticleCard
        title={item.title}
        description={item.description}
        image={item.image}
      />
    )}
    showsVerticalScrollIndicator={false}
  />
  
  );
};

export default HomeScreen;
