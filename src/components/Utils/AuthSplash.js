import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  ImageBackground,
  Image,
} from 'react-native';
import BG from '../../assets/splash.png';
import logo from '../../assets/garbleLogo.gif';
import logoName from '../../assets/garble.png';

class Splash extends React.Component {
  static navigationOptions = {header: null};

  render() {
    return (
      <ImageBackground source={BG} style={styles.imageBackgroundStyle}>
        <View style={{}}>
          <Image source={logo} style={styles.logo} />
        </View>
      </ImageBackground>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
  imageBackgroundStyle: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
