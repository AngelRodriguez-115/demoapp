import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView,AppRegistry } from "react-native";
import SplashScreen from "react-native-splash-screen";
import Container from './app/Components/Container/Container';

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class Informacion extends Component{
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.main}>
          <Container/>
          <Container/>
          <Container/>
          <Container/>
          <Container/>
          <Container/>
          <Container/>
          <Container/>
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

AppRegistry.registerComponent('Informacion', () => Informacion);