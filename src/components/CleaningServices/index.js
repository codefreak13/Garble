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
import MyCarousel from "./Carousel";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class CleaningServices extends React.Component {
  static navigationOptions = { header: null };

  state = {
    isVisible: false
  };

  toggleVisible = () => {
    this.setState(prevState => {
      return { isVisible: !prevState.isVisible };
    });
  };

  render() {
    return (
      <Root navigation={this.props.navigation}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps={"handled"}
        >
          <View style={styles.main}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.goBack()}
            >
              <View style={styles.goBack}>
                <FontAwesome name="arrow-left" size={20} color="#0b8647" />
              </View>
            </TouchableNativeFeedback>
            <View
              style={{
                height: "37%",
                width: "100%",
                backgroundColor: "#0b8647"
              }}
            >
              <MyCarousel />
            </View>
            <TouchableNativeFeedback
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
            >
              <Image
                source={require("../../assets/clean_bug.png")}
                style={{
                  height: 90,
                  width: 90,
                  position: "absolute",
                  top: 240,
                  right: 10,
                  zIndex: 10
                }}
              />
            </TouchableNativeFeedback>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-around",
                flex: 1,
                backgroundColor: "#edefee",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                paddingLeft: 15,
                paddingTop: 10,
                width: "100%",
                flexDirection: "column",
                justifyContent: "space-around"
              }}
            >
              <View>
                <Text style={styles.offer}>Cleaning Services</Text>
                <Text style={styles.serviceText}>Home Cleaning</Text>
                <Text style={styles.serviceText}>
                  Post-construction Cleaning
                </Text>
                <Text style={styles.serviceText}>Moving-in/out Cleaning</Text>
              </View>
              <View>
                <Text style={styles.offer}>Service Information</Text>
                <Text style={styles.serviceText}>
                  Garble Cleaning offers professional cleaning services for your
                  home and post construction/moving out/renovation cleaning
                  demands. Garble also offers specialized cleaning services like
                  tank washing, lawn mowing and bush clearing. We also help plan
                  and accommodate clients' desired schedule of services. On
                  demand, Garble's professional associates will be dispatched to
                  client's location.
                </Text>
              </View>
              <TouchableNativeFeedback
                onPress={() => {
                  this.props.navigation.navigate("CleaningServiceForm");
                }}
              >
                <View style={styles.subscribe}>
                  <Text style={styles.subscribeTitle}>Get Quote</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </ScrollView>
      </Root>
    );
  }
}

export default CleaningServices;

const styles = StyleSheet.create({
  main: {
    flex: 1,
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    margin: 13,
    width: "80%"
  },
  offer: {
    fontSize: 22,
    color: "#0b8647",
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5
  },
  services: {
    flexDirection: "row",
    marginBottom: 3
  },
  serviceText: {
    paddingLeft: -5,
    paddingRight: 5,
    fontSize: 18,
    padding: 0.5,
    color: "grey"
  },
  subtitleText: {
    alignSelf: "center",
    fontSize: 18
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
