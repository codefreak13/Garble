import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  PermissionsAndroid,
  Platform,
  ToastAndroid
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import Geolocation from "react-native-geolocation-service";

class ServiceBar extends React.Component {
  static navigationOptions = { header: null };

  watchId = null;

  state = {
    visible1: false,
    visible2: false,
    selectedStartDate: null,
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

  toggle1 = () => {
    this.setState(prevState => {
      return {
        visible1: !prevState.visible1
      };
    });
  };

  toggle2 = () => {
    this.setState(prevState => {
      return {
        visible2: !prevState.visible2
      };
    });
  };

  onDateChange = date => {
    this.setState(prevState => {
      return {
        selectedStartDate: date,
        visible1: !prevState.visible1
      };
    });

    return this.props.getDate(date);
  };

  getAddress = data => {
    this.setState(data);
    this.props.Address(data);
  };

  onPress = () => {
    this.props.navigation.navigate("MapView", {
      getAddress: this.getAddress,
      item: { region: this.state.region, loading: this.state.loading }
    });
  };

  render() {
    const startDate = this.state.selectedStartDate
      ? this.state.selectedStartDate.toString().slice(0, 16)
      : "";
    return (
      <View style={[styles.main]}>
        <TouchableWithoutFeedback onPress={this.toggle1}>
          <View style={styles.bar}>
            <Image
              source={require("../assets/date.png")}
              style={{ width: 50, height: 50 }}
            />
            {startDate ? (
              <Text
                style={{
                  fontSize: 18,
                  color: "grey",
                  paddingLeft: 20
                }}
              >
                {startDate}
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 18,
                  color: "grey",
                  paddingLeft: 20
                }}
              >
                Select Service Date
              </Text>
            )}
          </View>
        </TouchableWithoutFeedback>
        {this.state.visible1 && (
          <View>
            <CalendarPicker
              onDateChange={this.onDateChange}
              minDate={new Date()}
              todayBackgroundColor="#edefee"
              // selectedDayColor="#7300e6"
              // selectedDayTextColor="#FFFFFF"
            />
          </View>
        )}
        <TouchableWithoutFeedback onPress={this.onPress}>
          {this.state.address ? (
            <View
              style={[styles.barAddress, { marginBottom: 15, marginTop: 20 }]}
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
            <View style={[styles.bar, { marginBottom: 15, marginTop: 20 }]}>
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
      </View>
    );
  }
}

export default ServiceBar;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    width: "100%"
  },
  bar: {
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    elevation: 0.9
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
