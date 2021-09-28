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
import * as yup from "yup";
import { Formik } from "formik";
import { Mutation } from "react-apollo";
import { CHANGE_PASSWORD } from "../helpers/mutations";

class ResetPassword extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Change Password",
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

  render() {
    const validationSchema = yup.object().shape({
      oldPassword: yup.string().required("Provide old password"),
      newPassword: yup.string().required("Provide new password")
    });
    return (
      <Mutation
        mutation={CHANGE_PASSWORD}
        onError={console.warn}
        onCompleted={console.warn}
      >
        {(changePassword, { loading }) => (
          <Formik
            initialValues={{
              oldPassword: "",
              newPassword: ""
            }}
            onSubmit={values => {
              changePassword({
                variables: {
                  newPassword: values.newPassword
                }
              })
                .then(res => {
                  if (res.data.changePassword) {
                    this.props.navigation.navigate("Profile");
                  }
                })
                .catch(err => {
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
                    flexGrow: 1
                  }}
                  keyboardShouldPersistTaps={"handled"}
                >
                  <View style={styles.main}>
                    <View style={styles.bar}>
                      <View style={styles.barItem}>
                        <Text style={{ color: "#0b8647", fontSize: 17 }}>
                          {" "}
                          Current Password
                        </Text>
                        <View style={styles.passwordMenu}>
                          <TextInput
                            name="oldPassword"
                            style={styles.textInput}
                            placeholderTextColor="rgb(0,255,157)"
                            value={values.oldPassword}
                            onChangeText={handleChange("oldPassword")}
                            onBlur={handleBlur("oldPassword")}
                            secureTextEntry={this.state.showPassword}
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
                                <FontAwesome
                                  name="eye"
                                  size={20}
                                  color="#0b8647"
                                />
                              )}
                            </View>
                          </TouchableNativeFeedback>
                        </View>
                      </View>
                      {touched.oldPassword && errors.oldPassword && (
                        <Text
                          style={{
                            fontSize: 10,
                            color: "red",
                            textAlign: "center"
                          }}
                        >
                          {errors.oldPassword}
                        </Text>
                      )}
                      <View style={styles.barItem}>
                        <Text style={{ color: "#0b8647", fontSize: 17 }}>
                          {" "}
                          New Password
                        </Text>
                        <View style={styles.passwordMenu}>
                          <TextInput
                            name="newPassword"
                            style={styles.textInput}
                            placeholderTextColor="rgb(0,255,157)"
                            value={values.newPassword}
                            onChangeText={handleChange("newPassword")}
                            onBlur={handleBlur("newPassword")}
                            secureTextEntry={this.state.showPassword1}
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
                                <FontAwesome
                                  name="eye"
                                  size={20}
                                  color="#0b8647"
                                />
                              )}
                            </View>
                          </TouchableNativeFeedback>
                        </View>
                      </View>
                      {touched.newPassword && errors.newPassword && (
                        <Text
                          style={{
                            fontSize: 10,
                            color: "red",
                            textAlign: "center"
                          }}
                        >
                          {errors.newPassword}
                        </Text>
                      )}
                    </View>
                    <View style={styles.nextBtnDiv}>
                      <TouchableNativeFeedback onPress={handleSubmit}>
                        <View style={styles.nextBtn}>
                          {loading ? (
                            <ActivityIndicator size="small" color="white" />
                          ) : (
                            <Text style={styles.nextBtnText}>Reset </Text>
                          )}
                        </View>
                      </TouchableNativeFeedback>
                    </View>
                  </View>
                </ScrollView>
              </KeyboardAvoidingView>
            )}
          </Formik>
        )}
      </Mutation>
    );
  }
}

export default ResetPassword;

const styles = StyleSheet.create({
  main: {
    alignSelf: "center",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    width: "95%",
    justifyContent: "center"
  },
  bar: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "95%",
    alignSelf: "center"
  },
  barItem: {
    padding: 10
  },
  textInput: {
    paddingBottom: 0,
    width: "80%",
    color: "grey"
  },
  nextBtnDiv: {
    marginTop: 10,
    width: "100%"
  },
  nextBtn: {
    backgroundColor: "#0b8647",
    width: "100%",
    alignSelf: "center",
    padding: 15,
    borderRadius: 5,
    marginBottom: 13
  },
  nextBtnText: {
    alignSelf: "center",
    fontSize: 22,
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
