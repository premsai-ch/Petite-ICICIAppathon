import React, { Component, } from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native'
import BackgroundImage from './BackgroundImage.js'

class StartPageComponent extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
    
    this.navigate = this.navigate.bind(this)
  }

  navigate(pageName) {
    this.props.navigator.push({
      pageName
    })
  }
  
  render() {
    return (
  <BackgroundImage>
    <View style={startpageStyles.topdiv}>    
    
    <Image
            style={startpageStyles.logo}
            resizeMode={"contain"}
            source={require('../img/StartPage/hdpi/Logo.png')}
            key={"bcdlkscbvd"}
            />  
        
      <Image
            style={startpageStyles.iciciLogo}
            resizeMode={"contain"}
            source={require('../img/StartPage/hdpi/ICICILogo.png')}
            key={"bckdacdis"}
            /> 
    </View>
    <View style= {startpageStyles.seconddiv}>
      <TouchableOpacity
          onPress={() => {this.navigate('loginPage')}}
          activeOpacity={60 / 100}
          >
        <Image
              style={startpageStyles.princessImage}
              resizeMode={"stretch"}
            source={require('../img/StartPage/hdpi/Prince.png')}
            key={"babOSOCUBOCU"}
              /> 
         </TouchableOpacity>
      
      <TouchableOpacity
          onPress={() => {this.navigate('loginPage')}}
          activeOpacity={60 / 100}
          >
        <Image
              style={startpageStyles.princessImage}
              resizeMode={"stretch"}
            source={require('../img/StartPage/hdpi/Princess.png')}
            key={"bcdlsacucoad"}
              /> 
         </TouchableOpacity>
      <TouchableOpacity
          onPress={() => {this.navigate('iciciLogin')}}
          activeOpacity={60 / 100}
         >
        <Image
              style={startpageStyles.princessImage}
              resizeMode={"stretch"}
            source={require('../img/StartPage/hdpi/Parent.png')}
            key={"fbksafdcbndl"}
              /> 
         </TouchableOpacity>
      
      
      <TouchableOpacity
          onPress={() => {this.navigate('iciciLogin')}}
          activeOpacity={60 / 100}
          >
        <Image
              style={startpageStyles.princessImage}
              resizeMode={"stretch"}
            source={require('../img/StartPage/hdpi/Merchant.png')}
            key = {"agkvdsa"}
              /> 
         </TouchableOpacity>
      
      
      
        </View>

        </BackgroundImage>
    )
    
  }
}

const startpageStyles = StyleSheet.create({
  topdiv: {
    flex:1, 
    justifyContent: 'space-around', 
    alignItems: 'center', 

  },
  logo:{
     width: 252, 
    height: 84,
  },
  iciciLogo: {
     alignSelf: 'flex-end',
    paddingRight:30, 
    width: 189, 
    height: 38, 
  },
  seconddiv: {
   flex:4,
    justifyContent:'space-around',
    alignItems:'center', 
    marginTop: 20,
  },
  princessImage: {
    width:  279,
    height: 78,
  },


})

export default StartPageComponent