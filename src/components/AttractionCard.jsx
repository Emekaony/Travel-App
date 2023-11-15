import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const AttractionCard = ({imageSrc, title, subtitle}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.subtitleContainer}>
        <Image style={styles.icon} source={require('../assets/location.png')} />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginRight: 16,
    padding: 4,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 15,
  },
  image: {
    width: (width - 96) / 2,
    height: 120,
    borderRadius: 15,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 12,
    marginLeft: 6,
  },
  subtitleContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    marginLeft: 6,
    marginTop: 4,
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 6,
  },
  subtitle: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 8,
    fontWeight: '300',
  },
});

export default AttractionCard;
