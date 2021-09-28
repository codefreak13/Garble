import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  Image
} from "react-native";
import Root from "../Utils/Root";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class FumigationServices extends React.Component {
  static navigationOptions = { header: null };

  state = {
    isVisibleHouse: false
  };

  toggleVisibleHouse = () => {
    this.setState(prevState => {
      return { isVisibleHouse: !prevState.isVisibleHouse };
    });
  };

  render() {
    return (
      <Root navigation={this.props.navigation}>
        <View style={styles.main}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.goBack()}
          >
            <View style={styles.goBack}>
              <FontAwesome name="arrow-left" size={20} color="#0b8647" />
            </View>
          </TouchableNativeFeedback>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps={"handled"}
          >
            <View style={{ height: "45%", width: "100%" }}>
              <Image
                source={require("../../assets/pestControl.png")}
                style={{ height: 400, width: "100%" }}
              />
            </View>
            <TouchableNativeFeedback
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
            >
              <Image
                source={require("../../assets/bug.png")}
                style={{
                  height: 90,
                  width: 90,
                  position: "absolute",
                  top: 320,
                  right: 10,
                  zIndex: 10
                }}
              />
            </TouchableNativeFeedback>
            <View
              style={{
                backgroundColor: "#edefee",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                flex: 2,
                flexDirection: "column",
                justifyContent: "space-between",
                paddingLeft: 15,
                paddingTop: 30
              }}
            >
              <View>
                <Text style={styles.offer}>Fumigation Service</Text>
                <View>
                  <Text style={styles.serviceText}>Bed bugs</Text>
                  <Text style={styles.serviceText}>Mosquitoes</Text>
                  <Text style={styles.serviceText}>Snakes</Text>
                  <Text style={styles.serviceText}>Rats</Text>
                  <Text style={styles.serviceText}>Termites</Text>
                </View>
              </View>
              <View>
                <Text style={styles.offer}>Service Information</Text>
                <Text style={styles.serviceText}>
                  Garble fumigation offers a wide range of fumigation services
                  comprising bed bugs, mosquitoes, termites, snakes, etc to
                  households and firms. Most fumigations chemicals are toxic and
                  there is need to stay off fumigated properties for a period of
                  time.
                </Text>
              </View>
              <TouchableNativeFeedback
                onPress={() => {
                  this.props.navigation.navigate("FumigationServiceForm");
                }}
              >
                <View style={styles.subscribe}>
                  <Text style={styles.subscribeTitle}>Get Quote</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </ScrollView>
          {/* </View> */}
        </View>
      </Root>
    );
  }
}

export default FumigationServices;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  goBack: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 35,
    height: 35,
    width: 35,
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10
  },
  offer: {
    fontSize: 22,
    color: "#0b8647",
    fontWeight: "bold"
  },
  serviceText: {
    paddingLeft: -5,
    fontSize: 18,
    padding: 0.5,
    color: "grey"
  },
  subscribe: {
    margin: 20,
    borderRadius: 10,
    backgroundColor: "#0b8647",
    fontSize: 20,
    width: "80%",
    alignSelf: "center"
  },
  subscribeTitle: {
    fontSize: 20,
    padding: 15,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center"
  }
});
