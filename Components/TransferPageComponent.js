import React, { Component, } from 'react'
import { View,StyleSheet,Image,Text,TouchableOpacity,TextInput,Alert } from 'react-native'

import BackgroundImage from './BackgroundImage.js'

class TransferPageComponent extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {amount:'0',comments:'',friendId:''}
    
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
        <View style={{flex: 1}}>
          <Image 
            style={TransferPageStyles.topbarImage}
            resizeMode={"stretch"}
            source={require("../img/PaymentsPage/hdpi/PaymentsTopBar.png")}
            key={"abcdeefhfg"}
          >
            <View style={TransferPageStyles.backArrowView}>
              <TouchableOpacity
                onPress={() => {this.navigate('payments')}}
                activeOpacity={60 / 100}
              >
                <Image 
                  style={TransferPageStyles.backArrowImage}
                  resizeMode={"stretch"}
                  source={require("../img/PaymentsPage/hdpi/BackArrow.png")}
                  key={"abfdskblfadcdeefg"}
                />
              </TouchableOpacity>
            </View>
          </Image>
        </View>
        <View style= {{flex: 6}}>
        <View style= {{flex:8, justifyContent:'center',alignItems:'center'}}>
          <Image 
                  style={{width: 380, height: 430,}}
                  resizeMode={"stretch"}
                  source={require("../img/TransferToFriendPage/hdpi/TransferToFriendBG.png")}
                  key={"abfdskblfadcdeefg"}
                >
            <View style={TransferPageStyles.transferBGView}>
                  <Image 
                  style={TransferPageStyles.inputTextBoxStyle}
                  resizeMode={"stretch"}
                  source={require("../img/TransferToFriendPage/hdpi/textInputbox.png")}
                  key={"abfdskblrewrfafdsfdcdeefg"}
                  >
                  <View style= {TransferPageStyles.inputTextView}>
                    <TextInput style={TransferPageStyles.inputTextStyle}
                      underlineColorAndroid = {'transparent'}
                      selectTextOnFocus={true}
                      ref="input"
                      returnKeyType={'done'}
                      keyboardType="default"
                      onSubmitEditing={
                      (event)=> {this.setState({friendId:event.nativeEvent.text}); this.refs.input.blur()} }
                  >FRIEND'S ID </TextInput>
                  </View>
                  </Image>
              
                  <Image 
                  style={TransferPageStyles.inputTextBoxStyle}
                  resizeMode={"stretch"}
                  source={require("../img/TransferToFriendPage/hdpi/textInputbox.png")}
                  key={"abfdskdsasfdblfadcdeefg"}  
                  >
                  <View style= {TransferPageStyles.inputTextView}>
                  <TextInput style={TransferPageStyles.inputTextStyle}
                      underlineColorAndroid = {'transparent'}
                      selectTextOnFocus={true}
                      ref="input"
                      returnKeyType={'done'}
                      keyboardType="numeric"
                      onSubmitEditing={
                      (event)=> {this.setState({amount:event.nativeEvent.text}); this.refs.input.blur()} }
                  >AMOUNT </TextInput>
                  </View>
                  </Image>
                  <Image 
                  style={TransferPageStyles.inputTextBoxStyle}
                  resizeMode={"stretch"}
                  source={require("../img/TransferToFriendPage/hdpi/textInputbox.png")}
                  key={"abfdskblfadcdeffhhefg"}
                  >
                  <View style= {TransferPageStyles.inputTextView}>
                    <TextInput style={TransferPageStyles.inputTextStyle}
                      underlineColorAndroid = {'transparent'}
                      selectTextOnFocus={true}
                      ref="input"
                      returnKeyType={'done'}
                      keyboardType="default"
                      onSubmitEditing={
                      (event)=> {this.setState({comments:event.nativeEvent.text}); this.refs.input.blur()} }
                  >COMMENTS </TextInput>
                  </View>
                  </Image>
                  <TouchableOpacity
                    onPress={() => Alert.alert(
                                'Confirmation',
                                'I want to transfer '+this.state.friendId+ ' a sum of '+this.state.amount+' Rupees',
                                [
                                  {text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                  {text: 'YES', onPress: () => console.log('OK Pressed')},
                                ],
                                { cancelable: false }
                              )}
                    activeOpacity={60 / 100}
                    >
                  <Image 
                  style={TransferPageStyles.transferButtonStyle}
                  resizeMode={"stretch"}
                  source={require("../img/TransferToFriendPage/hdpi/TransferButton.png")}
                  key={"abfdskblfadcdehhhdefg"}
                  />
              </TouchableOpacity>


            </View>
          </Image>
        </View>
        
        <View style={TransferPageStyles.footerView}>
          <TouchableOpacity
                onPress={() => {this.navigate('homePage')}}
                activeOpacity={60 / 100}
              >
              <Image 
                  style={{marginRight:24, width: 60, height: 60,}}
                  resizeMode={"stretch"}
                  source={require("../img/ScanPage/hdpi/HomeButton.png")}
                  key={"abfdskbfdsalfdaffadcdeefg"}
              />
          </TouchableOpacity>
              <Image 
                  style={{width: 160, height: 40,}}
                  resizeMode={"stretch"}
                  source={require("../img/ScanPage/hdpi/ICICILogo.png")}
                  key={"abfdskbfdsaldsadfdaffadcdeefg"}
              />
          </View>
        </View>
      </BackgroundImage>
    )
  }
}

const TransferPageStyles = StyleSheet.create({
  
  backArrowView: {
    flex:1,
    justifyContent:'center',
    alignItems:'flex-start',
  },
  backArrowImage: {
    width: 28,
    height: 38, 
    marginLeft: 18,
  },
    topbarImage: {
    flex: 1,
    width:null,
    height:null,
  },
  footerView: {
    flex:1, 
    flexDirection:'row',
    justifyContent:"flex-end",
    alignItems:'center',
  },
  inputTextBoxStyle: {
    marginTop: 30,
    width: 360, 
    height: 70,
  },
  transferBGView: {
    flex:1,
    justifyContent: 'space-around',
    alignItems:'center',
  },
  transferButtonStyle: {
    marginTop:30, 
    marginBottom:20, 
    width: 240, 
    height: 70,
  },
  inputTextStyle: {
    color: '#FFFFFF',
    fontFamily: "Azo Sans Uber",
    fontSize: 20,
    lineHeight: 26,
    textAlign: 'center',
  },
  inputTextView: {
    flex:1, 
    justifyContent:'center',
    alignItems:'center',
  }
  
})




export default TransferPageComponent