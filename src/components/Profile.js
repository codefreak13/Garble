import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Image,
  ScrollView,
  Alert
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Root from "./Utils/Root";
import { Divider } from "react-native-elements";
import { Query } from "react-apollo";
import { CURRENT_USER } from "./QueryAndMutation";
import ActivityIndicatorPage from "./Utils/ActivityIndicator";
import AsyncStorage from "@react-native-community/async-storage";
import ErrorPage from "./ErrorPage";

class Profile extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Profile",
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
              source={require("../assets/profile.png")}
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
      <Query query={CURRENT_USER}>
        {({ loading, error, data }) => {
          if (loading) return ActivityIndicatorPage;
          if (error) return <ErrorPage navigation={this.props.navigation} />;
          const user = data.getCurrentUser;
          return (
            <Root navigation={this.props.navigation}>
              <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps={"handled"}
              >
                <View style={styles.main}>
                  <View
                    style={{
                      backgroundColor: "#edefea",
                      flex: 1,
                      justifyContent: "flex-start"
                    }}
                  >
                    <Text
                      style={{
                        color: "#0b8647",
                        fontSize: 25,
                        paddingLeft: 25,
                        marginBottom: 15,
                        fontWeight: "bold",
                        marginTop: 40
                      }}
                    >
                      {user.firstname + " " + user.surname}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        padding: 20,
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/notify.png")}
                          style={{
                            tintColor: "#0b8647",
                            width: 22,
                            height: 22
                          }}
                        />
                        <Text
                          style={{
                            paddingLeft: 20,
                            fontSize: 18,
                            color: "#0b8647"
                          }}
                        >
                          {user.email}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        padding: 20
                      }}
                    >
                      <Image
                        source={require("../assets/phone-list.png")}
                        style={{
                          tintColor: "#0b8647",
                          width: 22,
                          height: 22
                        }}
                      />
                      <Text
                        style={{
                          paddingLeft: 20,
                          fontSize: 18,
                          color: "#0b8647"
                        }}
                      >
                        {user.phone}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        padding: 20
                      }}
                    >
                      <Image
                        source={require("../assets/address.png")}
                        style={{
                          tintColor: "#0b8647",
                          width: 22,
                          height: 22
                        }}
                      />
                      <Text
                        style={{
                          paddingLeft: 20,
                          fontSize: 18,
                          color: "#0b8647"
                        }}
                      >
                        {user.address + " " + user.city + ", " + user.state}
                      </Text>
                    </View>
                  </View>
                  <Divider
                    style={{
                      backgroundColor: "#edefea",
                      width: "100%"
                    }}
                  ></Divider>
                  <TouchableNativeFeedback
                    onPress={() =>
                      this.props.navigation.navigate("UpdateProfile", {
                        user: user
                      })
                    }
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
                      <Text
                        style={{
                          fontSize: 18,
                          color: "grey",
                          paddingLeft: 20
                        }}
                      >
                        Edit Profile
                      </Text>
                    </View>
                  </TouchableNativeFeedback>
                  <Divider
                    style={{
                      backgroundColor: "#edefea",
                      width: "100%"
                    }}
                  ></Divider>
                  <TouchableNativeFeedback
                    onPress={() =>
                      this.props.navigation.navigate("ResetPassword")
                    }
                    background={TouchableNativeFeedback.Ripple("white")}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        padding: 20
                      }}
                    >
                      <Image
                        source={require("../assets/padlock.png")}
                        style={{
                          tintColor: "#0b8647",
                          width: 22,
                          height: 22
                        }}
                      />
                      <Text
                        style={{ paddingLeft: 20, fontSize: 18, color: "grey" }}
                      >
                        Change Password
                      </Text>
                    </View>
                  </TouchableNativeFeedback>
                  <Divider
                    style={{
                      backgroundColor: "#edefea",
                      width: "100%"
                    }}
                  ></Divider>
                  <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple("white")}
                    onPress={() => {
                      Alert.alert(
                        "Sign Out",
                        "Are you sure you want to sign out?",
                        [
                          {
                            text: "NO",
                            onPress: () => {
                              this.props.navigation.navigate("Profile");
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
                        ]
                      );
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
                      <Text
                        style={{ paddingLeft: 20, fontSize: 18, color: "grey" }}
                      >
                        Sign Out
                      </Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </ScrollView>
            </Root>
          );
        }}
      </Query>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column"
  }
});
