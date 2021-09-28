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
import * as yup from "yup";
import { Formik } from "formik";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { RESET_PASSWORD, RESEND_OTP } from "./QueryAndMutation";
import ShowMessage, { type } from "./toster/ShowMessage";
import { Mutation } from "react-apollo";
import AsyncStorage from "@react-native-community/async-storage";

class ForgotPassword extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Reset Passowrd",
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
    password: "",
    email: "",
    showPassword: true,
    showPassword1: true
  };

  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        showPassword: !prevState.showPassword
      };
    });
  };

  toggleSwitch1 = () => {
    this.setState(prevState => {
      return {
        showPassword1: !prevState.showPassword1
      };
    });
  };

  async componentDidMount() {
    const otpEmail = await AsyncStorage.getItem("otp");
    this.setState({ email: otpEmail });
  }

  render() {
    const validationSchema = yup.object().shape({
      otp: yup.string().required("Please provide the OTP sent to your email."),
      newPass: yup.string().required("Provide a new password"),
      confirm: yup.string().required("Confirm your password!")
    });
    return (
      <Mutation mutation={RESET_PASSWORD}>
        {(resetPassword, { loading }) => (
          <Formik
            initialValues={{
              otp: "",
              newPass: "",
              confirm: ""
            }}
            onSubmit={values => {
              resetPassword({
                variables: {
                  code: values.otp,
                  newPassword: values.newPass,
                  confirmPassword: values.confirm
                }
              })
                .then(async res => {
                  if (res) {
                    ShowMessage(type.DONE, res.data.resetPassword);
                    await AsyncStorage.removeItem("otp");
                    this.props.navigation.navigate("Login");
                  }
                })
                .catch(err => {
                  // this.setState({ loading: false });
                  return err;
                });
            }}
            validationSchema={validationSchema}
          >
            {({
              values,
              handleChange,
              errors,
              setFieldValue,
              setFieldTouched,
              touched,
              isValid,
              handleBlur,
              handleSubmit
            }) => (
              <KeyboardAvoidingView style={{ flex: 1 }}>
                <ScrollView
                  contentContainerStyle={{
                    flexGrow: 1,
                    padding: 20
                  }}
                  keyboardShouldPersistTaps={"handled"}
                >
                  <View style={styles.barItem}>
                    <Text style={{ color: "#0b8647", fontSize: 17 }}> OTP</Text>
                    <TextInput
                      name="otp"
                      style={styles.textInput1}
                      placeholderTextColor="rgb(0,255,157)"
                      value={values.otp}
                      onChangeText={handleChange("otp")}
                    />
                    {touched.otp && errors.otp && (
                      <Text style={{ fontSize: 10, color: "red" }}>
                        {errors.otp}
                      </Text>
                    )}
                  </View>
                  <View style={styles.barItem}>
                    <Text style={{ color: "#0b8647", fontSize: 17 }}>
                      New Password
                    </Text>
                    <View style={styles.passwordMenu}>
                      <TextInput
                        style={styles.textInput}
                        placeholderTextColor="rgb(0,255,157)"
                        secureTextEntry={this.state.showPassword}
                        name="newPass"
                        value={values.newPass}
                        onChangeText={handleChange("newPass")}
                      />
                      <TouchableNativeFeedback
                        onPress={this.toggleSwitch}
                        background={TouchableNativeFeedback.Ripple("white")}
                      >
                        <View>
                          {this.state.showPassword === true ? (
                            <FontAwesome
                              name="eye-slash"
                              size={20}
                              color="#0b8647"
                            />
                          ) : (
                            <FontAwesome name="eye" size={20} color="#0b8647" />
                          )}
                        </View>
                      </TouchableNativeFeedback>
                    </View>
                    {touched.newPass && errors.newPass && (
                      <Text style={{ fontSize: 10, color: "red" }}>
                        {errors.newPass}
                      </Text>
                    )}
                  </View>
                  <View style={styles.barItem}>
                    <Text style={{ color: "#0b8647", fontSize: 17 }}>
                      Confirm Password
                    </Text>
                    <View style={styles.passwordMenu}>
                      <TextInput
                        style={styles.textInput}
                        placeholderTextColor="rgb(0,255,157)"
                        secureTextEntry={this.state.showPassword1}
                        name="confirm"
                        value={values.confirm}
                        onChangeText={handleChange("confirm")}
                      />
                      <TouchableNativeFeedback
                        onPress={this.toggleSwitch1}
                        background={TouchableNativeFeedback.Ripple("white")}
                      >
                        <View>
                          {this.state.showPassword1 === true ? (
                            <FontAwesome
                              name="eye-slash"
                              size={20}
                              color="#0b8647"
                            />
                          ) : (
                            <FontAwesome name="eye" size={20} color="#0b8647" />
                          )}
                        </View>
                      </TouchableNativeFeedback>
                    </View>
                    {touched.confirm && errors.confirm && (
                      <Text style={{ fontSize: 10, color: "red" }}>
                        {errors.confirm}
                      </Text>
                    )}
                  </View>
                  <View style={styles.nextBtnDiv}>
                    <TouchableNativeFeedback onPress={handleSubmit}>
                      <View style={styles.nextBtn}>
                        {loading ? (
                          <ActivityIndicator size="small" color="white" />
                        ) : (
                          <Text style={styles.nextBtnText}>RESET PASSWORD</Text>
                        )}
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                  <Mutation mutation={RESEND_OTP}>
                    {(resendOTP, { loading }) => (
                      <View style={styles.nextBtnDiv2}>
                        <TouchableNativeFeedback
                          onPress={async () => {
                            await resendOTP({
                              variables: {
                                email: this.state.email
                              }
                            })
                              .then(res => {
                                if (res) {
                                  ShowMessage(type.DONE, res.data.resendOTP);
                                }
                              })
                              .catch(err => {
                                return err;
                              });
                          }}
                        >
                          <View style={styles.nextBtn2}>
                            {loading ? (
                              <ActivityIndicator size="small" color="white" />
                            ) : (
                              <Text style={styles.nextBtnText}>RESEND OTP</Text>
                            )}
                          </View>
                        </TouchableNativeFeedback>
                      </View>
                    )}
                  </Mutation>
                </ScrollView>
              </KeyboardAvoidingView>
            )}
          </Formik>
        )}
      </Mutation>
    );
  }
}

export default ForgotPassword;

const styles = StyleSheet.create({
  text: {
    color: "#A5A5A5",
    fontSize: 13,
    marginTop: 15,
    marginBottom: 10
  },
  barItem: {
    padding: 10,
    marginTop: 10
  },
  textInput: {
    paddingBottom: 0,
    color: "grey",
    width: "80%"
  },
  textInput1: {
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
  nextBtnDiv2: {
    marginTop: 10,
    width: "40%",
    alignSelf: "center"
  },
  nextBtn2: {
    backgroundColor: "#0b8647",
    width: "100%",
    alignSelf: "center",
    marginBottom: 13,
    padding: 9
  },
  nextBtn: {
    backgroundColor: "#0b8647",
    width: "100%",
    alignSelf: "center",
    padding: 13,
    marginBottom: 13,
    marginTop: 10
  },
  nextBtnText: {
    alignSelf: "center",
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  },
  passwordMenu: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderColor: "white",
    borderBottomWidth: 0.5,
    borderColor: "#c6c6d1",
    alignItems: "center"
  }
});
