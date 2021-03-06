import React, { Component, } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

import BackgroundImage from './BackgroundImage.js'


class PaymentsPageComponent extends Component {

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
        <View style={{flex: 1}}>
          <Image 
            style={PaymentsPageStyles.topbarImage}
            resizeMode={"stretch"}
              source={require("../img/PaymentsPage/hdpi/PaymentsTopBar.png")}
              key={"abcdeefg"}
          >
          <View style={PaymentsPageStyles.backArrowView}>
            <TouchableOpacity
                onPress={() => {this.navigate('homePage')}}
                activeOpacity={60 / 100}
              >
              <Image 
            style={PaymentsPageStyles.backArrowImage}
            resizeMode={"stretch"}
              source={require("../img/PaymentsPage/hdpi/BackArrow.png")}
              key={"abfdsfadcdeefg"}
              />
            </TouchableOpacity>
          </View>
          </Image>
        </View>
        <View style={PaymentsPageStyles.balanceTabView}>
          <TouchableOpacity
                onPress={() => {this.navigate('scanPage')}}
                activeOpacity={60 / 100}
              >
       <Image 
            style={PaymentsPageStyles.balanceTabImage}
            resizeMode={"stretch"}
              source={require("../img/PaymentsPage/hdpi/ScanToPayTab.png")}
              key={"abcdeesdwdfg"}
          >
          <View style = {PaymentsPageStyles.balanceTextView}>
              <Image 
                  style={PaymentsPageStyles.ScanButton}
                  resizeMode={"stretch"}
                  source={require("../img/PaymentsPage/hdpi/ScanButton.png")}
                  key={"abcdeesddsadwdfg"}
                />
          </View>
         
          </Image>
          </TouchableOpacity>
          <TouchableOpacity
                onPress={() => {this.navigate('transferFriend')}}
                activeOpacity={60 / 100}
              >
          <Image 
            style={PaymentsPageStyles.balanceTabImage}
            resizeMode={"stretch"}
              source={require("../img/PaymentsPage/hdpi/TransfertoFriendTab.png")}
              key={"abcdeescfdsfddwdfg"}
          >
          <View style = {PaymentsPageStyles.balanceTextView}>
              <Image 
                  style={PaymentsPageStyles.transferButton}
                  resizeMode={"stretch"}
                  source={require("../img/PaymentsPage/hdpi/TransferButton.png")}
                  key={"abcdeesddsadwdfg"}
                />
          </View>
          </Image>
          </TouchableOpacity>
        </View>
        
      </BackgroundImage>
    )
  }
}

const PaymentsPageStyles = StyleSheet.create({
  
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
  balanceTabView: {
    flex: 6, 
    justifyContent: "flex-start", 
    alignItems:"stretch",
  },
  balanceTabImage: {
    width:null,
    height:118,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10
  },
  balanceTextView: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems:"flex-end"
  },
  ScanButton : {
    marginRight: 50,
    height: 91,
    width: 138
  },
  transferButton: {
    marginRight: 20,
    height: 90,
    width: 183
  },
  
})


export default PaymentsPageComponent