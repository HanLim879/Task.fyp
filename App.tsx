import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Todos } from "./src/screen/Todos";
import { Reminder } from "./src/screen/Reminder";
import { Calendar } from "./src/screen/Calendar";
import { Location } from "./src/screen/Location";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
function App(): JSX.Element {


  return (
    <NavigationContainer>

      <Tab.Navigator>
        <Tab.Screen name="home" component={Todos}  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
        <Tab.Screen name="calendar" component={Calendar} options={{
          tabBarLabel: 'Add Task',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}/>
        {/* <Tab.Screen name="Reminder" component={Reminder} options={{
          tabBarLabel: 'Reminder',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="checkbox-marked-outline" color={color} size={26} />
          ),
        }}/> */}
        <Tab.Screen name="ProfileScreen" component={Location} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}/>
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
  textColor: {
    color: 'blue',
  },
  fontStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  margin: {
    margin: 10,
    padding: 10,
  },
});

export default App;
