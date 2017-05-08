/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Main from './Component/Main'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class NetEasyNews extends Component {

  render() {
    return (
      <Main/>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

AppRegistry.registerComponent('NetEasyNews', () => NetEasyNews);
