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
import homepage from './homepage/home';

import auth from '@react-native-firebase/auth'


const Tab = createBottomTabNavigator();

const App = () => {

  const Stack = createNativeStackNavigator();

  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user)
    if (initializing) setInitializing(false)
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [])
  

  return (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name="createProfileScreen" component={createProfileScreen} options={{headerShown: false}} />
			<Stack.Screen name="homepage" component={homepage} options={{headerShown: false}}/>
		</Stack.Navigator>
	</NavigationContainer>
  )
};

const styles = StyleSheet.create({
  
});


export default App;