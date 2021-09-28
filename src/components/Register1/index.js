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
  ImageBackground,
  Image
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Mutation } from "react-apollo";
import { ADD_CLIENT } from "../../helpers/mutations";
import * as yup from "yup";
import { Formik } from "formik";
import BG from "../../assets/splash.png";

class Register1 extends React.Component {
  static navigationOptions = { header: null };

  state = {
    surname: "",
    firstname: "",
    password: "",
    state: "",
    city: "",
    phone: "",
    email: "",
    address: "",
    loading: false,
    show: false,
    visible: false,
    showPassword: true
  };

  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        showPassword: !prevState.showPassword
      };
    });
  };

  render() {
    const validationSchema = yup.object().shape({
      firstname: yup.string().required(),
      surname: yup.string().required(),
      phone: yup
        .string()
        .min(11)
        .required(),
      email: yup
        .string()
        .email()
        .required(),
      password: yup
        .string()
        .min(8)
        .required(),
      address: yup.string().required(),
      city: yup.string().required(),
      state: yup.string().required()
    });

    const { loading } = this.state;
    return (
      <Mutation
        mutation={ADD_CLIENT}
        onError={console.warn}
        onCompleted={console.warn}
      >
        {addClient => (
          <Formik
            initialValues={{
              firstname: "",
              surname: "",
              password: "",
              state: "",
              city: "",
              phone: "",
              email: "",
              address: ""
            }}
            onSubmit={values => {
              this.setState({ loading: true });
              console.warn(values.phone);
              addClient({
                variables: {
                  firstname: values.firstname,
                  surname: values.surname,
                  phone: values.phone,
                  email: values.email.toLowerCase(),
                  password: values.password,
                  address: values.address,
                  city: values.city,
                  state: values.state
                }
              })
                .then(res => {
                  console.warn(res);
                  if (res) {
                    this.setState({ loading: false });
                    this.props.navigation.navigate("Email", {
                      userEmail: values.email
                    });
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
              handleSubmit,
              onValueChange
            }) => (
              <ImageBackground source={BG} style={styles.imageBackgroundStyle}>
                <KeyboardAvoidingView style={{ flex: 1 }}>
                  <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps={"handled"}
                  >
                    <View style={styles.main}>
                      <Text style={styles.garbleText}>Signup</Text>
                      <View style={styles.bar}>
                        <Text style={styles.titles}>Personal Information</Text>
                        <View style={styles.barItem}>
                          <TextInput
                            placeholderTextColor="rgb(0,255,157)"
                            onChangeText={handleChange("firstname")}
                            onBlur={handleBlur("firstname")}
                            name="firstname"
                            value={values.firstname}
                            style={styles.textInput}
                            placeholder="First name"
                          ></TextInput>
                          {touched.firstname && errors.firstname && (
                            <Text style={{ fontSize: 10, color: "red" }}>
                              {errors.firstname}
                            </Text>
                          )}
                        </View>
                        <View style={styles.barItem}>
                          <TextInput
                            placeholderTextColor="rgb(0,255,157)"
                            onChangeText={handleChange("surname")}
                            onBlur={handleBlur("surname")}
                            value={values.surname}
                            name="surname"
                            style={styles.textInput}
                            placeholder="Surname"
                          ></TextInput>
                          {touched.surname && errors.surname && (
                            <Text style={{ fontSize: 10, color: "red" }}>
                              {errors.surname}
                            </Text>
                          )}
                        </View>
                        <Text style={styles.titles}>Contact Information</Text>
                        <View style={styles.barItem}>
                          <TextInput
                            keyboardType="phone-pad"
                            placeholderTextColor="rgb(0,255,157)"
                            onChangeText={handleChange("phone")}
                            onBlur={handleBlur("phone")}
                            value={values.phone}
                            name="phone"
                            style={styles.textInput}
                            placeholder="Phone"
                          ></TextInput>
                          {touched.phone && errors.phone && (
                            <Text style={{ fontSize: 10, color: "red" }}>
                              {
                                "phone number is a required field and must be 11 characters"
                              }
                            </Text>
                          )}
                        </View>

                        <View style={styles.barItem}>
                          <TextInput
                            placeholderTextColor="rgb(0,255,157)"
                            onChangeText={handleChange("address")}
                            onBlur={handleBlur("address")}
                            value={values.address}
                            name="address"
                            style={styles.textInput}
                            placeholder="Address"
                          ></TextInput>
                          {touched.address && errors.address && (
                            <Text style={{ fontSize: 10, color: "red" }}>
                              {errors.address}
                            </Text>
                          )}
                        </View>
                        <View style={styles.barItem}>
                          <TextInput
                            placeholderTextColor="rgb(0,255,157)"
                            onChangeText={handleChange("city")}
                            onBlur={handleBlur("city")}
                            value={values.city}
                            name="city"
                            style={styles.textInput}
                            placeholder="City"
                          ></TextInput>
                          {touched.city && errors.city && (
                            <Text style={{ fontSize: 10, color: "red" }}>
                              {errors.city}
                            </Text>
                          )}
                        </View>
                        <View style={styles.barItem}>
                          <View style={styles.locationPicker}>
                            {!this.state.visible && (
                              <TouchableNativeFeedback
                                onPress={() => {
                                  this.setState({ visible: true });
                                }}
                              >
                                <View>
                                  <Text
                                    style={{
                                      color: "rgb(0,255,157)",
                                      padding: 10,
                                      marginLeft: -5
                                    }}
                                  >
                                    State
                                  </Text>
                                </View>
                              </TouchableNativeFeedback>
                            )}
                            {this.state.visible && (
                              <Picker
                                style={{
                                  color: "white",
                                  marginLeft: -5,
                                  marginBottom: -5
                                }}
                                onChangeText={handleChange("state")}
                                selectedValue={values.state}
                                onBlur={handleBlur("state")}
                                onValueChange={(itemValue, itemIndex) =>
                                  setFieldValue("state", itemValue)
                                }
                              >
                                <Picker.Item label="Select State" value="" />
                                <Picker.Item label="Abia" value="Abia" />
                                <Picker.Item label="Abuja" value="Abuja" />
                                <Picker.Item
                                  label="Akwa Ibom"
                                  value="Akwa Ibom"
                                  z
                                />
                                <Picker.Item label="Anambra" value="Anambra" />
                                <Picker.Item
                                  label="Cross River"
                                  value="Cross River"
                                />
                                <Picker.Item label="Delta" value="Delta" />
                                <Picker.Item label="Edo" value="Edo" />
                                <Picker.Item label="Enugu" value="Enugu" />
                                <Picker.Item label="Imo" value="Imo" />
                                <Picker.Item label="Kano" value="Kano" />
                                <Picker.Item label="Lagos" value="Lagos" />
                                <Picker.Item label="Ogun" value="Ogun" />
                                <Picker.Item label="Oyo" value="Oyo" />
                              </Picker>
                            )}
                          </View>
                        </View>
                        <Text style={styles.titles}>Login Details</Text>
                        <View style={styles.barItem}>
                          <TextInput
                            keyboardType="email-address"
                            placeholderTextColor="rgb(0,255,157)"
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            value={values.email}
                            name="email"
                            keyboardType="email-address"
                            style={styles.textInput}
                            placeholder="Email"
                          ></TextInput>
                          {touched.email && errors.email && (
                            <Text style={{ fontSize: 10, color: "red" }}>
                              {errors.email}
                            </Text>
                          )}
                        </View>
                        <View style={styles.barItem}>
                          <View style={styles.passwordMenu}>
                            <TextInput
                              secureTextEntry
                              placeholderTextColor="rgb(0,255,157)"
                              onChangeText={handleChange("password")}
                              onBlur={handleBlur("password")}
                              value={values.password}
                              name="password"
                              style={styles.textInput1}
                              secureTextEntry={this.state.showPassword}
                              placeholder="Password"
                            ></TextInput>
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
                      </View>
                      <View style={styles.nextBtnDiv}>
                        <TouchableNativeFeedback onPress={handleSubmit}>
                          <View style={styles.nextBtn}>
                            {loading ? (
                              <ActivityIndicator size="small" color="white" />
                            ) : (
                              <Text style={styles.nextBtnText}>SIGN UP</Text>
                            )}
                          </View>
                        </TouchableNativeFeedback>
                        <View style={styles.termsDiv}>
                          <Text style={styles.terms}>
                            By clicking next you accept the
                          </Text>
                          <TouchableNativeFeedback
                            onPress={() =>
                              this.props.navigation.navigate("RegisterTerms")
                            }
                          >
                            <View>
                              <Text style={styles.terms1}>
                                Terms and Conditions
                              </Text>
                            </View>
                          </TouchableNativeFeedback>
                        </View>
                      </View>
                      <View style={styles.alreadyhaveanaccount}>
                        <Text style={styles.opacity}>
                          Already have an account?
                        </Text>
                        <TouchableNativeFeedback
                          onPress={() =>
                            this.props.navigation.navigate("Login")
                          }
                        >
                          <View>
                            <Text style={styles.sign}>sign in</Text>
                          </View>
                        </TouchableNativeFeedback>
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

export default Register1;

const styles = StyleSheet.create({
  imageBackgroundStyle: {
    flex: 1
  },
  main: {
    alignSelf: "center",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    width: "85%"
  },
  garbleText: {
    fontSize: 35,
    color: "yellow",
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 10
  },
  title: {
    width: "90%",
    fontSize: 16,
    color: "white",
    padding: 10
  },
  titles: {
    fontSize: 18,
    color: "yellow",
    padding: 10
  },
  bar: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%"
  },
  barItem: {
    padding: 10
  },
  barText: {
    fontSize: 18
  },
  barText: {
    color: "#337044",
    fontWeight: "bold",
    fontSize: 18
  },
  passwordMenu: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderColor: "white",
    alignItems: "center"
  },
  textInput: {
    borderBottomWidth: 0.5,
    borderColor: "white",
    paddingBottom: 0,
    width: "100%",
    color: "white"
  },
  textInput1: {
    width: "70%",
    paddingBottom: 0,
    color: "white"
  },
  smsText: {
    alignSelf: "center"
  },
  locationPicker: {
    borderBottomWidth: 0.5,
    borderBottomColor: "white"
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
    borderRadius: 5
  },
  nextBtnText: {
    alignSelf: "center",
    fontSize: 22,
    color: "white",
    fontWeight: "bold"
  },
  sign: {
    fontWeight: "bold",
    color: "rgb(0,255,157)",
    fontSize: 14,
    alignSelf: "center",
    marginLeft: 5
  },
  alreadyhaveanaccount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 15,
    alignSelf: "center"
  },
  opacity: {
    textAlign: "center",
    color: "yellow",
    fontSize: 14
  },
  termsDiv: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 5
  },
  terms: {
    marginRight: 3,
    color: "white"
  },
  terms1: {
    color: "rgb(0,255,157)"
  }
});
