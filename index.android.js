/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Avatar from 'react-native-interactive-avatar';
 
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
  Navigator
} from 'react-native'
import BackgroundImage from './Components/BackgroundImage.js'
import StartPageComponent from './Components/StartPageComponent.js'
import HomePageComponent from './Components/HomePageComponent.js'
import MyAccountPageComponent from './Components/MyAccountPageComponent.js'
import PaymentsPageComponent from './Components/PaymentsPageComponent.js'
import HistoryPageComponent from './Components/HistoryPageComponent.js'
import BadgesPageComponent from './Components/BadgesPageComponent.js'
import ScanPageComponent from './Components/ScanPageComponent.js'
import TransferPageComponent from './Components/TransferPageComponent.js'
import MinistatementPageComponent from './Components/MinistatementPageComponent.js'
import LoginPageComponent from './LoginPageComponent.js'
import IciciLoginPageComponent from './ICICILoginPageComponent.js'

class Project extends Component {
  constructor() {
    super()
    
    this.renderScene = this.renderScene.bind(this)
  }
  renderScene(route, navigator) {
    if(route.pageName == 'startPage') {
      return <StartPageComponent navigator={navigator} />
    } else if (route.pageName === 'myAccount'){
      return <MyAccountPageComponent navigator={navigator} />
    } else if (route.pageName === 'payments'){
      return <PaymentsPageComponent navigator={navigator} />
    } else if (route.pageName === 'history'){
      return <HistoryPageComponent navigator={navigator} />
    } else if (route.pageName === 'badges'){
      return <BadgesPageComponent navigator={navigator} />
    } else if (route.pageName === 'homePage'){
      return <HomePageComponent navigator={navigator} />
    } else if (route.pageName === 'scanPage'){
      return <ScanPageComponent navigator={navigator} />
    } else if (route.pageName === 'transferFriend'){
      return <TransferPageComponent navigator={navigator} />
    } else if (route.pageName === 'ministatement'){
      return <MinistatementPageComponent navigator={navigator} />
    } else if (route.pageName === 'loginPage') {
      return <LoginPageComponent navigator={navigator}/>
    } else if (route.pageName === 'iciciLogin') {
      return <IciciLoginPageComponent navigator={navigator} />
    }
  }
  render() {
    return (    
      <Navigator
        initialRoute = {{'pageName':'startPage'}}
        renderScene = {this.renderScene}
        />
       
    );
  }
}


AppRegistry.registerComponent('Project', () => Project);
