import React, { Component, } from 'react'
import { View, StyleSheet, Image, Text, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native'
import BackgroundImage from './Components/BackgroundImage.js'

class RegistrationPageComponent extends Component {

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
        <View style={registrationpageStyles.topdiv}>

          <Image
            style={registrationpageStyles.logo}
            resizeMode={"contain"}
            source={require('./img/StartPage/hdpi/Logo.png')}
          />

          <Image
            style={registrationpageStyles.iciciLogo}
            resizeMode={"contain"}
            source={require('./img/StartPage/hdpi/ICICILogo.png')}
          />
        </View>
        <View style={registrationpageStyles.seconddiv}>
          
        </View>

        <View style={registrationpageStyles.thirddiv}>

          <View style={registrationpageStyles.inputdiv} >
            <Image
            style={registrationpageStyles.inpLogo}
            resizeMode={"contain"}
            source={require('./img/RegistrationPage/hdpi/Name.png')}
                                                           
          >
              <View style= {registrationpageStyles.MoneyInputTextFieldView}>
                <TextInput style={registrationpageStyles.InputTextStyle}
                  underlineColorAndroid = {'transparent'}
                  selectTextOnFocus={true}
                  ref="secret"
                  returnKeyType={'done'}
                  keyboardType="default"
                  secureTextEntry={false}
                  onSubmitEditing={
                    (event)=> {this.setState({password:event.nativeEvent.text}); this.refs.secret.blur()} }
                  >My Name is </TextInput> 
              </View>
            </Image>
          </View>
          <View style={registrationpageStyles.inputdiv} ><Image
            style={registrationpageStyles.inpLogo}
            resizeMode={"contain"}
            source={require('./img/RegistrationPage/hdpi/PhoneNo.png')}
          >
            <View style= {registrationpageStyles.MoneyInputTextFieldView}>
                <TextInput style={registrationpageStyles.InputTextStyle}
                  underlineColorAndroid = {'transparent'}
                  selectTextOnFocus={true}
                  ref="secret"
                  returnKeyType={'done'}
                  keyboardType="default"
                  secureTextEntry={false}
                  onSubmitEditing={
                    (event)=> {this.setState({password:event.nativeEvent.text}); this.refs.secret.blur()} }
                  >My Phone Number is </TextInput> 
              </View>
            </Image>
          </View>
          <View style={registrationpageStyles.inputdiv} ><Image
            style={registrationpageStyles.inpLogo}
            resizeMode={"contain"}
            source={require('./img/RegistrationPage/hdpi/password.png')}
          >
            <View style= {registrationpageStyles.MoneyInputTextFieldView}>
                <TextInput style={registrationpageStyles.InputTextStyle}
                  underlineColorAndroid = {'transparent'}
                  selectTextOnFocus={true}
                  ref="secret"
                  returnKeyType={'done'}
                  keyboardType="default"
                  secureTextEntry={true}
                  onSubmitEditing={
                    (event)=> {this.setState({password:event.nativeEvent.text}); this.refs.secret.blur()} }
                  >My Secret Code is </TextInput> 
              </View>
            </Image>
          </View>

        </View>
        <View style={registrationpageStyles.fourthdiv}>
          <TouchableOpacity
                onPress={() => {this.navigate('homePage')}}
                activeOpacity={60 / 100}
              >
          <Image
            style={registrationpageStyles.regLogo}
            resizeMode={"contain"}
            source={require('./img/RegistrationPage/hdpi/RegistrationButton.png')}
          />
          </TouchableOpacity>


        </View>
        <View style={registrationpageStyles.fifthdiv}>
          <TouchableOpacity
                onPress={() => {this.navigate('loginPage')}}
                activeOpacity={60 / 100}
              >
          <Text style= {registrationpageStyles.registerText}>I Want to Login </Text>
          </TouchableOpacity>
        </View>
      </BackgroundImage>
    )
  }
}

const registrationpageStyles = StyleSheet.create({
  mainview: {
    marginBottom: 20,
    justifyContent: 'space-around',
    alignItems: "stretch",
    flex: 1,
  },
  topdiv: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  logo: {
    height: 84,
    width: 252,
  },
  iciciLogo: {
    height: 38,
    width: 189,
    marginLeft: 170,
    marginTop: 10,
  },
  regLogo: {
    height: 84,
     width: 300,
  },
  inpLogo:{
    height: 80,
    width :360,
  },
  seconddiv: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "flex-end",
    flex: 1,
  },
  thirddiv: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: "transparent",
    flex: 3

  },
  inputTextStyle: {
    color: '#FFFFFF',
    fontFamily: "Azo Sans Uber",
    fontSize: 20,
    lineHeight: 26,
    textAlign: 'center',
  },
  inputTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fourthdiv: {
    flexDirection: 'row',
    marginLeft: 45,
    marginRight: 45,
    justifyContent: "space-around",
    alignItems: "center",

    flex: 1,
  },
  fifthdiv: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "space-around",
    alignItems: "center",
    flex: 0.5,
  },
  inputdiv: {
    flexDirection: 'row',
    marginLeft: 60,
    marginRight: 60,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  orTextStyle: {
    fontSize: 20,
    // backgroundColor: "violet",
  },
  circle: {
    width: 100,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'white'
  },
 registerText: {
	color: '#9013FE',
	fontFamily: "Helvetica Neue, Helvetica, Arial",
	fontSize: 20,
	fontWeight: "500",
	lineHeight: 30,
	textAlign: 'center'
},
   InputTextStyle: {
    color: '#FFFFFF',
    fontFamily: "Azo Sans Uber",
    fontSize: 24,
    lineHeight: 26,
    textAlign: 'center',
  },
    MoneyInputTextFieldView: {
    flex:1, 
    justifyContent:'center', 
    alignItems: 'flex-start',
    marginLeft: 48,
  },

})

export default RegistrationPageComponent