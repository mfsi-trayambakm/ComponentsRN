import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
    <View style={styles.container} />
      <Button />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
});