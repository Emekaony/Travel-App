import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({text, style}) => {
  const [stateText, setText] = useState('');

  const onTextPress = () => {
    setText('Updated state');
  };

  return (
    <Text onPress={onTextPress} style={[styles.title, style]}>
      {text}
    </Text>
  );
};

Title.defaultProps = {
  text: 'Default Text',
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: '#4681A3',
    fontWeight: 'bold',
  },
});

export default React.memo(Title);
