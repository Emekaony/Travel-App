import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Title from '../components/Title';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" style={{fontWeight: 'normal'}} />
        <Title text="want to go?" />

        <Title text="Explore More attractions" style={styles.subtitle} />

        <Categories
          selectedCategory="All"
          categories={[
            'All',
            'Home',
            'Popular',
            'Historical',
            'Popular',
            'Historical',
            'Popular',
            'Historical',
          ]}
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
});

export default React.memo(Home);
