import React from 'react';
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  ActivityIndicator,
  Text,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class ActivityIndicatorPage extends React.Component {
  static navigationOptions = {header: null};

  state = {
    password: '',
  };

  render() {
    return (
      <View style={styles.main}>
        <ActivityIndicator size="large" color="#0b8647" />
      </View>
    );
  }
}

export default ActivityIndicatorPage;

const styles = StyleSheet.create({
  main: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
