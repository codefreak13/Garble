import React from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from "react-native";

class Home extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigation.goBack()}>
        <View style={styles.container}>
          <Image
            source={require("../assets/404.jpg")}
            style={{ width: 350, height: 400 }}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
