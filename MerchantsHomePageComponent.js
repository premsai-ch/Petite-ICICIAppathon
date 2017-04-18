import React, { Component, } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

import BackgroundImage from './Components/BackgroundImage.js'

class MerchantsHomePageComponent extends Component {

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
            style={HistoryPageStyles.topbarImage}
            resizeMode={"stretch"}
              source={require("./img/HistoryPage/hdpi/HistoryTopBar.png")}
              key={"abcdeefg"}
          >
          
          </Image>
        </View>
        <View style={HistoryPageStyles.balanceTabView}>
          </View>
          
        </BackgroundImage>  
    )
  }
}


const HistoryPageStyles = StyleSheet.create({
  
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
  balanceText : {
    marginRight: 30,
    height: 52,
    width: 112,
    color: '#FFFFFF',
    fontFamily: "Azo Sans Uber",
    fontSize: 40,
    lineHeight: 52,
    textAlign: 'center',
  },
  allowanceText: {
    marginRight: 25,
    height: 52,
    width: 112,
    color: '#FFFFFF',
    fontFamily: "Azo Sans Uber",
    fontSize: 40,
    lineHeight: 52,
    textAlign: 'center',
  }
  
})

export default MerchantsHomePageComponent