import React, { Component, } from 'react'
import { 
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native'

import BackgroundImage from './BackgroundImage.js'

class HomePageComponent extends Component {

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
          <View style= {HomePagestyles.HeaderView} >
            <Image
              style={HomePagestyles.Logo}
              resizeMode={"contain"}
              source={require('../img/HomePage/hdpi/Logo.png')}
              key={"bcdlkscbvd"}
            />  

          </View>
          <View style= {HomePagestyles.HomePageBackGround} >
              <Image
                style={HomePagestyles.HomePageBackGroundImage}
                resizeMode={"stretch"}
                source={require("../img/HomePage/hdpi/HomePageBackGround.png")}
                key = {"123456"}
                >
                <View style= {{flex:1}}>
                  <View style= {HomePagestyles.toprowcirlces}>
                    <TouchableOpacity
                        onPress={() => {this.navigate('myAccount')}}
                        activeOpacity={60 / 100}
                    >
                    <Image
                        style={HomePagestyles.circle}
                        resizeMode={"stretch"}
                        source={require("../img/HomePage/hdpi/MyAccountCircle.png")}
                        key = {"12354354456"}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {this.navigate('payments')}}
                        activeOpacity={60 / 100}
                    >
                      <Image
                        style={HomePagestyles.circle}
                        resizeMode={"stretch"}
                        source={require("../img/HomePage/hdpi/PaymentsCirlce.png")}
                        key = {"1235435345gvdsf456"}
                        />
                    </TouchableOpacity>
                  </View>
                  <View style= {HomePagestyles.bottomrowcircles}>
                    <TouchableOpacity
                        onPress={() => {this.navigate('history')}}
                        activeOpacity={60 / 100}
                      >
                    <Image
                        style={HomePagestyles.circle}
                        resizeMode={"stretch"}
                        source={require("../img/HomePage/hdpi/HistoryCircle.png")}
                        key = {"123rfsg456"}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {this.navigate('badges')}}
                        activeOpacity={60 / 100}
                    >
                    <Image
                        style={HomePagestyles.circle}
                        resizeMode={"stretch"}
                        source={require("../img/HomePage/hdpi/BadgesCircle.png")}
                        key = {"123gsdh456"}
                        />
                    </TouchableOpacity>
                  </View>
                </View>
              </Image>
          </View>
        </BackgroundImage>
    )
  }
}

const HomePagestyles = StyleSheet.create({
  HeaderView: {
    flex:1, 
    justifyContent: 'space-around', 
    alignItems: 'center', 
  },
  Logo: {
    width: 302, 
    height: 102,
  },
  iciciLogo: {
    marginTop: 60,
    alignSelf: 'flex-end',
    paddingRight:30, 
    width: 98, 
    height: 20, 
  },
  HomePageBackGround: {
    flex:4,
    justifyContent: "space-between", 
    paddingTop: 12,
  },
  HomePageBackGroundImage: {
    flex:1,
    width:null,
    height: null,
    marginBottom: 10,
    marginLeft: 8,
    marginRight: 8,
  },
  toprowcirlces: {
    flex:1, 
    justifyContent: "space-between", 
    alignItems: 'center', 
    flexDirection:'row',
    marginLeft: 24, 
    marginRight:34,
    marginTop: 10,
  },
  bottomrowcircles: {
    flex:1, 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    flexDirection:'row',
    marginLeft: 24, 
    marginRight:24,
  },
  circle: {
    width: 156, 
    height: 156,
  }
  
  
})

export default HomePageComponent