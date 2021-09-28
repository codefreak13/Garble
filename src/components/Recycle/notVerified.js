import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  ActivityIndicator
} from "react-native";
import Root from "../Utils/Root";
import {
  CANCEL_REGISTRATION,
  GET_RECYCLE_MEMBER,
  VERIFIED_MEMBER
} from "../QueryAndMutation";
import { Query, Mutation } from "react-apollo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ActivityIndicatorPage from "../Utils/ActivityIndicator";
import ErrorPage from "../ErrorPage";

class NotVerified extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <Root navigation={this.props.navigation}>
        <View style={{ flex: 1 }}>
          <Query query={GET_RECYCLE_MEMBER}>
            {({ loading, error, data }) => {
              if (loading) return <ActivityIndicatorPage />;
              if (error)
                return <ErrorPage navigation={this.props.navigation} />;
              const val = data.getRecycleMember;
              return (
                <View style={styles.overlay}>
                  <TouchableNativeFeedback
                    onPress={() => this.props.navigation.goBack()}
                  >
                    <View style={styles.goBack}>
                      <FontAwesome name="arrow-left" size={20} color="white" />
                    </View>
                  </TouchableNativeFeedback>
                  <View
                    style={{
                      height: "50%",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      marginBottom: 35
                    }}
                  >
                    <Text
                      style={{
                        alignSelf: "center",
                        color: "red",
                        fontSize: 18,
                        fontWeight: "bold"
                      }}
                    >
                      You need to be verified to access this page
                    </Text>
                    <Mutation
                      mutation={CANCEL_REGISTRATION}
                      awaitRefetchQueries={true}
                      refetchQueries={[{ query: GET_RECYCLE_MEMBER }]}
                    >
                      {(deleteRdecycleMember, { loading }) => (
                        <TouchableNativeFeedback
                          onPress={() => {
                            deleteRdecycleMember({
                              variables: {
                                id: val._id
                              }
                            })
                              .then(res => {
                                console.log(res, "ressss");
                                this.props.navigation.navigate("Recycle");
                              })
                              .catch(err => {
                                console.log(err);
                              });
                          }}
                        >
                          <View style={styles.subscribe1}>
                            {loading ? (
                              <ActivityIndicator
                                size="small"
                                color="white"
                                style={styles.subscribeTitle1}
                              />
                            ) : (
                              <Text style={styles.subscribeTitle1}>
                                Cancel Application
                              </Text>
                            )}
                          </View>
                        </TouchableNativeFeedback>
                      )}
                    </Mutation>
                  </View>
                </View>
              );
            }}
          </Query>
          <View style={styles.headerMain}>
            <View style={styles.header}>
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontSize: 18, color: "white" }}>
                  Recycle Agent
                </Text>
                <Text style={styles.headerTitle}></Text>
              </View>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: "white"
                }}
              ></View>
            </View>
          </View>
          <View style={styles.main}>
            <View style={{ width: "90%", alignSelf: "center" }}>
              <View style={{ backgroundColor: "#0b8647" }}>
                <Text
                  style={{
                    alignSelf: "center",
                    color: "white",
                    fontSize: 22,
                    padding: 10
                  }}
                >
                  Plastic Waste
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#edefee",
                  padding: 10
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ fontSize: 18, color: "#353535" }}>
                    Quantity Amassed
                  </Text>
                  <TextInput
                    style={{
                      marginTop: 10,
                      backgroundColor: "white",
                      borderColor: "white",
                      width: "40%",
                      paddingLeft: 5
                    }}
                    editable={false}
                    selectTextOnFocus={false}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ fontSize: 18, color: "#353535" }}>
                    Payable Amount
                  </Text>
                  <TextInput
                    style={{
                      marginTop: 10,
                      backgroundColor: "white",
                      borderColor: "white",
                      width: "40%",
                      paddingLeft: 5
                    }}
                    editable={false}
                    selectTextOnFocus={false}
                  />
                </View>
              </View>
            </View>
            <View style={{ width: "90%", alignSelf: "center" }}>
              <View style={{ backgroundColor: "#0b8647" }}>
                <Text
                  style={{
                    alignSelf: "center",
                    color: "white",
                    fontSize: 22,
                    padding: 10
                  }}
                >
                  Nylon Waste
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#edefee",
                  padding: 10
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ fontSize: 18, color: "#353535" }}>
                    Quantity Amassed
                  </Text>
                  <TextInput
                    style={{
                      marginTop: 10,
                      backgroundColor: "white",
                      borderColor: "white",
                      width: "40%",
                      paddingLeft: 5
                    }}
                    editable={false}
                    selectTextOnFocus={false}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ fontSize: 18, color: "#353535" }}>
                    Payable Amount
                  </Text>
                  <TextInput
                    style={{
                      marginTop: 10,
                      backgroundColor: "white",
                      borderColor: "white",
                      width: "40%",
                      paddingLeft: 5
                    }}
                    editable={false}
                    selectTextOnFocus={false}
                  />
                </View>
              </View>
            </View>
            <View style={{ padding: 20 }}>
              <Text style={styles.offer}>Terms of Service</Text>
              <Text style={{ color: "grey", fontSize: 18 }}>
                Clients are to note that most fumigations chemicals are toxic
                and there is need to stay off fumigated properties for a period
                of time as advised by agents Clients are to note that most
                fumigations chemicals are toxic and there is need to stay off
                fumigated properties for a period of time as advised there is
                need to stay off fumigated properties for a period of time as
                advised by agents Clients are to note that most fumigations
                chemicals are toxic and there is need to stay off fumigated
                properties for a period of time as advi agents
              </Text>
            </View>
            <View style={styles.subscribe}>
              <Text style={styles.subscribeTitle}>Withdraw</Text>
            </View>
          </View>
        </View>
      </Root>
    );
  }
}

export default NotVerified;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 30
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.84,
    backgroundColor: "#edefee",
    width: "100%",
    height: "100%",
    zIndex: 20,
    justifyContent: "flex-end"
  },
  headerMain: {
    width: "100%",
    backgroundColor: "#0b8647",
    alignItems: "center"
  },
  header: {
    padding: 20,
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  goBack: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b8647",
    borderRadius: 35,
    height: 35,
    width: 35,
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10
  },
  headerTitle: {
    fontSize: 22,
    marginTop: -5,
    color: "white",
    fontWeight: "bold"
  },
  offer: {
    fontSize: 25,
    color: "#0b8647",
    fontWeight: "bold"
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
  },
  subscribe1: {
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "#0b8647",
    fontSize: 20,
    width: "85%",
    alignSelf: "center",
    marginBottom: 20
  },
  subscribeTitle1: {
    fontSize: 20,
    padding: 15,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center"
  }
});
