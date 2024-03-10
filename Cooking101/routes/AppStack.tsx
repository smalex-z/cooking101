import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home  from '../components/homepage/home'
import { RecipeOverview } from "../components/RecipeOverview/RecipeOverview";
import RecipeForm from "../components/uploadPage/upload";
import stepsPage from '../components/steps/steps';

const Stack = createStackNavigator()

// navigation stack for authenticated users
export function AppStack() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="homepage" component={Home} options={{headerShown: false}}/> 
          <Stack.Screen name='RecipeOverview' component={RecipeOverview} options={{headerShown: false}} />
          <Stack.Screen name="RecipeUpload" component={RecipeForm} options={{headerShown: false}} />
          <Stack.Screen name="Steps" component={stepsPage} />
        </Stack.Navigator>
    )
}