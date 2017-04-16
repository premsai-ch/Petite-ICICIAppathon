import React, { Component, } from 'react'
import { View,StyleSheet,Image,Text,TouchableHighlight } from 'react-native'

class MinistatementPageComponent extends Component {

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
            style={MinistatementPageStyles.topbarImage}
            resizeMode={"stretch"}
            source={require("../img/PaymentsPage/hdpi/PaymentsTopBar.png")}
            key={"abcdeefhfg"}
          >
            <View style={MinistatementPageStyles.backArrowView}>
                <Image 
                  style={MinistatementPageStyles.backArrowImage}
                  resizeMode={"stretch"}
                  source={require("../img/PaymentsPage/hdpi/BackArrow.png")}
                  key={"abfdskblfadcdeefg"}
                />
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
              <View style= {{flex :1, justifyContent: 'space-around',alignItems:'center',marginTop:30}}>
                <View style={{width: 250, height: 42, backgroundColor: 'powderblue'}} />
                <View style={{width: 300, height: 3, backgroundColor: 'green'}} />
                <View style={{width: 250, height: 42, backgroundColor: 'yellow'}} />
                <View style={{width: 300, height: 3, backgroundColor: 'green'}} />
                <View style={{width: 250, height: 42, backgroundColor: 'orange'}} />
                <View style={{width: 300, height: 3, backgroundColor: 'green'}} />
                <View style={{width: 250, height: 42, backgroundColor: 'red'}} />
                <View style={{width: 300, height: 3, backgroundColor: 'green'}} />
                <View style={{width: 250, height: 42, backgroundColor: 'blue'}} />

              </View>
          </Image>
          </View>
        </View>
        <View style={MinistatementPageStyles.footerView}>
              <Image 
                  style={{marginRight:24, width: 60, height: 60,}}
                  resizeMode={"stretch"}
                  source={require("../img/ScanPage/hdpi/HomeButton.png")}
                  key={"abfdskbfdsalfdaffadcdeefg"}
              />
              <Image 
                  style={{width: 160, height: 40,}}
                  resizeMode={"stretch"}
                  source={require("../img/ScanPage/hdpi/ICICILogo.png")}
                  key={"abfdskbfdsaldsadfdaffadcdeefg"}
              />
          </View>
      </BackgroundImage>
      </View>
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
  }
})

export default MinistatementPageComponent