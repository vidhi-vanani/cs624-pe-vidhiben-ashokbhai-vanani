import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import { colors } from '../theme';

class AddCountry extends React.Component {
  state = {
    country: '',
    currency: '',
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  submit = () => {
    const { country, currency } = this.state;
    if (country === '' || currency === '') {
      alert('Please complete the form');
      return;
    }
    const newCountry = {
      country,
      currency,
      id: uuid.v4(),
      currencies: [],
    };
    this.props.addCountry(newCountry); // Lift state up
    this.setState(
      {
        country: '',
        currency: '',
      },
      () => {
        this.props.navigation.navigate('Countries');
      }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Add Country</Text>
        <TextInput
          placeholder="Country name"
          onChangeText={(val) => this.onChangeText('country', val)}
          style={styles.input}
          value={this.state.country}
        />
        <TextInput
          placeholder="Currency used"
          onChangeText={(val) => this.onChangeText('currency', val)}
          style={styles.input}
          value={this.state.currency}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Country</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 36,
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50,
    borderRadius: 4,
  },
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AddCountry;
