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
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native'



class BackgroundImage extends Component {

    render() {
        return (
            <Image source={require('./img/StartPage/hdpi/BG_Image.png')}
                  style={startpageStyles.backgroundImage}>

                  {this.props.children}

            </Image>
        )
    }
}


class Project extends Component {
  render() {
    return (
      
    <BackgroundImage>
    <View style={startpageStyles.topdiv}>    
    
    <Image
            style={startpageStyles.logo}
            resizeMode={"contain"}
            source={require('./img/StartPage/hdpi/Logo.png')}
            />  
        
      <Image
            style={startpageStyles.iciciLogo}
            resizeMode={"contain"}
            source={require('./img/StartPage/hdpi/ICICILogo.png')}
            /> 
    </View>
    <View style={startpageStyles.seconddiv}>
      <TouchableHighlight
          onPress={() => {}}
          activeOpacity={75 / 100}
          underlayColor={"rgba(221,99,99,1)"}>
      <Image
            style={startpageStyles.princeImage}
            resizeMode={"cover"}
            source={require('./img/StartPage/hdpi/Prince.png')}
            /> 
     </TouchableHighlight>
 
     <Text style={startpageStyles.princeText}>
          PRINCE
        </Text>
    </View>
    <View style={startpageStyles.thirddiv}>
      <Text style={startpageStyles.orTextStyle}>
          OR
        </Text>
    </View>
    <View style={startpageStyles.fourthdiv}>
      <TouchableHighlight
          onPress={() => {}}
          activeOpacity={75 / 100}
          underlayColor={"rgba(221,99,99,1)"}>
        <Image
              style={startpageStyles.princessImage}
              resizeMode={"stretch"}
            source={require('./img/StartPage/hdpi/Princess.png')}
              /> 
         </TouchableHighlight>
      <Text style={startpageStyles.princessText}>
          PRINCESS
        </Text>
   

      
        </View>
        </BackgroundImage>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const startpageStyles = StyleSheet.create({
  backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
  mainview: {
    marginBottom: 20,
    justifyContent: 'space-around',
    alignItems: "stretch",
    flex: 1,
  },
  topdiv: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:  2 ,
  },
  logo:{
    	height: 84,
        width: 252,
  },
  iciciLogo: {
    height: 38,
    width: 189,
    marginLeft: 100
  },
  seconddiv: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "space-around",
    alignItems: "flex-end",
    flex: 2,
  },
  thirddiv: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  fourthdiv: {
     flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "space-around",
    alignItems: "flex-end",
    flex: 2,
  },
  princeImage: {
    width:  64 ,
    marginRight: 0,
  },
  princeText: {
    height: 42,
    width: 132,
    color: '#2496C7',
    
    fontFamily: "Azo Sans Uber",
        fontSize: 32,
        lineHeight: 42,
        textAlign: 'center',
        alignSelf: 'center',
  },
  princessImage: {
    width:  64 ,
    marginRight: 0,
  },
  princessText: {
    	height: 42,
        width: 174,
        color: '#C153BF',
        fontFamily: "Azo Sans Uber",
        fontSize: 32,
        lineHeight: 42,
        textAlign: 'center',
        alignSelf: 'center',

  },
  orTextStyle: {
    fontSize: 30
  },


})


AppRegistry.registerComponent('Project', () => Project);
