import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import { createBottomTabNavigator,createMaterialTopTabNavigator,
  createMaterialBottomTabNavigator,createTopTabNavigator } from 'react-navigation-tabs';
import Instagram from './screeens/in';
import Facebook from './screeens/fb';

export default function App() {
  return (
    <View style={styles.container}>
        <Appcontainer/>
    </View>
  );
}

var switchContainer = createBottomTabNavigator({
  InstaScreen : {screen:Instagram},
  FaceScreen : {screen:Facebook},
})
const Appcontainer = createAppContainer(switchContainer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
