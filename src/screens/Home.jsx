import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Title from '../components/Title';
import Categories from '../components/Categories';
import AttractionCard from '../components/AttractionCard';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Title text="Where do" style={{fontWeight: 'normal'}} />
        <Title text="want to go?" />

        <Title text="Explore More attractions" style={styles.subtitle} />

        <Categories
          selectedCategory={selectedCategory}
          onCategoryPress={setSelectedCategory}
          categories={['All', 'Home', 'Popular', "That's", 'Unique']}
        />
      </View>
      <View style={styles.row}>
        <AttractionCard
          subtitle="Rome"
          imageSrc="https://www.gaiam.com/cdn/shop/articles/31.jpg?v=1492026671"
          title="Entertainment Park"
        />
        <AttractionCard
          subtitle="Rome"
          imageSrc="https://www.gaiam.com/cdn/shop/articles/31.jpg?v=1492026671"
          title="Colloseum"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 32,
    marginTop: 32,
  },
  subtitle: {
    fontSize: 20,
    color: '#000',
    marginTop: 40,
    marginBottom: 18,
  },
  row: {
    flexDirection: 'row',
  },
});

export default React.memo(Home);
