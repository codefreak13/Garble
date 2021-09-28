import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BG from "../../assets/splash.png";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableNativeFeedback,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  ImageBackground
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import * as yup from "yup";
import { Formik } from "formik";
import { Mutation } from "react-apollo";
import { LOGIN } from "../../helpers/mutations";

export default class Signin extends React.Component {
  state = {
    loading: false,
    showPassword: true
  };

  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        showPassword: !prevState.showPassword
      };
    });
  };

  static navigationOptions = { header: null };

  render() {
    const validationSchema = yup.object().shape({
      email: yup.string().required(),
      password: yup.string().required()
    });
    const { loading } = this.state;
    return (
      <Mutation
        mutation={LOGIN}
        onError={console.warn}
        onCompleted={console.warn}
      >
        {loginUser => (
          <Formik
            initialValues={{
              email: "chibuikepatrick2@gmail.com",
              password: "password1@"
            }}
            onSubmit={values => {
              // console.warn(values);
              this.setState({ loading: true });
              loginUser({
                variables: {
                  email: values.email.toLowerCase(),
                  password: values.password
                }
              })
                .then(async res => {
                  const userId = res.data.loginUser.token;

                  this.setState({ loading: false });
                  await AsyncStorage.setItem("token", userId);

                  this.props.navigation.navigate("Home");
                })
                .catch(err => {
                  this.setState({ loading: false });
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
              <ImageBackground source={BG} style={styles.imageBackgroundStyle}>
                <KeyboardAvoidingView style={{ flex: 1 }}>
                  <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps={"handled"}
                  >
                    <View style={styles.container}>
                      <Text style={styles.head}>Sign in</Text>
                      <View
                        style={{
                          flex: 1,
                          marginTop: 65,
                          flexDirection: "column",
                          justifyContent: "flex-start"
                        }}
                      >
                        <View>
                          <TextInput
                            keyboardType="email-address"
                            style={styles.input}
                            placeholderTextColor="rgb(0,255,157)"
                            value={values.email}
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            placeholder="Email address"
                            name="email"
                            keyboardType="email-address"
                          />
                          {touched.email && errors.email && (
                            <Text style={{ fontSize: 10, color: "red" }}>
                              {errors.email}
                            </Text>
                          )}
                          <View style={styles.passwordMenu}>
                            <TextInput
                              secureTextEntry
                              style={styles.input1}
                              placeholderTextColor="#rgb(0,255,157)"
                              value={values.password}
                              onChangeText={handleChange("password")}
                              onBlur={handleBlur("password")}
                              placeholder="Password"
                              name="password"
                              secureTextEntry={this.state.showPassword}
                            />
                            <TouchableNativeFeedback
                              onPress={this.toggleSwitch}
                            >
                              <View>
                                {this.state.showPassword === true ? (
                                  <FontAwesome
                                    name="eye-slash"
                                    size={20}
                                    color="rgb(0,255,157)"
                                  />
                                ) : (
                                  <FontAwesome
                                    name="eye"
                                    size={20}
                                    color="rgb(0,255,157)"
                                  />
                                )}
                              </View>
                            </TouchableNativeFeedback>
                          </View>
                          {touched.password && errors.password && (
                            <Text style={{ fontSize: 10, color: "red" }}>
                              {errors.password}
                            </Text>
                          )}
                        </View>
                        <View style={{ marginTop: 85 }}>
                          <TouchableNativeFeedback onPress={handleSubmit}>
                            <View style={styles.signupbox}>
                              {loading ? (
                                <ActivityIndicator size="small" color="white" />
                              ) : (
                                <Text
                                  style={styles.signuptext}
                                  onPress={handleSubmit}
                                >
                                  SIGN IN
                                </Text>
                              )}
                            </View>
                          </TouchableNativeFeedback>
                          <View style={styles.alreadyhaveanaccount}>
                            <Text style={styles.opacity}>First time here?</Text>
                            <TouchableNativeFeedback
                              onPress={() =>
                                this.props.navigation.navigate("Register")
                              }
                            >
                              <View>
                                <Text style={styles.sign}>Register</Text>
                              </View>
                            </TouchableNativeFeedback>
                          </View>

                          <TouchableNativeFeedback
                            onPress={() =>
                              this.props.navigation.navigate("ForgotPassword")
                            }
                          >
                            <View
                              style={{ alignSelf: "center", marginTop: "10%" }}
                            >
                              <Text style={styles.sign}>Forgot password?</Text>
                            </View>
                          </TouchableNativeFeedback>
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </KeyboardAvoidingView>
              </ImageBackground>
            )}
          </Formik>
        )}
      </Mutation>
    );
  }
}

const styles = StyleSheet.create({
  imageBackgroundStyle: {
    flex: 1
  },
  container: {
    flex: 1,
    alignSelf: "center",
    width: "75%"
  },
  passwordMenu: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderColor: "white",
    alignItems: "center",
    marginTop: 35
  },
  input1: {
    paddingBottom: -10,
    width: "70%",
    color: "white"
  },
  input: {
    marginTop: 25,
    width: "100%",
    borderBottomWidth: 0.5,
    borderBottomColor: "white",
    paddingBottom: -10,
    color: "white"
  },
  head: {
    color: "yellow",
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 35
  },
  sign: {
    fontWeight: "bold",
    color: "rgb(0,255,157)",
    fontSize: 14,
    paddingLeft: 5
  },
  signupbox: {
    backgroundColor: "#0b8647",
    height: 55,
    width: "100%",
    alignSelf: "center",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  signuptext: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    fontFamily: "Montserrat, Semi Bold",
    alignSelf: "center"
  },
  alreadyhaveanaccount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  opacity: {
    textAlign: "center",
    color: "yellow",
    fontSize: 14
  }
});
