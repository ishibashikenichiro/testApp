import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TextInput, Button, ListView, FlatList, Alert, Image} from 'react-native';

export default class Free extends Component {
  render() {
    return <Text>自由に使ってね！</Text>
  }
}

AppRegistry.registerComponent('Free', () => Free);