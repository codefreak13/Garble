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
  static navigationOptions = { header: null };

  render() {
    return (
      <ImageBackground source={BG} style={styles.imageBackgroundStyle}>
        <View style={{}}>
          <Image source={logo} style={styles.logo} />
          <Image source={logoName} style={styles.logoName} />
        </View>
        <View style={{ width: '100%' }}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('Register')}>
            <View style={styles.subscribe}>
              <Text style={styles.subscribeTitle}>REGISTER</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('Login')}>
            <View style={styles.subscribe}>
              <Text style={styles.subscribeTitle}>SIGN IN</Text>
            </View>
          </TouchableNativeFeedback>
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
    width: 85,
    height: 85,
    alignSelf: 'center',
  },
  logoName: {
    width: 130,
    height: 85,
    marginTop: -30,
    alignSelf: 'center',
  },
  subscribe: {
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: '#0b8647',
    fontSize: 20,
    width: '85%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  subscribeTitle: {
    fontSize: 20,
    padding: 15,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
});
