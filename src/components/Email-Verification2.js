import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TextInput,
  TouchableNativeFeedback,
  ActivityIndicator
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as yup from "yup";
import { Formik } from "formik";
import { Mutation } from "react-apollo";
import { VERIFY_USER } from "../helpers/mutations";

export default class EmailVerfication2 extends React.Component {
  state = {
    loading: false
  };
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
    const validationSchema = yup.object().shape({
      verificationCode: yup.string().required()
    });

    const email = this.props.navigation.getParam("userEmail", "Email of user");
    const { loading } = this.state;
    return (
      <Mutation
        mutation={VERIFY_USER}
        onError={console.warn}
        onCompleted={console.warn}
      >
        {verifyUser => (
          <Formik
            initialValues={{ verificationCode: "" }}
            onSubmit={values => {
              // console.error('values')
              this.setState({ loading: true });
              verifyUser({
                variables: {
                  verificationCode: values.verificationCode
                }
              })
                .then(res => {
                  console.warn(res);
                  if (res) {
                    this.setState({ loading: false });
                    this.props.navigation.navigate("Modal");
                  }
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
              <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps={"handled"}
              >
                <View style={styles.general}>
                  <View style={styles.bodycover}>
                    <View>
                      <View style={styles.email}>
                        <Text style={styles.emails}>Email Verification</Text>
                      </View>
                      <View style={styles.body}>
                        <View style={styles.alignicons}>
                          <View style={styles.circle1direction}>
                            <View style={styles.outtercircle}>
                              <Text style={styles.innercircle}>1</Text>
                            </View>
                          </View>
                          <View style={styles.outtercircle}>
                            <Text style={styles.innercircle}>2</Text>
                          </View>
                          <View style={styles.circle3direction}>
                            <View style={styles.outtercircle}>
                              <Text style={styles.innercircle}>3</Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.secondDiv} />
                        <View style={styles.thirdDiv} />
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                          <Text
                            style={{
                              fontFamily: "Montserrat, Medium",
                              color: "#0b8647",
                              fontSize: 14
                            }}
                          >
                            Please enter the 6 digit code sent
                          </Text>
                          <Text style={styles.shop}>to {email}</Text>
                        </View>
                        <View style={styles.input}>
                          <TextInput
                            style={styles.inputcode}
                            placeholderTextColor="#0b8647"
                            value={values.verificationCode}
                            onChangeText={handleChange("verificationCode")}
                            onBlur={handleBlur("verificationCode")}
                            placeholder="Enter code"
                          />
                          {touched.verificationCode &&
                            errors.verificationCode && (
                              <Text style={{ fontSize: 10, color: "red" }}>
                                {errors.verificationCode}
                              </Text>
                            )}
                        </View>
                      </View>
                      <View style={styles.resend}>
                        <Text style={styles.resendcode}>
                          {/* RESEND CODE */}
                        </Text>
                        <TouchableNativeFeedback onPress={handleSubmit}>
                          <View style={styles.touches}>
                            {loading === true ? (
                              <ActivityIndicator
                                size="small"
                                color="white"
                                style={{ padding: 15 }}
                              />
                            ) : (
                              <Text style={styles.confirm}>Confirm</Text>
                            )}
                          </View>
                        </TouchableNativeFeedback>
                        <Text style={styles.email2}>{/* CHANGE EMAIL */}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            )}
          </Formik>
        )}
      </Mutation>
    );
  }
}

const styles = StyleSheet.create({
  general: {
    flex: 1
  },
  bodycover: {
    backgroundColor: "#ffffff",
    marginTop: 10,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  email: {
    marginTop: 40,
    color: "#0b8647",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "montserrat Bold",
    marginBottom: 31,
    flexDirection: "column",
    alignSelf: "center",
    width: 233
  },
  emails: {
    color: "#0b8647",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "montserrat Bold"
  },
  body: {
    backgroundColor: "#ffffff",
    alignItems: "center"
  },
  alignicons: {
    flexDirection: "row"
  },
  circle1direction: {
    marginRight: 72
  },
  circle3direction: {
    marginLeft: 72
  },
  outtercircle: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderRadius: 50,
    padding: 4,
    borderWidth: 0.5,
    borderColor: "#0b8647",
    width: 30,
    height: 30,
    alignItems: "center"
  },
  innercircle: {
    borderRadius: 50,
    width: 20,
    height: 20,
    backgroundColor: "#0b8647",
    color: "#ffffff",
    textAlign: "center"
  },
  input: {
    flexDirection: "column",
    alignItems: "center"
  },
  inputcode: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
    marginLeft: 3,
    marginRight: 3,
    color: "#030303",
    opacity: 0.3,
    backgroundColor: "#E4E5E8",
    width: 150,
    fontWeight: "bold"
  },
  resendcode: {
    fontSize: 14,
    color: "#0b8647",
    marginTop: 50
  },
  touches: {
    marginTop: 19,
    backgroundColor: "#0b8647",
    borderRadius: 50,
    width: "75%",
    padding: 10
  },
  confirm: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    padding: 15
  },
  email2: {
    color: "#0b8647",
    marginBottom: 83,
    marginTop: 31
  },
  shop: {
    fontFamily: "Montserrat, Medium",
    color: "#0b8647",
    paddingTop: 5,
    fontSize: 14
  },
  secondDiv: {
    height: 5,
    width: 90,
    backgroundColor: "#0b8647",
    position: "relative",
    right: 50,
    bottom: 17
  },
  thirdDiv: {
    height: 5,
    width: 90,
    backgroundColor: "#0b8647",
    position: "relative",
    left: 50,
    bottom: 22
  },
  resend: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});
