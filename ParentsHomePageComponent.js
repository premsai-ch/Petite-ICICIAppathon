import React, { Component, } from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native'

import BackgroundImage from './Components/BackgroundImage.js'


class ParentsHomePageComponent extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {amount:'0'}
  }

  render() {
    return (
      <BackgroundImage>
        <View style={{flex: 1}}>
          <Image 
            style={MyAccountPageStyles.topbarImage}
            resizeMode={"stretch"}
              source={require("./img/AccountsPage/hdpi/TopbarAccount.png")}
              key={"abcdeefg"}
          >
          
          </Image>
        </View>
        <View style={MyAccountPageStyles.balanceTabView}>
          <Image 
            style={MyAccountPageStyles.balanceTabImage}
            resizeMode={"stretch"}
              source={require("./img/AccountsPage/hdpi/BalanceTab.png")}
              key={"abcdeesdwdfg"}
          >
          <View style = {MyAccountPageStyles.balanceTextView}>
              <Text style = {MyAccountPageStyles.balanceText}>
                100000
              </Text>
          </View>
          </Image>
          <Image 
            style={MyAccountPageStyles.AskforMoneyTabImage}
            resizeMode={"stretch"}
              source={require("./img/AccountsPage/hdpi/setAllowanceTab.png")}
              key={"abcdeesdwfdsfdfg"}
            >
          <View style= {MyAccountPageStyles.AskforMoneyTabView}>
            
            <Image 
            style={MyAccountPageStyles.moneyInput}
            resizeMode={"stretch"}
              source={require("./img/AccountsPage/hdpi/MoneyInput.png")}
              key={"abcdeesdwfdsfdfg"}
              >
              <View style= {MyAccountPageStyles.MoneyInputTextFieldView}>
                <TextInput style={MyAccountPageStyles.MoneyInputText}
                  underlineColorAndroid = {'transparent'}
                  selectTextOnFocus={true}
                  ref="input"
                  returnKeyType={'done'}
                  keyboardType="numeric"
                  onSubmitEditing={
                    (event)=> {this.setState({amount:event.nativeEvent.text}); this.refs.input.blur()} }
                  >Enter the Amount </TextInput> 
              </View>
            </Image>
            <TouchableOpacity
                onPress={() => Alert.alert(
                                'Confirmation',
                                'Set your child monthly allowance to '+this.state.amount+' Rupees ?',
                                [
                                  {text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                  {text: 'YES', onPress: () => console.log('OK Pressed')},
                                ],
                                { cancelable: false }
                              )}
                activeOpacity={60 / 100}
              >
                <Image 
                  style={MyAccountPageStyles.Askbutton}
                  resizeMode={"stretch"}
                  source={require("./img/AccountsPage/hdpi/askButton.png")}
                  key={"abcdeesdwdfsaffdsfdfg"}
                  />
            </TouchableOpacity>
            
          </View>
          </Image>
          <Image 
            style={MyAccountPageStyles.balanceTabImage}
            resizeMode={"stretch"}
              source={require("./img/AccountsPage/hdpi/RequestsTab.png")}
              key={"abcdeefdssdwdfg"}
          >
          </Image>
          
          
        </View>
      </BackgroundImage> 
    )
  }
}
const MyAccountPageStyles = StyleSheet.create({
  balanceTextView: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems:"flex-end"
  },
  balanceText : {
    marginRight: 20,
    color: '#FFFFFF',
    fontFamily: "Azo Sans Uber",
    fontSize: 36,
    lineHeight: 52,
    textAlign: 'center',
  },
  moneyInput: {
    marginTop: 20,
    width: 194, 
    height: 50,
  },
  Askbutton: {
    marginTop: 20,
    width: 152, 
    height: 64,
  },
  AskforMoneyTabImage: {
    width:null,
    height:118,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  topbarImage: {
    flex: 1,
    width:null,
    height:null,
  },
  balanceTabImage: {
    width:null,
    height:118,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10
  },
  balanceTabView: {
    flex: 6, 
    justifyContent: "flex-start", 
    alignItems:"stretch",
  },
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
  AskforMoneyTabView: {
    flex:1, 
    flexDirection:'row', 
    justifyContent:"space-around", 
    alignItems:"center",
  },
  MoneyInputText: {
    fontFamily: "Azo Sans Uber",
    fontSize: 18,
    lineHeight: 52,
    textAlign: 'center',
    color: '#FFFFFF',
    marginLeft: 14,
  },
  MoneyInputTextFieldView: {
    flex:1, 
    justifyContent:'center', 
    alignItems: 'flex-start',
  },  
})

export default ParentsHomePageComponent