import React from 'react';
import {Pressable, FlatList, Text, StyleSheet} from 'react-native';

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  const renderCategoryItem = ({item}) => {
    const selected = item === selectedCategory;

    return (
      <Pressable
        onPress={() => onCategoryPress(item)}
        style={[
          styles.categoryTextContainer,
          selected ? styles.selectedCategoryTextContainer : {},
        ]}>
        <Text
          style={[
            styles.categoryText,
            selected ? styles.selectedCategoryText : {},
          ]}>
          {item}
        </Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={categories}
      renderItem={({item}) => renderCategoryItem({item})}
    />
  );
};

const styles = StyleSheet.create({
  categoryTextContainer: {
    marginRight: 17,
    marginVertical: 14,
  },
  selectedCategoryTextContainer: {
    borderBottomColor: '#4681A3',
    borderBottomWidth: 2,
  },
  categoryText: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: 'bold',
    paddingVertical: 2,
  },
  selectedCategoryText: {
    color: '#000000',
  },
});

export default React.memo(Categories);
