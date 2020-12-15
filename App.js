import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedTabBars from '@gorhom/animated-tabbar';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Screen1 = () => (
  <View style={Styles._mainContainer}>
    <Text>Screen 1</Text>
  </View>
)
const Screen2 = () => (
  <View style={Styles._mainContainer}>
    <Text>Screen 2</Text>
  </View>
)
const Screen3 = () => (
  <View style={Styles._mainContainer}>
    <Text>Screen 3</Text>
  </View>
)

const tabs = {
  screen1: { // < Screen name
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      //component: /* ICON COMPONENT */,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  screen2: { // < Screen name
    labelStyle: {
      color: '#1194AA',
    },
    icon: {
      //component: /* ICON COMPONENT */,
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  screen3: { // < Screen name
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      //component: /* ICON COMPONENT */,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
};

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName='screen1'
        tabBar={props => (
          <AnimatedTabBars tabs={tabs} {...props} />
        )}
      >
        <Tabs.Screen
          name='screen1'
          component={Screen1}
        />
        <Tabs.Screen
          name='screen2'
          component={Screen2}
        />
        <Tabs.Screen
          name='screen3'
          component={Screen3}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const Styles = StyleSheet.create({
  _mainContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
