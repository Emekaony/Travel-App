import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const AttractionCard = ({imageSrc, title, subtitle, style}) => {
  return (
    <View style={[styles.card, style]}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image style={styles.icon} source={require('../assets/location.png')} />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 4,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 15,
    marginBottom: 12,
  },
  image: {
    width: (width - 96) / 2,
    borderRadius: 15,
    height: 120,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 12,
    marginLeft: 6,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: '300',
    color: 'rgba(0,0,0,0.5)',
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 6,
  },
  row: {
    marginBottom: 12,
    marginLeft: 6,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AttractionCard;
