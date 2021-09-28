import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Image
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class VerifyEmail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerLeft: (
        <TouchableNativeFeedback onPress={() => navigation.goBack()}>
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
      )
    };
  };

  render() {
    const email = this.props.navigation.getParam("userEmail", "nothing sent");
    console.warn(email);
    return (
      <View style={styles.main}>
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              fontSize: 25,
              width: 233,
              color: "#0b8647",
              fontWeight: "bold"
            }}
          >
            Email Verification
          </Text>
        </View>
        <View style={styles.alignicons}>
          <View style={styles.changing1}>
            <View style={styles.circle1}>
              <Text style={styles.icon1}>1</Text>
            </View>
          </View>
          <View style={styles.circle1}>
            <Text style={styles.icon1}>2</Text>
          </View>
          <View style={styles.changing3}>
            <View style={styles.circle1}>
              <Text style={styles.icon1}>3</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 5,
            width: 90,
            backgroundColor: "#0b8647",
            position: "relative",
            left: 20,
            bottom: 17
          }}
        />
        <View
          style={{
            height: 5,
            width: 90,
            backgroundColor: "#0b8647",
            position: "relative",
            left: 120,
            bottom: 22
          }}
        />
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text
            style={{
              fontFamily: "Montserrat, Medium",
              color: "#0b8647",
              fontSize: 14
            }}
          >
            We sent a confirmation mail to
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat, Medium",
              fontWeight: "bold",
              color: "#0b8647",
              paddingTop: 5,
              fontSize: 14
            }}
          >
            {email}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat, Medium",
              color: "#0b8647",
              paddingTop: 5,
              fontSize: 14
            }}
          >
            check your email and
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat, Medium",
              color: "#0b8647",
              paddingTop: 5,
              fontSize: 14
            }}
          >
            retrieve on the code to continue.
          </Text>
        </View>
        <TouchableNativeFeedback
          onPress={() =>
            this.props.navigation.navigate("Email2", {
              userEmail: email
            })
          }
        >
          <View style={styles.touchable}>
            <Text style={styles.verify}>Click to verify</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default VerifyEmail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
    marginTop: 38
  },
  changing1: {
    marginRight: 72
  },
  changing3: {
    marginLeft: 72
  },
  circle1: {
    flexDirection: "row",
    borderRadius: 100,
    padding: 4,
    borderWidth: 0.5,
    borderColor: "#0b8647",
    width: 30,
    height: 30,
    alignItems: "center"
  },
  alignicons: {
    flexDirection: "row",
    marginTop: 31
  },
  touchable: {
    borderRadius: 35,
    backgroundColor: "#0b8647",
    height: 55,
    width: 242,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },
  icon1: {
    borderRadius: 50,
    width: 20,
    height: 20,
    backgroundColor: "#0b8647",
    color: "white",
    textAlign: "center"
  },
  verify: {
    color: "white",
    fontSize: 18,
    fontFamily: "Montserrat, Semi Bold",
    lineHeight: 22,
    fontWeight: "bold"
  }
});
