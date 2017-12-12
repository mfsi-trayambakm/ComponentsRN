import React from 'react';
import {
  StyleSheet, Text, View, ScrollView, Platform,
  FlatList,
  Button,
  Dimensions,
  ActivityIndicator
} from 'react-native';

// import Button from './src/Button';

const { width, height } = Dimensions.get('window');

export default class App extends React.Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true });

    try {
      const response = await fetch('http://rest.learncode.academy/api/ttn/users');
      const data = await response.json();
      this.setState({ users: data, loading: false });
    } catch(e) {
      alert("Error" + e);
    }

    // fetch('http://rest.learncode.academy/api/ttn/users')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({ users: data, loading: false });
    //   })

    //   .catch(err => {
    //     alert("Error" + err);
    //   });

    console.log("This has executed before fetching users");
  }

  renderItem = ({ item }) => {
    console.log(">>>", item);
    return (
      <View style={{ flex: 1 }}>
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
      </View>
    )
  }

  createUser = () => {
    fetch('http://rest.learncode.academy/api/ttn/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: 'Trayambak Mishra',
        email: 'trayambak.mishra@tothenew.com'
      })
    })
      .then(resp => resp.json())
      .then(newUser => {
        console.log("User created", newUser);
        const users = this.state.users.concat([newUser]);
        this.setState({ users });
      })
      .catch(err => {
        alert("Error creating new user " + err);
      })
  }

  render() {
    const Comp = Platform.select({
      ios: () => <Text>This is again iOS</Text>,
      android: () => <Text>This is Android</Text>
    });

    return (
      <View style={styles.container}>

        <Button onPress={this.createUser} title={'Add new user'} />

        {
          this.state.loading ?
            <ActivityIndicator size={'large'} color={'blue'} /> :
            (
              <FlatList
                data={this.state.users}
                keyExtractor={(item, idx) => idx}
                renderItem={this.renderItem}
              />
            )
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        backgroundColor: '#fc0'
      },
      android: {
        backgroundColor: '#07f'
      }
    }),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
});
