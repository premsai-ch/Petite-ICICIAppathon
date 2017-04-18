import React, { Component, } from 'react'
import { View,StyleSheet,Image,Text,TouchableOpacity } from 'react-native'

import BackgroundImage from './BackgroundImage.js'


class MinistatementPageComponent extends Component {

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
            style={MinistatementPageStyles.topbarImage}
            resizeMode={"stretch"}
            source={require("../img/HistoryPage/hdpi/HistoryTopBar.png")}
            key={"abcdeefhfg"}
          >
            <View style={MinistatementPageStyles.backArrowView}>
              <TouchableOpacity
                onPress={() => {this.navigate('history')}}
                activeOpacity={60 / 100}
              >
                <Image 
                  style={MinistatementPageStyles.backArrowImage}
                  resizeMode={"stretch"}
                  source={require("../img/HistoryPage/hdpi/BackArrow.png")}
                  key={"abfdskblfadcdeefg"}
                />
              </TouchableOpacity>
            </View>
          </Image>
        </View>
        <View style= {{flex: 5}}>
        <View style= {{flex:8, justifyContent:'center',alignItems:'center'}}>
          <Image 
                  style={{width: 380, height: 430,}}
                  resizeMode={"stretch"}
                  source={require("../img/TransferToFriendPage/hdpi/TransferToFriendBG.png")}
                  key={"abfdskblfadcdeefg"}
            >
              <View style= {{flex :1,marginTop:30}}>
                <View style={MinistatementPageStyles.eachRowView} >
                  <Image 
                      style={MinistatementPageStyles.handIconStyle}
                      resizeMode={"stretch"}
                      source={require("../img/MiniStatementPage/hdpi/TransferHandIcon.png")}
                      key={"abfdskblfadcdffdfseefg"}
                    />
                  <Text style={MinistatementPageStyles.dataTextStyle}>21/12/16</Text>
                  <Text style={MinistatementPageStyles.transferamountTextStyle}>200</Text>
                  
                </View>
                
                <Image 
                      style={MinistatementPageStyles.horizontalLine}
                      resizeMode={"stretch"}
                      source={require("../img/MiniStatementPage/hdpi/HorizontalLine.png")}
                      key={"abfdskblfadcdffdfseefg"}
                />
               
                
                <View style={MinistatementPageStyles.eachRowView}>
                <Image 
                      style={MinistatementPageStyles.icons}
                      resizeMode={"stretch"}
                      source={require("../img/MiniStatementPage/hdpi/PiggyBankIcon.png")}
                      key={"abfdskblfadcdffdfseefg"}
                    />
                  <Text style={MinistatementPageStyles.dataTextStyle}>10/11/16</Text>
                  <Text style={MinistatementPageStyles.amountTextStyle}>250</Text>
                  
                </View>
                
                
                <Image 
                      style={MinistatementPageStyles.horizontalLine}
                      resizeMode={"stretch"}
                      source={require("../img/MiniStatementPage/hdpi/HorizontalLine.png")}
                      key={"abfdskblfaddsdcdffdfseefg"}
                />
               <View style={MinistatementPageStyles.eachRowView}>
                <Image 
                      style={MinistatementPageStyles.icons}
                      resizeMode={"stretch"}
                      source={require("../img/MiniStatementPage/hdpi/3CurrencyNotesIcon.png")}
                      key={"abfdskblfadcdffdfseefg"}
                    />
                  <Text style={MinistatementPageStyles.dataTextStyle}>09/10/16</Text>
                  <Text style={MinistatementPageStyles.minusamountTextStyle}>300</Text>
                  
                </View>
                  <Image 
                      style={MinistatementPageStyles.horizontalLine}
                      resizeMode={"stretch"}
                      source={require("../img/MiniStatementPage/hdpi/HorizontalLine.png")}
                      key={"abfdskblfadcdffdsfdfseefg"}
                />                
                <View style={MinistatementPageStyles.eachRowView}>
                <Image 
                      style={MinistatementPageStyles.icons}
                      resizeMode={"stretch"}
                      source={require("../img/MiniStatementPage/hdpi/PiggyBankIcon.png")}
                      key={"abfdskblfffsadcdffdfseefg"}
                    />
                  <Text style={MinistatementPageStyles.dataTextStyle}>06/08/16</Text>
                  <Text style={MinistatementPageStyles.amountTextStyle}>600</Text>
                  
                </View>

              </View>
          </Image>
          </View>
        </View>
        <View style={MinistatementPageStyles.footerView}>
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
      </BackgroundImage>
    )
  }
}

const MinistatementPageStyles = StyleSheet.create({
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
  eachRowView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icons: {
    width: 58, 
    height: 58,
  },
  horizontalLine: {
    alignSelf:'center',
    width: 300, 
    height: 3,
  },
  amountTextStyle: {
    height: 42,
    color: '#44DB5E',
    fontFamily: "Azo Sans Uber",
    fontSize: 32,
    lineHeight: 42,
    textAlign: 'center',
  },
  minusamountTextStyle: {
    height: 42,
    color: '#F25170',
    fontFamily: "Azo Sans Uber",
    fontSize: 32,
    lineHeight: 42,
    textAlign: 'center',
  },
  transferamountTextStyle: {
    height: 42,
    color: '#FFFFFF',
    fontFamily: "Azo Sans Uber",
    fontSize: 32,
    lineHeight: 42,
    textAlign: 'center',
  },
  handIconStyle:{
    height: 29,
    width: 63,
  },
  dataTextStyle: {
    height: 32,
    color: "#FFFFFF",
    fontFamily: "Azo Sans Uber",
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
  }
})

export default MinistatementPageComponent