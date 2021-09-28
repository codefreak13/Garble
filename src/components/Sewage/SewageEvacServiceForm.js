import React from "react";
import { View, TouchableNativeFeedback } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ServiceForm from "../ServiceForm";
import Root from "../Utils/Root";

class SewageEvacuation extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Sewage Evacuation",
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
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
    return (
      <Root navigation={this.props.navigation}>
        <ServiceForm
          navigation={this.props.navigation}
          route="SewageEvacuationPay"
          info="Garble Sewage Services caters for your sewage evacuation. We
          charge a flat rate regardless of your location. Our rate is
          based on a single service."
          price={20000}
          ServiceDateNotRequired={false}
        />
      </Root>
    );
  }
}

export default SewageEvacuation;
