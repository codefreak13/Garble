import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';
import Root from '../Utils/Root';

class Home extends React.Component {
  static navigationOptions = {header: null};

  render() {
    return (
      <Root navigation={this.props.navigation}>
        <ImageBackground
          source={require('../../assets/ff.jpg')}
          style={{flex: 1}}>
          <View style={styles.main}>
            <Image
              source={require('../../assets/gab.png')}
              style={{width: '100%', height: '50%', alignSelf: 'center'}}
            />
            <View style={styles.main1}>
              <View style={styles.container}>
                <TouchableNativeFeedback
                  onPress={() => {
                    this.props.navigation.navigate('WasteDisposal');
                  }}>
                  <View style={styles.box}>
                    <Image
                      source={require('../../assets/garbage.png')}
                      style={styles.menuImage}
                    />
                    <Text style={styles.title}>Waste Collection</Text>
                  </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                  onPress={() => {
                    this.props.navigation.navigate('CleaningServices');
                  }}>
                  <View style={styles.box}>
                    <Image
                      source={require('../../assets/hclean.png')}
                      style={styles.menuImage}
                    />
                    <Text style={styles.title}>Cleaning Service</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
              <View style={styles.container}>
                <TouchableNativeFeedback
                  onPress={() => {
                    this.props.navigation.navigate('Sewage');
                  }}>
                  <View style={styles.box}>
                    <Image
                      source={require('../../assets/hsewage.png')}
                      style={styles.menuImage}
                    />
                    <Text style={styles.title}>Sewage Evacuation</Text>
                  </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback
                  onPress={() => {
                    this.props.navigation.navigate('Recycle');
                  }}>
                  <View style={styles.box}>
                    <Image
                      source={require('../../assets/hrecycle.png')}
                      style={styles.menuImage}
                    />
                    <Text style={styles.title}>Recycling Service</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
              <TouchableNativeFeedback
                onPress={() => {
                  this.props.navigation.navigate('Fumigation');
                }}>
                <View style={styles.box1_cont}>
                  <View style={styles.box1}>
                    <Image
                      source={require('../../assets/hfumigate.png')}
                      style={styles.menuImage1}
                    />
                    <Text style={styles.title1}>Fumigation Service</Text>
                  </View>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </ImageBackground>
      </Root>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '5%',
    justifyContent: 'center',
  },
  main1: {
    alignSelf: 'center',
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: '48.5%',
    backgroundColor: '#edefee',
    borderRadius: 8,
    borderColor: '#0b8647',
    borderWidth: 0.09,
    elevation: 1.5,
    marginBottom: 10,
  },
  title: {
    alignSelf: 'center',
    marginBottom: 13,
    color: '#0b8647',
  },
  menuImage: {
    width: '30%',
    height: 50,
    alignSelf: 'center',
    marginTop: 23,
  },
  title1: {
    color: '#0b8647',
  },
  menuImage1: {
    width: 120,
    height: 60,
  },
  box1_cont: {
    width: '100%',
    backgroundColor: '#edefee',
    borderRadius: 8,
    borderColor: '#0b8647',
    borderWidth: 0.09,
    elevation: 1.5,
  },
  box1: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    justifyContent: 'space-between',
  },
});
