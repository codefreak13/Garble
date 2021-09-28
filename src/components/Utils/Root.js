import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Footer from './Footer';
// import {MenuProvider} from 'react-native-popup-menu';

export default class Root extends React.Component {
  render() {
    return (
      <View style={[{ flex: 1 }, this.props.style]}>
        <StatusBar barStyle="light-content" backgroundColor="#137141" />
        {/* <MenuProvider skipInstanceCheck={true}> */}
        {this.props.children}
        {/* </MenuProvider> */}
        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
