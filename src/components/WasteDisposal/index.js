import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  Image,
  ImageBackground
} from "react-native";
import Root from "../Utils/Root";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class WasteDisposal extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <Root navigation={this.props.navigation}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps={"handled"}
        >
          <View style={styles.main}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.goBack()}
            >
              <View style={styles.goBack}>
                <FontAwesome name="arrow-left" size={20} color="#0b8647" />
              </View>
            </TouchableNativeFeedback>
            <View
              style={{
                height: "35%",
                backgroundColor: "#0b8647",
                width: "100%"
              }}
            >
              <Image
                source={require("../../assets/gWaste.jpg")}
                style={{ height: 400, width: "100%" }}
              />
            </View>
            <TouchableNativeFeedback
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
            >
              <Image
                source={require("../../assets/wasteC.png")}
                style={{
                  height: 100,
                  width: 100,
                  position: "absolute",
                  top: 250,
                  right: 10,
                  zIndex: 10
                }}
              />
            </TouchableNativeFeedback>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-around",
                flex: 2,
                backgroundColor: "white",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                padding: 20,
                width: "100%",
                flexDirection: "column",
                justifyContent: "space-around"
              }}
            >
              <Text style={styles.offer}>Waste Collection Services</Text>
              <View style={styles.main1}>
                <View style={styles.container}>
                  <TouchableNativeFeedback
                    onPress={() => {
                      return this.props.navigation.navigate("HouseServiceForm");
                    }}
                  >
                    <View style={styles.box}>
                      <Image
                        source={require("../../assets/household.png")}
                        style={styles.menuImage}
                      />
                      <Text style={styles.title1}>Household Waste</Text>
                    </View>
                  </TouchableNativeFeedback>
                  <TouchableNativeFeedback
                    onPress={() => {
                      return this.props.navigation.navigate(
                        "OfficeServiceForm"
                      );
                    }}
                  >
                    <View style={styles.box}>
                      <Image
                        source={require("../../assets/office.png")}
                        style={styles.menuImage}
                      />
                      <Text style={styles.title1}>Office Waste</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
                <View style={styles.container}>
                  <TouchableNativeFeedback
                    onPress={() => {
                      return this.props.navigation.navigate(
                        "IndustryServiceForm"
                      );
                    }}
                  >
                    <View style={styles.box}>
                      <Image
                        source={require("../../assets/hwaste.png")}
                        style={styles.menuImage}
                      />
                      <Text style={styles.title1}>Industrial Waste</Text>
                    </View>
                  </TouchableNativeFeedback>
                  <TouchableNativeFeedback
                    onPress={() => {
                      return this.props.navigation.navigate(
                        "MedicalServiceForm"
                      );
                    }}
                  >
                    <View style={styles.box}>
                      <Image
                        source={require("../../assets/medical.png")}
                        style={styles.menuImage}
                      />
                      <Text style={styles.title1}>Medical Waste</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </View>
              <View>
                <Text style={styles.offer}>Service Information</Text>
                <Text style={styles.serviceText}>
                  Garble Waste collection and disposal offers personalized waste
                  management services to households, offices, firms, hospitals
                  and pharmacies. On request, Garble associates will be on
                  location biweekly/triweekly to cater to client's waste
                  collection.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </Root>
    );
  }
}

export default WasteDisposal;

const styles = StyleSheet.create({
  imageBackgroundStyle: {
    flex: 1
  },
  main: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
    width: "80%"
  },
  title: {
    fontSize: 25,
    color: "white",
    paddingLeft: 60,
    fontWeight: "bold"
  },
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12
  },
  main1: {
    alignSelf: "center",
    width: "95%",
    flexDirection: "column"
  },
  subtitleText: {
    alignSelf: "center",
    fontSize: 18,
    color: "#0b8647"
  },
  box: {
    width: "48%",
    backgroundColor: "#edefee",
    borderRadius: 8,
    borderColor: "#0b8647",
    borderWidth: 0.09,
    elevation: 1.5,
    padding: 5
  },
  title1: {
    alignSelf: "center",
    marginBottom: 13,
    color: "#0b8647"
  },
  menuImage: {
    width: 40,
    height: 43,
    alignSelf: "center",
    margin: 15
  },
  offer: {
    fontSize: 22,
    color: "#0b8647",
    fontWeight: "bold"
  },
  serviceText: {
    paddingLeft: -5,
    paddingRight: 5,
    fontSize: 18,
    padding: 0.5,
    color: "grey"
  }
});
