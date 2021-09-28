import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  ActivityIndicator,
  Picker,
  Image
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FORGOT_PASSWORD } from "./QueryAndMutation";
import ShowMessage, { type } from "./toster/ShowMessage";
import { Mutation } from "react-apollo";
import AsyncStorage from "@react-native-community/async-storage";

class ForgotPassword extends React.Component {
  state = {
    email: ""
  };
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Forgot Passowrd",
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
      )
    };
  };

  state = {
    password: ""
  };

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
          keyboardShouldPersistTaps={"handled"}
        >
          <View style={styles.barItem}>
            <Text style={styles.text}>
              Password change instruction will be sent to your email address
            </Text>
            <Text style={{ color: "#0b8647", fontSize: 17 }}> Email</Text>
            <TextInput
              name="newPassword"
              style={styles.textInput}
              placeholderTextColor="rgb(0,255,157)"
              value={this.state.email}
              keyboardType="email-address"
              onChangeText={text => this.setState({ email: text })}
            />
          </View>
          <Mutation mutation={FORGOT_PASSWORD}>
            {(forgotPassword, { loading }) => (
              <View style={styles.nextBtnDiv}>
                <TouchableNativeFeedback
                  onPress={async () => {
                    await forgotPassword({
                      variables: {
                        email: this.state.email.toLowerCase()
                      }
                    })
                      .then(async res => {
                        if (res) {
                          ShowMessage(type.DONE, res.data.forgotPassword);
                          await AsyncStorage.setItem("otp", this.state.email);
                          this.props.navigation.navigate("Reset");
                        }
                      })
                      .catch(error => {
                        return error;
                      });
                  }}
                >
                  <View style={styles.nextBtn}>
                    {loading ? (
                      <ActivityIndicator size="small" color="white" />
                    ) : (
                      <Text style={styles.nextBtnText}>RESET PASSWORD</Text>
                    )}
                  </View>
                </TouchableNativeFeedback>
              </View>
            )}
          </Mutation>

          <View style={styles.nextBtnDiv2}>
            <Text style={styles.text1}>
              To utilize the OTP sent to your mail
            </Text>
            <TouchableNativeFeedback
              onPress={async () => {
                this.props.navigation.navigate("Reset");
              }}
            >
              <View>
                <Text style={styles.nextBtnText3}> Click Here</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default ForgotPassword;

const styles = StyleSheet.create({
  main: {
    alignSelf: "center",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    width: "95%",
    justifyContent: "center"
  },
  text: {
    color: "#A5A5A5",
    fontSize: 13,
    marginTop: 15,
    marginBottom: 10
  },

  text1: {
    color: "#A5A5A5",
    fontSize: 13,
    marginTop: 5
  },
  barItem: {
    padding: 10
  },
  textInput: {
    borderBottomWidth: 0.5,
    borderColor: "#c6c6d1",
    paddingBottom: 0,
    width: "100%",
    color: "grey"
  },
  nextBtnDiv: {
    marginTop: 10,
    width: "90%",
    alignSelf: "center"
  },
  nextBtn: {
    backgroundColor: "#0b8647",
    width: "100%",
    alignSelf: "center",
    padding: 13,
    marginBottom: 13
  },
  nextBtnText: {
    alignSelf: "center",
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  },

  nextBtnText3: {
    alignSelf: "center",
    fontSize: 18,
    // color: "white",
    fontWeight: "bold",
    color: "#0b8647"
  },
  nextBtnDiv2: {
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
});
