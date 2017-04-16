import React, { Component, } from 'react'
import { 
  View,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native'

class HomePageComponent extends Component {

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
          <View style= {HomePagestyles.HeaderView} >
            <View style={HomePagestyles.Logo} />
            <View style={HomePagestyles.iciciLogo} />

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
                    <View style={HomePagestyles.circle} />
                    <View style={HomePagestyles.circle} />
                  </View>
                  <View style= {HomePagestyles.bottomrowcircles}>
                    <View style={HomePagestyles.circle} />
                    <View style={HomePagestyles.circle} />
                  </View>
                </View>
              </Image>
          </View>
        </BackgroundImage>
      </View>
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
    width: 252, 
    height: 84,
  },
  iciciLogo: {
    alignSelf: 'flex-end',
    paddingRight:30, 
    width: 189, 
    height: 38, 
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
    marginRight:34,
  },
  circle: {
    width: 156, 
    height: 156,
  }
  
  
})

export default HomePageComponent