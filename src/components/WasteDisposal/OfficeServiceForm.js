import React from "react";
import { View, TouchableNativeFeedback } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ServiceForm from "../ServiceForm";
import Root from "../Utils/Root";

class OfficeWaste extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Office Waste Collection",
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
              marginLeft: 20,
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
          route="WasteOfficePay"
          info="Garble caters to your office Waste Collection and Disposal. On subscription, Garble waste collection associates tracks down client's address to deliver waste management paraphernalia and discusses amongst others, the best days suitable for client's triweekly service"
          price={15000}
          ServiceDateNotRequired={true}
        />
      </Root>
    );
  }
}

export default OfficeWaste;
