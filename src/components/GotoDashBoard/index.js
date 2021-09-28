import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Modal extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../assets/check-mark.png')}
            style={[styles.profileImage]}
          />
        </View>
        <View style={styles.fatherText}>
          <Text style={styles.textChild}>Verified!</Text>
          <Text style={styles.textChild2}>
            You have successfully {'\n'} verified your account.
          </Text>
        </View>
        <View>
          <TouchableNativeFeedback
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            <View style={styles.MotherText}>
              <Text style={styles.text}>Go to Dashboard</Text>
              <FontAwesome name="arrow-right" size={15} color="white" />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 378,
    width: '86%',
    backgroundColor: 'white',
    borderRadius: 45,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    top: '20%',
    margin: 10,
  },
  touches: {
    padding: 5,
    backgroundColor: '#0b8647',
    borderRadius: 40,
    width: '80%',
    alignSelf: 'center',
  },
  profileImage: {
    alignSelf: 'center',
    width: 115,
    height: 115,
    margin: 5,
    tintColor: '#0b8647',
  },
  fatherText: {
    alignSelf: 'center',
  },
  MotherText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 17,
    alignSelf: 'center',
    backgroundColor: '#0b8647',
    borderRadius: 40,
    width: '75%',
    alignItems: 'center',
  },
  textChild: {
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: '#0b8647',
    fontSize: 18,
    margin: 12,
    alignSelf: 'center',
  },
  textChild2: {
    fontFamily: 'Montserrat',
    color: '#0b8647',
    alignSelf: 'center',
    fontSize: 15,
    margin: 15,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    marginRight: 20,
  },
});
