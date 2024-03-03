import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from '../components/createProf/createProf'

const Stack = createStackNavigator()

// navigation stack for unauthenticated users
export function AuthStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="createProfileScreen" component={SignUp} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}