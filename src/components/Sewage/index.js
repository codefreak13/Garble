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

class SewageEvacuation extends React.Component {
  static navigationOptions = { header: null };

  state = {
    isVisibleHouse: false,
    isVisibleHouse1: false
  };

  toggleVisible = () => {
    this.setState(prevState => {
      return { isVisible: !prevState.isVisible };
    });
  };

  toggleVisible1 = () => {
    this.setState(prevState => {
      return { isVisible1: !prevState.isVisible1 };
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
            <Image
              source={require("../../assets/sewageTruck.jpg")}
              style={{ height: 310, width: "100%" }}
            />
            <TouchableNativeFeedback
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
            >
              <Image
                source={require("../../assets/sewage12.png")}
                style={{
                  height: 110,
                  width: 110,
                  position: "absolute",
                  top: 240,
                  right: 10,
                  zIndex: 10
                }}
              />
            </TouchableNativeFeedback>
            <View style={styles.description}>
              <View>
                <Text style={styles.offer}>Sewage Evacuation</Text>
                <View>
                  <Text style={styles.serviceText}>
                    Garble Sewage Evacuation is a click away from catering to
                    your sewage evacuation worries. On demand, Garble dispatches
                    its professional team and ultra modern equipment to
                    location.
                  </Text>
                </View>
                <TouchableNativeFeedback
                  onPress={() => {
                    this.props.navigation.navigate("SewageServiceForm");
                  }}
                >
                  <View style={styles.subscribe}>
                    <Text style={styles.subscribeTitle}>Get Quote</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
            <Image
              source={require("../../assets/mobileToilet.jpg")}
              style={{
                height: 400,
                width: "100%",
                position: "relative"
              }}
            />
            <View style={styles.description1}>
              <View>
                <Text style={styles.offer}>Mobile Toilet Rentals</Text>
                <Text style={styles.serviceText}>
                  Garble Mobile conveniences can be the differnce that will make
                  your occassion a success. Our conveniences can be delivered to
                  any location nationwide.
                </Text>
              </View>
              <TouchableNativeFeedback
                onPress={() => {
                  this.props.navigation.navigate("MobileToiletServiceForm");
                }}
              >
                <View style={styles.subscribe}>
                  <Text style={styles.subscribeTitle}>Get Quote</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </ScrollView>
        </View>
      </Root>
    );
  }
}

export default SewageEvacuation;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#edefee"
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
  description: {
    backgroundColor: "#edefee",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 15,
    paddingTop: 30,
    marginTop: -20
  },
  description1: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 15
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
