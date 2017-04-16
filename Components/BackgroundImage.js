import React, { Component, } from 'react'
import { View,Image,StyleSheet } from 'react-native'

class BackgroundImage extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
     return (
            <Image source={require('./img/StartPage/hdpi/BG_Image.png')}
                  style={styles.backgroundImage}>

                  {this.props.children}

            </Image>
        )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
})

export default BackgroundImage