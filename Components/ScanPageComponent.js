import React, { Component, } from 'react'
import { View, } from 'react-native'

class ScanPageComponent extends Component {

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
            style={ScanPageStyles.topbarImage}
            resizeMode={"stretch"}
            source={require("./img/PaymentsPage/hdpi/PaymentsTopBar.png")}
            key={"abcdeefhfg"}
          >
            <View style={ScanPageStyles.backArrowView}>
                <Image 
                  style={ScanPageStyles.backArrowImage}
                  resizeMode={"stretch"}
                  source={require("./img/PaymentsPage/hdpi/BackArrow.png")}
                  key={"abfdskblfadcdeefg"}
                />
            </View>
          </Image>
        </View>
        <View style= {{flex: 6}}>
          <View style= {ScanPageStyles.scanTabView}>
            <Image 
                  style={{width:400, height: 100}}
                  resizeMode={"stretch"}
                  source={require("./img/ScanPage/hdpi/ScanTab.png")}
                  key={"abfdskblfadcdeefg"}
              />
          </View>
          
          <View style= {ScanPageStyles.QRImageView}>
            <Image 
                  style={{width: 272, height: 260,}}
                  resizeMode={"stretch"}
                  source={require("./img/ScanPage/hdpi/QRImage.png")}
                  key={"abfdskblfdaffadcdeefg"}
              />

          </View>
          
          <View style={ScanPageStyles.payButtonView}>
            <Image 
                  style={{width: 240, height: 78,}}
                  resizeMode={"stretch"}
                  source={require("./img/ScanPage/hdpi/PayButton.png")}
                  key={"abfdskbfdsalfddsaaffadcdeefg"}
              />
          </View>
          
            <View style={ScanPageStyles.footerView}>
              <Image 
                  style={{marginRight:24, width: 60, height: 60,}}
                  resizeMode={"stretch"}
                  source={require("./img/ScanPage/hdpi/HomeButton.png")}
                  key={"abfdskbfdsalfdaffadcdeefg"}
              />
              <Image 
                  style={{width: 160, height: 40,}}
                  resizeMode={"stretch"}
                  source={require("./img/ScanPage/hdpi/ICICILogo.png")}
                  key={"abfdskbfdsaldsadfdaffadcdeefg"}
              />
          </View>
          
        </View>
      </BackgroundImage>
      </View>
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
  }
  
})

export default ScanPageComponent