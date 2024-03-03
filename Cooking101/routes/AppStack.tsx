import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home  from '../components/homepage/home'
import { RecipeOverview } from "../components/RecipeOverview/RecipeOverview";

const Stack = createStackNavigator()

// navigation stack for authenticated users
export function AppStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="homepage" component={Home} options={{headerShown: false}}/> 
          <Stack.Screen name='RecipeOverview' component={RecipeOverview} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}