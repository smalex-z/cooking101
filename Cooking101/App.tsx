/**
 * Initial screen with bottom navigation bar
 * 
 * Logged in -> Dashboard
 * Not logged in -> Login
 */

import React, {useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import createProfileScreen from './components/createProf/createProf';
import homepage from './components/homepage/home';

import { AuthProvider } from './context/AuthContext';
import { Router } from './routes/Router';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const Tab = createBottomTabNavigator();

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
    <AuthProvider>
      <Router />
    </AuthProvider>
    </GestureHandlerRootView>
  )
};


export default App;