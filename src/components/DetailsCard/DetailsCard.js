import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { date4, date6 } from "../Utils/DateFormat";

const DetailsCard = props => {
  const { params } = props.navigation.state;
  const splitCamelCaseToString = word => {
    return word.split(/(?=[A-Z])/).join(" ");
  };
  const splitWordAtDash = word => {
    return word.split("_").join(" ");
  };
  params._id && delete params._id;
  params.isActive && delete params.isActive;
  params.storeId && delete params.storeId;
  params.userId && delete params.userId;

  // Fumigation Settings
  params.isChecked_inter_bedBug &&
    (params.Interior_Bedbug = params.isChecked_inter_bedBug);
  params.isChecked_inter_mosquito &&
    (params.Interior_Mosquito = params.isChecked_inter_mosquito),
    params.isChecked_inter_termite &&
      (params.Interior_Termite = params.isChecked_inter_termite),
    params.isChecked_inter_rats &&
      (params.Interior_rats = params.isChecked_inter_rats),
    params.isChecked_exter_mosquito &&
      (params.Exterior_Mosquito = params.isChecked_exter_mosquito),
    params.isChecked_exter_termite &&
      (params.Exterior_Termite = params.isChecked_exter_termite),
    params.isChecked_exter_rats &&
      (params.Exterior_Rats = params.isChecked_exter_rats),
    params.isChecked_exter_snakes &&
      (params.Exterior_Snakes = params.isChecked_exter_snakes),
    params.isChecked_inter_bedBug && delete params.isChecked_inter_bedBug;
  params.isChecked_inter_termite && delete params.isChecked_inter_termite;
  params.isChecked_inter_rats && delete params.isChecked_inter_rats;
  params.isChecked_exter_mosquito && delete params.isChecked_exter_mosquito;
  params.isChecked_exter_termite && delete params.isChecked_exter_termite;
  params.isChecked_exter_rats && delete params.isChecked_exter_rats;
  params.isChecked_exter_snakes && delete params.isChecked_exter_snakes;
  params.isChecked_inter_bedBug && delete params.isChecked_inter_bedBug;
  params.__typename && delete params.__typename;
  // Date Settings
  params.selectedStartDate
    ? (params.selectedStartDate = date4(params.selectedStartDate))
    : null;

  const ItemDetails = Object.keys(params).map(data =>
    params[data] ? (
      <View style={styles.detailsView}>
        <Text style={styles.detailsKey}>{splitWordAtDash(data)}: </Text>
        <Text>{params[data]}</Text>
      </View>
    ) : null
  );
  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <Text style={styles.title}>Summary</Text>
      </View>
      <ScrollView style={styles.text}>{ItemDetails}</ScrollView>
      {params.reason ? (
        <View style={styles.reasonView}>
          <Text style={styles.reasonText}>Reason: </Text>
          <Text>{params.reason}</Text>
        </View>
      ) : null}
    </View>
  );
};

DetailsCard.navigationOptions = {
  headerTintColor: "#fff",
  headerStyle: { backgroundColor: "#0b8647" }
};

export default DetailsCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#eee",
    flex: 1
  },
  one: {
    backgroundColor: "#0b8647",
    height: 170,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  },
  text: {
    padding: 20,
    paddingBottom: 30,
    elevation: 2,
    height: 20,
    backgroundColor: "white",
    width: "90%",
    position: "relative",
    top: -40,
    borderRadius: 10
  },
  detailsView: {
    flexDirection: "row",
    marginBottom: 25,
    justifyContent: "space-between"
  },
  detailsKey: {
    fontWeight: "700",
    fontSize: 16,
    textTransform: "capitalize"
  },
  reasonView: {
    height: "15%",
    padding: 20,
    alignSelf: "flex-start"
  },
  reasonText: { fontWeight: "700", color: "#2d3976" }
});
