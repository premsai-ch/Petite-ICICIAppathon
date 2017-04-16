import React, { Component, } from 'react'
import { View, Image, Text, StyleSheet} from 'react-native'

class HistoryPageComponent extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <BackgroundImage>
          <View style={{flex: 1}}>
          <Image 
            style={HistoryPageStyles.topbarImage}
            resizeMode={"stretch"}
              source={require("../img/HistoryPage/hdpi/HistoryTopBar.png")}
              key={"abcdeefg"}
          >
          <View style={HistoryPageStyles.backArrowView}>
              <Image 
            style={HistoryPageStyles.backArrowImage}
            resizeMode={"stretch"}
              source={require("../img/HistoryPage/hdpi/BackArrow.png")}
              key={"abfdsfadcdeefg"}
              />
          </View>
          </Image>
        </View>
        <View style={HistoryPageStyles.balanceTabView}>
       <Image 
            style={HistoryPageStyles.balanceTabImage}
            resizeMode={"stretch"}
              source={require("../img/HistoryPage/hdpi/Balancetab.png")}
              key={"abcdeesdwdfg"}
          >
          <View style = {HistoryPageStyles.balanceTextView}>
              <Text style = {HistoryPageStyles.balanceText}>
                2000
              </Text>
          </View>
         
          </Image>
          <Image 
            style={HistoryPageStyles.balanceTabImage}
            resizeMode={"stretch"}
              source={require("../img/HistoryPage/hdpi/AllowanceTab.png")}
              key={"abcdeescfdsfddwdfg"}
          >
          <View style = {HistoryPageStyles.balanceTextView}>
              <Text style = {HistoryPageStyles.allowanceText}>
                2000
              </Text>
          </View>
          </Image>
          <Image 
            style={HistoryPageStyles.balanceTabImage}
            resizeMode={"stretch"}
              source={require("../img/HistoryPage/hdpi/MiniStatementTab.png")}
              key={"abcdeescfdsffdsfddwdfg"}
          />
        </View>
          
        </BackgroundImage>  
      </View>
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

export default HistoryPageComponent