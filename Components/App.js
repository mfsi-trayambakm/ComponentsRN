import React, { Component } from 'react';
import {
  View,
  Button,
  StyleSheet,
  StatusBar,
  Text,

} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <View style={styles.roundButton} >
          <Text style={{ alignSelf: 'center', color: '#fff' }} > App Logo </Text>
        </View>

        <Login />
      </View>
    );
  }
}


const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
} = FBSDK;

var Login = React.createClass({
  render: function () {
    return (
      <View>
        <LoginButton
          publishPermissions={["public_profile, user_friends, email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")} />
      </View>
    );
  }
});

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

  },
});
