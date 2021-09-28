import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Image,
  Alert
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Root from "./Utils/Root";
import AsyncStorage from "@react-native-community/async-storage";

class Settings extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "More",
      headerStyle: {
        backgroundColor: "#0b8647"
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontSize: 18,
        flex: 1
      },

      headerLeft: (
        <TouchableNativeFeedback
          onPress={() => navigation.goBack()}
          background={TouchableNativeFeedback.Ripple("#0b8647")}
        >
          <View
            style={{
              margin: 20,
              width: 35,
              height: 35,
              borderRadius: 35,
              backgroundColor: "white",
              padding: 7
            }}
          >
            <FontAwesome
              name="arrow-left"
              color="#0b8647"
              size={20}
              style={{ width: 20 }}
            />
          </View>
        </TouchableNativeFeedback>
      ),

      headerRight: (
        <TouchableNativeFeedback onPress={() => navigation.goBack()}>
          <View
            style={{
              paddingRight: 20.8
            }}
          >
            <Image
              source={require("../assets/settings.png")}
              style={{
                tintColor: "white",
                width: 22,
                height: 22
              }}
            />
          </View>
        </TouchableNativeFeedback>
      )
    };
  };

  render() {
    return (
      <Root navigation={this.props.navigation}>
        <View style={styles.main}>
          <TouchableNativeFeedback
            onPress={() => {
              return this.props.navigation.navigate("Profile");
            }}
            background={TouchableNativeFeedback.Ripple("white")}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 20
              }}
            >
              <Image
                source={require("../assets/profile.png")}
                style={{
                  tintColor: "#0b8647",
                  width: 22,
                  height: 22
                }}
              />
              <Text style={{ paddingLeft: 30, fontSize: 18, color: "grey" }}>
                User Profile
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => {
              return this.props.navigation.navigate("Subscriptions");
            }}
            background={TouchableNativeFeedback.Ripple("white")}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 20
              }}
            >
              <Image
                source={require("../assets/subscription.png")}
                style={{
                  tintColor: "#0b8647",
                  width: 22,
                  height: 22
                }}
              />
              <Text style={{ paddingLeft: 30, fontSize: 18, color: "grey" }}>
                Subscriptions
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => {
              return this.props.navigation.navigate("Terms");
            }}
            background={TouchableNativeFeedback.Ripple("white")}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 20
              }}
            >
              <Image
                source={require("../assets/terms.png")}
                style={{
                  tintColor: "#0b8647",
                  width: 22,
                  height: 22
                }}
              />
              <Text style={{ paddingLeft: 30, fontSize: 18, color: "grey" }}>
                Terms and Conditions
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => {
              return this.props.navigation.navigate("Privacy");
            }}
            background={TouchableNativeFeedback.Ripple("white")}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 20
              }}
            >
              <Image
                source={require("../assets/privacy.png")}
                style={{
                  tintColor: "#0b8647",
                  width: 22,
                  height: 22
                }}
              />
              <Text style={{ paddingLeft: 30, fontSize: 18, color: "grey" }}>
                Privacy Policy
              </Text>
            </View>
          </TouchableNativeFeedback>
          {/* <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('white')}>
            <View
              style={{
                flexDirection: 'row',
                padding: 20,
              }}>
              <Image
                source={require('../assets/bell.png')}
                style={{
                  tintColor: '#0b8647',
                  width: 22,
                  height: 22,
                }}
              />
              <Text style={{paddingLeft: 30, fontSize: 18, color: 'grey'}}>
                Notifications
              </Text>
            </View>
          </TouchableNativeFeedback> */}
          <TouchableNativeFeedback
            onPress={() => {
              return this.props.navigation.navigate("About");
            }}
            background={TouchableNativeFeedback.Ripple("white")}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 20
              }}
            >
              <Image
                source={require("../assets/about.png")}
                style={{
                  tintColor: "#0b8647",
                  width: 22,
                  height: 22
                }}
              />
              <Text style={{ paddingLeft: 30, fontSize: 18, color: "grey" }}>
                About Garble
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("white")}
            onPress={async () => {
              Alert.alert("Sign Out", "Are you sure you want to sign out?", [
                {
                  text: "NO",
                  onPress: () => {
                    this.props.navigation.navigate("Settings");
                  },
                  style: "cancel"
                },
                {
                  text: "YES",
                  onPress: async () => {
                    await AsyncStorage.removeItem("token");
                    this.props.navigation.navigate("Login");
                  }
                }
              ]);
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 20
              }}
            >
              <Image
                source={require("../assets/signOut.png")}
                style={{
                  tintColor: "#0b8647",
                  width: 22,
                  height: 22
                }}
              />
              <Text style={{ paddingLeft: 30, fontSize: 18, color: "grey" }}>
                Sign Out
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </Root>
    );
  }
}

export default Settings;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around"
  }
});
