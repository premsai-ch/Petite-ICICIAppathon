import React, { Component, } from 'react'
import { View,Image, Text, StyleSheet } from 'react-native'

class BadgesPageComponent extends Component {

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
            style={BadgesPageStyles.topbarImage}
            resizeMode={"stretch"}
            source={require("../img/BadgesPage/hdpi/BadgesTopBar.png")}
            key={"abcdeefhfg"}
          >
            <View style={BadgesPageStyles.backArrowView}>
                <Image 
                  style={BadgesPageStyles.backArrowImage}
                  resizeMode={"stretch"}
                  source={require("../img/BadgesPage/hdpi/BackArrow.png")}
                  key={"abfdskblfadcdeefg"}
                />
            </View>
          </Image>
        </View>
        <View style= {{flex: 6}}>
          <Image 
                  style={BadgesPageStyles.BadgesBGImage}
                  resizeMode={"stretch"}
                  source={require("../img/BadgesPage/hdpi/BadgesBG.png")}
                  key={"abfdskblfdsdadcdeefg"}
            >
            <View style = {BadgesPageStyles.AddphotoImageView} >
              <Image 
                  style={BadgesPageStyles.AddphotoImage}
                  resizeMode={"stretch"}
                  source={require("../img/BadgesPage/hdpi/AddPhoto.png")}
                  key={"abfdskblfdsdadcdeefg"}
                >
                <View style={{flex:1, justifyContent:'center'}}>
                   <Image 
                    style={BadgesPageStyles.BadgeImage}
                    resizeMode={"stretch"}
                    source={require("../img/BadgesPage/hdpi/Badge.png")}
                    key={"abfdskblfdsdadfjccdeefg"}
                />
                </View>
              </Image>
             
            </View> 
            <View style = {BadgesPageStyles.pointStarsView}>
              <View style={BadgesPageStyles.PointsTextView}>
              <Text style = {BadgesPageStyles.PointsText}>
                2000
              </Text>
              </View>
              <Image 
                    style={BadgesPageStyles.starsImage}
                    resizeMode={"stretch"}
                    source={require("../img/BadgesPage/hdpi/3Stars.png")}
                    key={"abfdskblfdsdfdfdadfjccdeefg"}
                />
            </View>
          </Image>
        </View>
      </BackgroundImage>
      </View>
    )
  }
}



const BadgesPageStyles = StyleSheet.create({
  
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
  BadgesBGImage: {
    width:null,
    height:412,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  BadgeImage:{
    alignSelf:"flex-end", 
    width: 64, 
    height: 88, 
    marginTop:110, 
    marginRight:20,
  },
  AddphotoImage: {
    marginTop: 40,
    alignSelf:'center',
    width: 200, 
    height: 200,
  },
  AddphotoImageView: {
    flex:2, 
    justifyContent: 'center', 
    alignItems:'center',
  },
  topbarImage: {
    flex: 1,
    width:null,
    height:null,
  },
  PointsTextView : {
    width: 150, 
    height: 50
  },
  PointsText : {
    height: 52,
    width: 112,
    color: '#FFFFFF',
    fontFamily: "Azo Sans Uber",
    fontSize: 40,
    lineHeight: 52,
    textAlign: 'center',
    marginLeft: 40,
  },
  starsImage: {
    width: 171, 
    height: 36, 
    marginRight: 30,
  },
  pointStarsView: {
    flex:1, 
    justifyContent: 'space-around', 
    flexDirection:'row', 
    alignItems:'center'
  }
  
})

export default BadgesPageComponent