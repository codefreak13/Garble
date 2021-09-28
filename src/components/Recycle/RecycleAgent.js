import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import Root from '../Utils/Root';
import {Mutation, Query} from "react-apollo"
import {GET_RECYCLE_MEMBER} from "../QueryAndMutation"

class RecycleAgent extends React.Component {
  static navigationOptions = {header: null};
  state = {
    house_type: [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
    ],
    land_plot: [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
    ],
    fumigation_type: ['0', '1', '2', '3', '4', '5', '6'],
    selectedStartDate: null,
    visible6: false,
    isChecked1: false,
    isChecked2: false,
    isChecked3: false,
    isChecked4: false,
    isChecked5: false,
    isChecked6: false,
    isChecked7: false,
    isChecked8: false,
    visible1: false,
    visible2: false,
  };

  toggle1 = () => {
    this.setState(prevState => {
      return {
        visible1: !prevState.visible1,
      };
    });
  };

  toggle2 = () => {
    this.setState(prevState => {
      return {
        visible2: !prevState.visible2,
      };
    });
  };

  toggle6 = () => {
    this.setState(prevState => {
      return {
        visible6: !prevState.visible6,
      };
    });
  };

  onDateChange = date =>
    this.setState(prevState => {
      return {
        selectedStartDate: date,
        visible6: !prevState.visible6,
      };
    });

  render() {
    const startDate = this.state.selectedStartDate
      ? this.state.selectedStartDate.toString().slice(0, 16)
      : '';
    return (
      <Query query={GET_RECYCLE_MEMBER} >
        {({loading, error, data}) => {
          if(loading) return <Text>Loading...</Text>
          if(error) return <Text>Error...</Text>
          const response = data.getRecycleMember
          console.log(response, 'great123')
          return (
      <Root navigation={this.props.navigation}>
        <KeyboardAvoidingView style={{flex: 1}}>
          <View style={styles.headerMain}>
            <View style={styles.header}>
              <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 18, color: 'white'}}>
                  Recycle Agent
                </Text>
                <Text style={styles.headerTitle}>{response.name + " " + response.surname}</Text>
              </View>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: 'white',
                }}></View>
            </View>
          </View>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.main}>
              <View style={{width: '90%', alignSelf: 'center'}}>
                <View style={{backgroundColor: '#0b8647'}}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      color: 'white',
                      fontSize: 22,
                      padding: 10,
                    }}>
                    Plastic Waste
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#edefee',
                    padding: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 18, color: '#353535'}}>
                      Quantity Amassed
                    </Text>
                    <TextInput
                      style={{
                        marginTop: 10,
                        backgroundColor: 'white',
                        borderColor: 'white',
                        width: '40%',
                        paddingLeft: 5,
                      }}
                      editable={false}
                      selectTextOnFocus={false}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 18, color: '#353535'}}>
                      Payable Amount
                    </Text>
                    <TextInput
                      style={{
                        marginTop: 10,
                        backgroundColor: 'white',
                        borderColor: 'white',
                        width: '40%',
                        paddingLeft: 5,
                      }}
                      editable={false}
                      selectTextOnFocus={false}
                    />
                  </View>
                </View>
              </View>
              <View style={{width: '90%', alignSelf: 'center'}}>
                <View style={{backgroundColor: '#0b8647'}}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      color: 'white',
                      fontSize: 22,
                      padding: 10,
                    }}>
                    Nylon Waste
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#edefee',
                    padding: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 18, color: '#353535'}}>
                      Quantity Amassed
                    </Text>
                    <TextInput
                      style={{
                        marginTop: 10,
                        backgroundColor: 'white',
                        borderColor: 'white',
                        width: '40%',
                        paddingLeft: 5,
                      }}
                      editable={false}
                      selectTextOnFocus={false}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 18, color: '#353535'}}>
                      Payable Amount
                    </Text>
                    <TextInput
                      style={{
                        marginTop: 10,
                        backgroundColor: 'white',
                        borderColor: 'white',
                        width: '40%',
                        paddingLeft: 5,
                      }}
                      editable={false}
                      selectTextOnFocus={false}
                    />
                  </View>
                </View>
              </View>
              <View style={{padding: 20}}>
                <Text style={styles.offer}>Terms of Service</Text>
                <Text style={{color: 'grey', fontSize: 18}}>
                  Clients are to note that most fumigations chemicals are toxic
                  and there is need to stay off fumigated properties for a
                  period of time as advised by agents Clients are to note that
                  most fumigations chemicals are toxic and there is need to stay
                  off fumigated properties for a period of time as advised there
                  is need to stay off fumigated properties for a period of time
                  as advised by agents Clients are to note that most fumigations
                  chemicals are toxic and there is need to stay off fumigated
                  properties for a period of time as advi agents
                </Text>
              </View>
              <TouchableNativeFeedback>
                <View style={styles.subscribe}>
                  <Text style={styles.subscribeTitle}>Withdraw</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Root>
       )
      }}
    </Query>
    );
  }
}

export default RecycleAgent;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 30,
  },
  headerMain: {
    width: '100%',
    backgroundColor: '#0b8647',
    alignItems: 'center',
  },
  header: {
    padding: 20,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 22,
    marginTop: -5,
    color: 'white',
    fontWeight: 'bold',
  },
  offer: {
    fontSize: 25,
    color: '#0b8647',
    fontWeight: 'bold',
  },
  subscribe: {
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: '#0b8647',
    fontSize: 20,
    width: '85%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  subscribeTitle: {
    fontSize: 20,
    padding: 15,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
});
