/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  
  state = {
    count: 0,
  }

  add = () => {
    this.setState({
      count: this.state.count + 1
    })
  };

  subtract = () => {
    this.setState({
      count: this.state.count - 1
    });
  };


  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={ styles.container}>
          <Text style={styles.count}> {this.state.count} </Text>
          <TouchableOpacity onPress={this.add}>
            <Text style={styles.buttonText} >Add</Text>
          </TouchableOpacity>

          <Button title="Subtract" onPress={this.subtract} /> 
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent : 'center',
    alignItems: 'center',
  },
  count:{
    fontSize: 60,
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 60,
    fontWeight: 'bold',
  }
});

export default App;
