import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, ScrollView,AppRegistry} from 'react-native';

export default class Container extends Component {
  render() {
    return (
          <View style={styles.container}>
            <Text style={styles.label}>Código del Ticket: 123456789</Text>
            <Text style={styles.label}>Comentario: Comenatrio de ejem...</Text>
          </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 350,
    height: 150,
    borderRadius: 8,
    marginTop: 20,
  },

  label: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 20,
  },
});


AppRegistry.registerComponent('Container', () => Container);