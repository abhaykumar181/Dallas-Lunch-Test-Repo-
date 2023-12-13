import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Register from "../screens/Register";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Stack = createNativeStackNavigator();
// const Tab = createMaterialBottomTabNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator
      activeColor="#000"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#ffffff', height: 60, alignContent:"center", alignItems: "center" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="house" color={color} size={20} />
          ), 
          // tabBarLabel: false
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Register}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="magnifying-glass" color={color} size={20} />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={Welcome}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="pen" color={color} size={20} />
          ),
          tabBarLabel: '', 
        }}
      />
      <Tab.Screen
        name="Tab4"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="check" color={color} size={20} />
          ),
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
