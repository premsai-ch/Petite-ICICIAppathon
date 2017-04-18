import React, { Component, } from 'react'
import { View,StyleSheet,Image,Text,TouchableHighlight,TextInput,Alert,TouchableOpacity } from 'react-native'

import BackgroundImage from './BackgroundImage.js'


class ScanPageComponent extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {amount:'0'}
    
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
            style={ScanPageStyles.topbarImage}
            resizeMode={"stretch"}
            source={require("../img/PaymentsPage/hdpi/PaymentsTopBar.png")}
            key={"abcdeefhfg"}
          >
            <View style={ScanPageStyles.backArrowView}>
              <TouchableOpacity
                onPress={() => {this.navigate('payments')}}
                activeOpacity={60 / 100}
              >
                <Image 
                  style={ScanPageStyles.backArrowImage}
                  resizeMode={"stretch"}
                  source={require("../img/PaymentsPage/hdpi/BackArrow.png")}
                  key={"abfdskblfadcdeefg"}
                />
              </TouchableOpacity>
            </View>
          </Image>
        </View>
        <View style= {{flex: 6}}>
          <View style= {ScanPageStyles.scanTabView}>
            <Image 
                  style={{width:400, height: 100}}
                  resizeMode={"stretch"}
                  source={require("../img/TransferToFriendPage/hdpi/textInputbox.png")}
                  key={"abfdskblfadcdeefg"}
              >
              <TextInput style={ScanPageStyles.MoneyInputText}
                  underlineColorAndroid = {'transparent'}
                  selectTextOnFocus={true}
                  ref="amount"
                  returnKeyType={'done'}
                  keyboardType="numeric"
                  onSubmitEditing={
                    (event)=> {this.setState({amount:event.nativeEvent.text}); this.refs.amount.blur()} }
                  >Amount </TextInput> 
            </Image>
          </View>
          
          <View style= {ScanPageStyles.QRImageView}>
            <Image 
                  style={{width: 272, height: 260,}}
                  resizeMode={"stretch"}
                  source={require("../img/ScanPage/hdpi/QRImage.png")}
                  key={"abfdskblfdaffadcdeefg"}
              />

          </View>
          
          <View style={ScanPageStyles.payButtonView}>
            <TouchableOpacity
                onPress={() => Alert.alert(
                                'Confirmation',
                                'Are you sure you want to pay '+this.state.amount+' Rupees ?',
                                [
                                  {text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                  {text: 'YES', onPress: () => console.log('OK Pressed')},
                                ],
                                { cancelable: false }
                              )}
                activeOpacity={60 / 100}
              >
            <Image 
                  style={{width: 240, height: 78,}}
                  resizeMode={"stretch"}
                  source={require("../img/ScanPage/hdpi/PayButton.png")}
                  key={"abfdskbfdsalfddsaaffadcdeefg"}
              />
            </TouchableOpacity>
          </View>
          
            <View style={ScanPageStyles.footerView}>
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


const ScanPageStyles = StyleSheet.create({
  
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
  scanTabView: {
    flex:2, 
    justifyContent:'space-around', 
    alignItems:'center',
  },
  QRImageView: {
    flex:5, 
    justifyContent:'space-around', 
    alignItems:'center',
  },
  payButtonView: {
    flex:2,  
    justifyContent:'space-around', 
    alignItems:'center',
  },
  footerView: {
    flex:1, 
    flexDirection:'row',
    justifyContent:"flex-end",
    alignItems:'center',
  },
  MoneyInputText: {
     fontFamily: "Azo Sans Uber",
    fontSize: 36,
    lineHeight: 52,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 8,
  }
  
})

export default ScanPageComponent