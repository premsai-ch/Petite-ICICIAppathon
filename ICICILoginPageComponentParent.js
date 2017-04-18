import React, { Component, } from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import BackgroundImage from './Components/BackgroundImage.js'

class  IciciLoginPageComponentParent extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {'password':''}
    
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
    <View style={LoginpageStyles.topdiv}>    
    
    <Image
            style={LoginpageStyles.logo}
            resizeMode={"contain"}
            source={require('./img/StartPage/hdpi/Logo.png')}
            key={"bcdlkscbvd"}
            />  
        
      <Image
            style={LoginpageStyles.iciciLogo}
            resizeMode={"contain"}
            source={require('./img/StartPage/hdpi/ICICILogo.png')}
            key={"bckdacdis"}
            /> 
    </View>
    <View style={{flex:1}}>
    </View>
    <View style={{flex: 1,
                justifyContent: "space-around",
                alignItems: 'center',
          }}>
        
        <Image 
            style={LoginpageStyles.textInputImageStyle}
            resizeMode={"stretch"}
            source={require("./img/LoginPage/hdpi/Name.png")}
            key={"abcdeefhfg"}
          >
          <View style= {LoginpageStyles.MoneyInputTextFieldView}>
                <TextInput style={LoginpageStyles.InputTextStyle}
                  underlineColorAndroid = {'transparent'}
                  selectTextOnFocus={true}
                  ref="secret"
                  returnKeyType={'done'}
                  keyboardType="default"
                  secureTextEntry={false}
                  onSubmitEditing={
                    (event)=> {this.setState({password:event.nativeEvent.text}); this.refs.secret.blur()} }
                  > Bank Customer ID </TextInput> 
              </View>
      </Image>
      
    
        <Image 
            style={LoginpageStyles.textInputImageStylePassword}
            resizeMode={"stretch"}
            source={require("./img/LoginPage/hdpi/TextInput.png")}
            key={"abcddsdeefhfg"}
          >
          <View style= {LoginpageStyles.MoneyInputTextFieldView}>
                <TextInput style={LoginpageStyles.InputTextStyle}
                  underlineColorAndroid = {'transparent'}
                  selectTextOnFocus={true}
                  ref="secret"
                  returnKeyType={'done'}
                  keyboardType="default"
                  secureTextEntry={false}
                  onSubmitEditing={
                    (event)=> {this.setState({password:event.nativeEvent.text}); this.refs.secret.blur()} }
                  >Password</TextInput> 
              </View>
      </Image>
        </View>
        
        <View style={{flex: 1,
                      justifyContent: "space-around",
                      alignItems: 'center',
                     }}>
          <TouchableOpacity
                onPress={() => {this.navigate('parentshomePage')}}
                activeOpacity={60 / 100}
              >
          <Image 
            style={LoginpageStyles.loginButtonStyle}
            resizeMode={"stretch"}
            source={require("./img/LoginPage/hdpi/LoginButton.png")}
            key={"abcderwereefsdfhfg"}
          />
          </TouchableOpacity>
          <Text ></Text>
        </View>
      </BackgroundImage>

        )}
}
  

const LoginpageStyles = StyleSheet.create({
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
  textInputImageStyle: {
    width:360,
    height: 80
  },
  textInputImageStylePassword: {
    width:360,
    height: 80,
    marginTop : 30,
  },
  InputTextStyle: {
    color: '#FFFFFF',
    fontFamily: "Azo Sans Uber",
    fontSize: 28,
    lineHeight: 26,
    textAlign: 'center',
  },
    MoneyInputTextFieldView: {
    flex:1, 
    justifyContent:'center', 
    alignItems: 'flex-start',
    marginLeft: 48,
  }, 
  loginButtonStyle: {
    width: 284,
    height: 64,
  },
  registerText: {
	color: '#9013FE',
	fontFamily: "Helvetica Neue, Helvetica, Arial",
	fontSize: 20,
	fontWeight: "500",
	lineHeight: 30,
	textAlign: 'center'
},
})

export default IciciLoginPageComponentParent