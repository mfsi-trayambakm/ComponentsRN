import React, { Component } from 'react';
import {
  View,
  Button,
  StyleSheet,
  StatusBar,
  Text,
  Image,

} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <View style={styles.roundButton} >
          <Text style={{ alignSelf: 'center', color: '#fff' }} > App Logo </Text>
        </View>
        <Image style={styles.facebookButton} source={require('./fb-sign-in-button.png')} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  roundButton: {
    height: 150,
    width: 150,
    borderRadius: 150,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  facebookButton: {
    height: 50,
    width: 200,
    alignSelf: 'center',
    marginTop: 20,
    resizeMode: Image.resizeMode.contain,

  },
});
