import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Image,
  ScrollView
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Root from "./Utils/Root";
import cleaningServiceImage from "../assets/hclean.png";
import fumigationServiceImage from "../assets/hfumigate.png";
import mobileToiletServiceImage from "../assets/porta.png";
import sewageEvacuationServiceImage from "../assets/hsewage.png";
import wasteCollectionServiceImage from "../assets/garbage.png";
const subscriptionItems1 = [
  {
    title: "Cleaning Services",
    image: cleaningServiceImage,
    route: "CleaningSubscriptions"
  },
  {
    title: "Fumigation Services",
    image: fumigationServiceImage,
    route: "FumigationSubscription"
  },
  {
    title: "Mobile Toilet Rentals",
    image: mobileToiletServiceImage,
    route: "MobileToiletSubscriptions"
  },
  {
    title: "Sewage Evacuation Service",
    image: sewageEvacuationServiceImage,
    route: "EvacuationSubscriptions"
  },
  {
    title: "Waste Collection Services",
    image: wasteCollectionServiceImage,
    route: "WasteSubscription"
  }
];

class Subscriptions extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Subscriptions",
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
              source={require("../assets/subscription.png")}
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
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps={"handled"}
        >
          <View style={styles.main1}>
            <ListSubscriptions navigate={this.props.navigation.navigate} />
          </View>
        </ScrollView>
      </Root>
    );
  }
}

export default Subscriptions;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20
  },
  text: {
    fontSize: 18,
    backgroundColor: "#0b8647",
    padding: 20,
    marginBottom: 5,
    fontWeight: "bold",
    color: "white"
  },
  text1: {
    fontSize: 18,
    backgroundColor: "red",
    padding: 20,
    marginBottom: 5,
    fontWeight: "bold",
    color: "white"
  },
  main1: {
    alignSelf: "center",
    width: "90%",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 20
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  box: {
    width: "48.5%",
    flex: 1,
    backgroundColor: "#edefee",
    borderRadius: 8,
    borderColor: "#0b8647",
    borderWidth: 0.09,
    elevation: 1.5,
    marginBottom: 10
  },
  title: {
    alignSelf: "center",
    marginBottom: 13,
    color: "#0b8647"
  },
  menuImage: {
    width: "20%",
    height: 50,
    alignSelf: "center",
    marginTop: 23
  },
  fumigateImage: {
    width: "45%",
    height: 50,
    alignSelf: "center",
    marginTop: 23
  },
  portaImage: {
    width: "10%",
    height: 50,
    alignSelf: "center",
    marginTop: 23,
    tintColor: "#0b8647"
  },
  title1: {
    color: "#0b8647"
  },
  menuImage1: {
    width: 120,
    height: 60
  },
  box1_cont: {
    width: "100%",
    backgroundColor: "#edefee",
    borderRadius: 8,
    borderColor: "#0b8647",
    borderWidth: 0.09,
    elevation: 1.5
  },
  box1: {
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    justifyContent: "space-between"
  }
});

const ListSubscriptions = ({ navigate }) =>
  subscriptionItems1.map(item => (
    <View style={styles.container}>
      <TouchableNativeFeedback
        onPress={() => {
          navigate(item.route);
        }}
      >
        <View style={styles.box}>
          {item.route === "MobileToiletSubscriptions" ? (
            <Image
              source={mobileToiletServiceImage}
              style={styles.portaImage}
            />
          ) : item.route === "FumigationSubscription" ? (
            <Image
              source={fumigationServiceImage}
              style={styles.fumigateImage}
            />
          ) : (
            <Image source={item.image} style={styles.menuImage} />
          )}
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  ));
