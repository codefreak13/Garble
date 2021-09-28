import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  Linking
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { BottomSheet } from "react-native-btr";
import call from "react-native-phone-call";
import { SocialIcon, Avatar } from "react-native-elements";

class Footer extends React.Component {
  state = {
    //default visibility state of the bottom sheet
    visible: false
  };
  _toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    this.setState({ visible: !this.state.visible });
  };

  call = () => {
    //handler to make a call
    const args = {
      number: "08138242433",
      prompt: false
    };
    call(args).catch(console.error);
  };

  shareToWhatsApp = () => {
    Linking.openURL("whatsapp://send?text=hello&phone=+2347063081573");
  };

  render() {
    const activeStyle = {
      borderTopWidth: 2,
      borderTopColor: "#0b8647",
      width: "25%",
      paddingTop: 8
    };

    const inActiveStyle = {
      borderTopWidth: 2,
      borderTopColor: "#f9f9f9",
      width: "25%",
      paddingTop: 8
    };

    const idleText = {
      color: "#ada8a8",
      fontSize: 10,
      padding: 5,
      alignSelf: "center"
    };

    const activeText = {
      color: "#0b8647",
      fontSize: 13,
      padding: 2,
      alignSelf: "center"
    };

    return (
      <View style={styles.footer}>
        <TouchableWithoutFeedback
          onPress={() => {
            return this.props.navigation.navigate("Home");
          }}
        >
          <View
            style={
              this.props.navigation.state.routeName === "Home"
                ? activeStyle
                : inActiveStyle
            }
          >
            <View style={{ alignSelf: "center" }}>
              {this.props.navigation.state.routeName === "Home" ? (
                <Image
                  source={require("../../assets/home.png")}
                  style={styles.active}
                />
              ) : (
                <Image
                  source={require("../../assets/home.png")}
                  style={styles.inActive}
                />
              )}
            </View>
            <Text
              style={
                this.props.navigation.state.routeName === "Home"
                  ? activeText
                  : idleText
              }
            >
              Home
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            return this.props.navigation.navigate("Subscriptions");
          }}
        >
          <View
            style={
              this.props.navigation.state.routeName === "Subscriptions"
                ? activeStyle
                : inActiveStyle
            }
          >
            <View style={{ alignSelf: "center" }}>
              {this.props.navigation.state.routeName === "Subscriptions" ? (
                <Image
                  source={require("../../assets/subscription.png")}
                  style={styles.active}
                />
              ) : (
                <Image
                  source={require("../../assets/subscription.png")}
                  style={styles.inActive}
                />
              )}
            </View>
            <Text
              style={
                this.props.navigation.state.routeName === "Subscriptions"
                  ? activeText
                  : idleText
              }
            >
              Subscriptions
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this._toggleBottomNavigationView}>
          <View
            style={
              this.props.navigation.state.routeName === ""
                ? activeStyle
                : inActiveStyle
            }
          >
            <View style={{ alignSelf: "center" }}>
              {this.props.navigation.state.routeName === "" ? (
                <Image
                  source={require("../../assets/call.png")}
                  style={styles.active}
                />
              ) : (
                <Image
                  source={require("../../assets/call.png")}
                  style={styles.inActive}
                />
              )}
            </View>
            <Text
              style={
                this.props.navigation.state.routeName === ""
                  ? activeText
                  : idleText
              }
            >
              Support
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => {
            return this.props.navigation.navigate("Settings");
          }}
        >
          <View
            style={
              this.props.navigation.state.routeName === "Settings"
                ? activeStyle
                : inActiveStyle
            }
          >
            <View style={{ alignSelf: "center" }}>
              {this.props.navigation.state.routeName === "Settings" ? (
                <Image
                  source={require("../../assets/settings.png")}
                  style={styles.active}
                />
              ) : (
                <Image
                  source={require("../../assets/settings.png")}
                  style={styles.inActive}
                />
              )}
            </View>
            <Text
              style={
                this.props.navigation.state.routeName === "Settings"
                  ? activeText
                  : idleText
              }
            >
              More
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <BottomSheet
          visible={this.state.visible}
          onBackButtonPress={this._toggleBottomNavigationView}
          onBackdropPress={this._toggleBottomNavigationView}
        >
          <Avatar
            size="medium"
            rounded
            overlayContainerStyle={{ backgroundColor: "red" }}
            icon={{ name: "close", type: "font-awesome" }}
            onPress={() => {
              this._toggleBottomNavigationView();
            }}
            activeOpacity={0.3}
            containerStyle={{
              position: "relative",
              bottom: 13,
              left: 300
            }}
          />
          <View style={styles.bottomNavigationView}>
            <View
              style={{
                flex: 1,
                alignItems: "flex-start",
                justifyContent: "space-around"
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: "60%",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Avatar
                  size="medium"
                  rounded
                  overlayContainerStyle={{ backgroundColor: "#0b8647" }}
                  icon={{ name: "phone", type: "font-awesome" }}
                  onPress={this.call}
                  activeOpacity={0.7}
                  // containerStyle={{backgroundColor: 'green'}}
                />
                <Text
                  style={{ textAlign: "center", padding: 20, fontSize: 16 }}
                >
                  Call Garble Support
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "60%",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Avatar
                  size="medium"
                  rounded
                  overlayContainerStyle={{ backgroundColor: "#43d854" }}
                  icon={{ name: "whatsapp", type: "font-awesome" }}
                  onPress={this.shareToWhatsApp}
                  activeOpacity={0.7}
                  // containerStyle={{backgroundColor: 'green'}}
                />
                <Text
                  style={{ textAlign: "center", padding: 20, fontSize: 16 }}
                >
                  Chat with Garble Support
                </Text>
              </View>
            </View>
          </View>
        </BottomSheet>
      </View>
    );
  }
}

export default Footer;

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderTopColor: "#f9f9f9",
    backgroundColor: "#edefee"
  },
  inActive: {
    tintColor: "#ada8a8",
    width: 20,
    height: 20
  },
  active: {
    tintColor: "#0b8647",
    width: 20,
    height: 20
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center"
  }
});
