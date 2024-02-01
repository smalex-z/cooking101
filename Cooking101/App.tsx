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
import createProfileScreen from './createProf/createProf';



const Tab = createBottomTabNavigator();

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name="createProfileScreen" component={createProfileScreen} options={{headerShown: false}} />
		</Stack.Navigator>
	</NavigationContainer>
  )
};

const styles = StyleSheet.create({
  
});


export default App;