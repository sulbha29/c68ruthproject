import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IgScreen from './screens/ig'
import FbScreen from './screens/fb'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
    return (
    
      <AppContainer />

    );
  }
}


const TabNavigator = createBottomTabNavigator({
  Instagram:{screen:IgScreen}, 
  Facebook:{screen:FbScreen}
})
const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
