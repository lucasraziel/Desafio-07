import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import './config/ReactotronConfig';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
  },

  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
});

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.sectionDescription}>Hello World</Text>
    </View>
  );
};

export default App;
