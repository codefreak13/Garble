import React from "react";
import {
  Text,
  View,
  TouchableNativeFeedback,
  TextInput,
  Image,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Geocoder from "react-native-geocoding";
Geocoder.init("AIzaSyAb4cX9yaOicAdurDouv_ZMwDbb0cKDlTg");
import { debounce } from "throttle-debounce";
import ActivityIndicatorPage from "./ActivityIndicator";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      region: this.props.navigation.state.params.item.region,
      Address: null,
      currentAddress: null,
      city: null,
      destination: "",
      predictions: [],
      visible: true,
      loading: this.props.navigation.state.params.item.loading,
      tracksViewChanges: false,
      mounted: false
    };
    this.onSubmit = debounce(1000, this.onSubmitSearch);
  }

  static navigationOptions = { header: null };

  onRegionChange(region) {
    this.setState({ region });
    setTimeout(() => {
      Geocoder.from(this.state.region.latitude, this.state.region.longitude)
        .then(json => {
          let formatted_address = json.results[0].formatted_address;
          let city_address = json.results[5].formatted_address.split(",")[0];
          this.setState({
            loading: false,
            Address: formatted_address,
            city: city_address
          });
        })
        .catch(error => console.warn(error));
    }, 150);
  }

  onChangeDestination(destination) {
    this.setState({ destination }, () => this.onSubmit(this.state.destination));
  }

  async onSubmitSearch(destination) {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${destination}&location=${this.state.region.latitude},${this.state.region.longitude}&radius=500&stricbounds&components=country:ng&key=AIzaSyAb4cX9yaOicAdurDouv_ZMwDbb0cKDlTg`;

    try {
      const result = await fetch(apiUrl);
      const json = await result.json();
      this.setState({
        predictions: json.predictions
      });
    } catch (err) {
      console.warn(err);
    }
  }

  onPress(address) {
    this.setState({ visible: false });
    Geocoder.from(address)
      .then(json => {
        let location = json.results[0].geometry.location;
        // console.log(location, "location");
        this.setState({
          region: {
            latitude: location.lat,
            longitude: location.lng
          }
        });
      })
      .then(() => {
        setTimeout(() => {
          const { navigation } = this.props;
          navigation.goBack();
          navigation.state.params.getAddress({ address: address });
        }, 300);
      })
      .catch(error => console.warn(error));
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white"
        }}
      >
        {this.state.region.latitude ? (
          <View
            style={{
              flex: 1,
              backgroundColor: "white"
            }}
          >
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.goBack()}
            >
              <View style={styles.goBack}>
                <FontAwesome name="arrow-left" size={20} color="#0b8647" />
              </View>
            </TouchableNativeFeedback>
            <MapView
              loadingEnabled={true}
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              showsPointsOfInterest
              showsCompass
              showsMyLocationButton
              zoomControlEnabled
              zoomEnabled
              zoomTapEnabled
              region={{
                ...this.state.region,
                latitudeDelta: 0.0123,
                longitudeDelta: 0.0023
              }}
              onRegionChangeComplete={region => this.onRegionChange(region)}
            >
              <MapView.Marker
                coordinate={this.state.region}
                tracksViewChanges={this.state.tracksViewChanges}
              />
              <MapView.Circle
                center={this.state.region}
                radius={27}
                strokeWidth={2.5}
                strokeColor="red"
                fillColor="#B9B9B9"
              />
            </MapView>
            <TextInput
              placeholder="Input Service Address"
              placeholderTextColor="#0b8647"
              value={this.state.destination}
              style={styles.destination}
              onChangeText={data => this.onChangeDestination(data)}
            ></TextInput>
            {this.state.visible && (
              <View style={styles.predictionItem}>
                {this.state.predictions.map(prediction => {
                  return (
                    <TouchableNativeFeedback
                      key={prediction.id}
                      onPress={() => this.onPress(prediction.description)}
                    >
                      <View>
                        <Text style={styles.predictionValue}>
                          {prediction.description}
                        </Text>
                      </View>
                    </TouchableNativeFeedback>
                  );
                })}
              </View>
            )}
            <View style={styles.city}>
              <View>
                <Image
                  source={require("../../assets/marker1.png")}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              <Text style={{ alignSelf: "center", paddingRight: 5 }}>
                {this.state.city}
              </Text>
            </View>
            <TouchableNativeFeedback
              onPress={() => this.onPress(this.state.Address)}
            >
              <View style={styles.address}>
                {this.state.loading ? (
                  <ActivityIndicator
                    size="large"
                    color="#0b8647"
                    style={{
                      padding: 3,
                      width: "100%"
                    }}
                  />
                ) : (
                  <View style={{ paddingLeft: 10, width: "100%" }}>
                    <View>
                      <Text style={styles.addressBar}>
                        Select Service Address
                      </Text>
                      <Text style={styles.addressValue}>
                        {this.state.Address}
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            </TouchableNativeFeedback>
          </View>
        ) : (
          <ActivityIndicatorPage />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
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
  destination: {
    height: 50,
    position: "absolute",
    top: 70,
    borderWidth: 2,
    borderColor: "#0b8647",
    borderRadius: 5,
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    marginBottom: 10,
    fontSize: 18,
    paddingLeft: 15
  },
  address: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    opacity: 0.9,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    paddingTop: 10,
    flex: 1
  },
  addressBar: {
    color: "#0b8647",
    marginBottom: 3,
    alignSelf: "center"
  },
  addressValue: {
    fontSize: 17,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center"
  },
  city: {
    position: "absolute",
    bottom: 60,
    backgroundColor: "white",
    flex: 1,
    left: 5,
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "row",
    padding: 5
  },
  predictionValue: {
    color: "black",
    padding: 15,
    borderBottomColor: "#0b8647",
    borderBottomWidth: 0.5,
    fontWeight: "bold"
  },
  predictionItem: {
    position: "absolute",
    top: 120,
    backgroundColor: "white",
    opacity: 0.9,
    width: "90%",
    alignSelf: "center"
  }
});
