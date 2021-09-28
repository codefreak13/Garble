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
import { Mutation, Query } from "react-apollo";
import { GET_RECYCLE_MEMBER } from "../QueryAndMutation";
import ActivityIndicatorPage from "../Utils/ActivityIndicator";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ErrorPage from "../ErrorPage";

class RecyclingService extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <Query query={GET_RECYCLE_MEMBER}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicatorPage />;
          if (error) return <ErrorPage navigation={this.props.navigation} />;
          const response = data.getRecycleMember;
          const user = data.getCurrentUser;
          console.log(response, "console");
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
                      source={require("../../assets/recycle.jpg")}
                      style={{ height: 400, width: "100%" }}
                    />
                  </View>
                  <TouchableNativeFeedback
                    onPress={() => {
                      this.props.navigation.navigate("Home");
                    }}
                  >
                    <Image
                      source={require("../../assets/recycle.png")}
                      style={{
                        height: 90,
                        width: 90,
                        position: "absolute",
                        top: 300,
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
                      padding: 15,
                      paddingTop: 30
                    }}
                  >
                    <View>
                      <Text style={styles.offer}>Recycling</Text>
                      <View>
                        <Text style={styles.serviceText}>
                          Plastic waste(PET)
                        </Text>
                        <Text style={styles.serviceText}>Nylon waste</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.offer}>Service Information</Text>
                      <Text style={styles.serviceText}>
                        Garble recycle affords individuals the opportunity to
                        earn while keeping the environment clean and tidy.
                        Verified recycle agents are expected to deliver
                        recyclables such as used PET bottles and 'pure-water'
                        sachets to Garble collection points. Agents deliveries
                        are inspected and agents paid according to rates.
                      </Text>
                    </View>
                    <TouchableNativeFeedback
                      onPress={() => {
                        console.log(response, "res");
                        if (response === null) {
                          this.props.navigation.navigate("RegisterRecycle", {
                            user: user
                          });
                        } else if (response.isVerified === "true") {
                          this.props.navigation.navigate("RecycleAgent");
                        } else {
                          this.props.navigation.navigate("NotVerifiedPage");
                        }
                      }}
                    >
                      <View style={styles.subscribe}>
                        <Text style={styles.subscribeTitle}>Proceed</Text>
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                </ScrollView>
                {/* </View> */}
              </View>
            </Root>
          );
        }}
      </Query>
    );
  }
}

export default RecyclingService;

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
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "#0b8647",
    fontSize: 20,
    width: "85%",
    alignSelf: "center",
    marginBottom: 20
  },
  subscribeTitle: {
    fontSize: 20,
    padding: 15,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center"
  }
});
