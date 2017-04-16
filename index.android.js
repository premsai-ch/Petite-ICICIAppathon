/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native'
import BackgroundImage from './Components/BackgroundImage.js'

class Project extends Component {
  render() {
    return (    
      <BackgroundImage>
       
      </BackgroundImage>
    );
  }
}


AppRegistry.registerComponent('Project', () => Project);
