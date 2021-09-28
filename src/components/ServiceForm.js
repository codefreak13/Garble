import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Image,
  PermissionsAndroid,
  Platform,
  ToastAndroid
} from "react-native";
import Geolocation from "react-native-geolocation-service";
import ServiceBar from "./ServiceBar";

class ServiceForm extends React.Component {
  watchId = null;

  state = {
    selectedDate: "",
    address: "",
    region: {
      latitude: 0,
      longitude: 0
    },
    loading: false
  };

  hasLocationPermission = async () => {
    if (Platform.OS === "android" && Platform.Version <= 28) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission) return true;

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        "Location permission denied by user.",
        ToastAndroid.LONG
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        "Location permission revoked by user.",
        ToastAndroid.LONG
      );
    }

    return false;
  };

  //   async hasLocationPermission() {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         'title': 'Location Services',
  //         'message': 'Allow Garble access to your location '
  //       }
  //     )
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log("You can use the location")
  //       alert("You can use the location");
  //     } else {
  //       console.log("location permission denied")
  //       alert("Location permission denied");
  //     }
  //   } catch (err) {
  //     console.warn(err)
  //   }
  // }

  geolocation() {
    if (this.hasLocationPermission()) {
      this.watchId = Geolocation.watchPosition(
        position => {
          console.log(position, "aba");
          this.setState({
            region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            },
            loading: true
          });
        },
        error => {
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 100000 }
      );
    }
  }

  componentDidMount() {
    this.geolocation();
  }

  async componentWillUnmount() {
    await Geolocation.clearWatch(this.watchId);
  }

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
          background={TouchableNativeFeedback.Ripple("0b8647")}
        >
          <View style={{ marginLeft: 20.8 }}>
            <FontAwesome name="arrow-left" color="#FFFFFF" size={18} />
          </View>
        </TouchableNativeFeedback>
      )
    };
  };

  getDate = date => {
    console.log(date, "date1");
    this.setState({
      selectedDate: date
    });
  };

  getAddress = data => {
    this.setState(data);
  };

  onPress = () => {
    this.props.navigation.navigate("MapView", {
      getAddress: this.getAddress,
      item: { region: this.state.region, loading: this.state.loading }
    });
  };

  render() {
    console.log(this.state.selectedDate, "date");
    const startDate = this.state.selectedDate.toString().slice(0, 16);
    const item = {
      date: startDate,
      amount: this.props.price,
      address: this.state.address
    };
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps={"handled"}
        >
          <View style={styles.main}>
            <View style={styles.body}>
              <View style={{ alignSelf: "center" }}>
                <Text style={styles.offer}>Service Information</Text>
                <Text style={styles.serviceText}>{this.props.info}</Text>
              </View>
              <View>
                <View style={styles.nextBtn}>
                  <View style={styles.price1}>
                    <Text style={[styles.subtitleText, { paddingBottom: -3 }]}>
                      Service
                    </Text>
                    <Text
                      style={[
                        { marginLeft: -28, marginTop: -10 },
                        styles.subtitleText
                      ]}
                    >
                      Cost
                    </Text>
                  </View>
                  <View style={styles.price2}>
                    <Text
                      style={[
                        styles.subtitleText,
                        { padding: 15, fontWeight: "bold" }
                      ]}
                    >
                      {"\u20A6"}
                      {this.props.price}
                    </Text>
                  </View>
                </View>
                {this.props.ServiceDateNotRequired ? (
                  <TouchableWithoutFeedback onPress={this.onPress}>
                    {this.state.address ? (
                      <View
                        style={[
                          styles.barAddress,
                          { marginBottom: 15, marginTop: 20 }
                        ]}
                      >
                        <Text
                          style={{
                            fontSize: 18,
                            color: "grey",
                            padding: 10,
                            width: "90%",
                            flexWrap: "wrap",
                            textAlign: "center"
                          }}
                        >
                          {this.state.address}
                        </Text>
                      </View>
                    ) : (
                      <View
                        style={[
                          styles.bar,
                          { marginBottom: 15, marginTop: 20 }
                        ]}
                      >
                        <Image
                          source={require("../assets/location.png")}
                          style={{ width: 50, height: 50 }}
                        />
                        <Text
                          style={{
                            fontSize: 18,
                            color: "grey",
                            paddingLeft: 20
                          }}
                        >
                          Select Service Address
                        </Text>
                      </View>
                    )}
                  </TouchableWithoutFeedback>
                ) : (
                  <View style={{ marginTop: 20 }}>
                    <ServiceBar
                      navigation={this.props.navigation}
                      getDate={selectedDate => this.getDate(selectedDate)}
                      Address={address => this.getAddress(address)}
                    />
                  </View>
                )}
              </View>
              <TouchableNativeFeedback
                onPress={() =>
                  this.props.navigation.navigate(this.props.route, {
                    item: item
                  })
                }
              >
                <View style={styles.subscribe}>
                  <Text style={styles.subscribeTitle}>Proceed</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default ServiceForm;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  body: {
    flex: 1,
    padding: 15,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  subscribe: {
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "#0b8647",
    fontSize: 20,
    width: "80%",
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
  nextBtn: {
    width: "70%",
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  price1: {
    backgroundColor: "#ffcd04",
    flexDirection: "column",
    width: "49.8%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
    padding: 13
  },
  price2: {
    backgroundColor: "#ffcd04",
    width: "49.8%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center"
  },
  subtitleText: {
    alignSelf: "center",
    fontSize: 25,
    color: "#154015",
    padding: 5
    // fontWeight: 'bold',
  },
  offer: {
    fontSize: 25,
    color: "#0b8647",
    fontWeight: "bold",
    marginBottom: 5,
    alignSelf: "center"
  },
  serviceText: {
    fontSize: 18,
    padding: 0.5,
    color: "grey",
    marginBottom: 15
  },
  bar: {
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    padding: 5,
    marginTop: 20,
    borderRadius: 10,
    elevation: 1.3
  },
  barAddress: {
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    padding: 5,
    marginTop: 20,
    borderRadius: 10,
    elevation: 1
  }
});
