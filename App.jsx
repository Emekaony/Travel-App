import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Home from './src/screens/Home';

const App = () => {
  return <Home />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
