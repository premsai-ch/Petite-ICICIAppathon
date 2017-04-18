  <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <TouchableHighlight
          onPress={() => {}}
          activeOpacity={75 / 100}
          underlayColor={"rgba(221,99,99,1)"}>
          <Image
            style={{
              width: 300,
              height: 200,
            }}
            resizeMode={"contain"}
            source={{uri:'https://unsplash.it/600/400/?random'}}
            >
            <Text style={styles.welcome}>Press</Text>
          </Image>
        </TouchableHighlight>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={100 / 100}>
          
          <Image
            style={{
              width: 300,
              height: 200,
            }}
            resizeMode={"contain"}
            source={{uri:'https://unsplash.it/600/400/?random'}}
            >
            <Text style={styles.welcome}>Press</Text>
          </Image>
        </TouchableOpacity>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>



const startpageStyles = StyleSheet.create({
  mainview: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  topdiv: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: '0 auto',
  },
  seconddiv: {
    marginLeft: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: '0 0 auto',
  },
  thirddiv: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: '0 auto',
  },
  fourthdiv: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: '0 0 auto',
  },
  princeImage: {
    marginRight: 0,
    marginLeft: 60,
    width : 77,
  },
  princeText: {
    marginRight: 106
  },
  princessImage: {
    marginLeft: 60
  },
  princessText: {
    marginRight: 90
  },
  orTextStyle: {
    fontSize: 30
  },
  
    <View style={startpageStyles.mainview}>

    
    
    
    <TouchableHighlight
          onPress={() => {this.navigate('homePage')}}
          activeOpacity={75 / 100}
          underlayColor={"rgba(221,99,99,1)"}>
        <Image
              style={startpageStyles.princessImage}
              resizeMode={"stretch"}
            source={require('../img/StartPage/hdpi/Princess.png')}
              /> 
         </TouchableHighlight>
    
    
    
    <Image
            style={registrationpageStyles.circle}
            resizeMode={"contain"}
            source={require('./img/LoginPage/hdpi/BoyAvatar.png')}
          />
    
    
    
    
    
    
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
   