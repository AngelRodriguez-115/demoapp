import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, ScrollView,AppRegistry} from 'react-native';
import Container from './app/Components/Container/Container';

export default class Comentarios extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.main}>
            <Container/>
      </View>
    </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },

});

AppRegistry.registerComponent('Comentarios', () => Comentarios);