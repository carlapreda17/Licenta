import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SignUp from "./src/pages/SignUp";
import Login from "./src/pages/Login";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import ForgetPassword from "./src/pages/ForgetPassword";
import HomePage from "./src/pages/HomePage";

const Stack = createStackNavigator();
export default function App() {
    const s=require('./styles')
  return (
      <SafeAreaView style={s.root}>
      <NavigationContainer>
            <Stack.Navigator  screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: s.root.backgroundColor },
                flex: 1
            }}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name={"HomePage"} component={HomePage}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
                <Stack.Screen name="ForgetPassword" component={ForgetPassword}/>
            </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
  );
}

