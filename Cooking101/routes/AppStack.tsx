import React from "react";
import Home  from '../components/homepage/home'
import { RecipeOverview } from "../components/RecipeOverview/RecipeOverview";
import RecipeForm from "../components/uploadPage/upload";
import stepsPage from '../components/steps/steps';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Image } from 'react-native'

// import icons
import HomeIcon from '../assets/icons/home.png'
import HeartIcon from '../assets/icons/heart.png'
import AddIcon from '../assets/icons/add.png'
import ChefIcon from '../assets/icons/chef.png'
import { FriendsList } from "../components/FriendsList/FriendsList";

const Tab = createBottomTabNavigator()

// navigation stack for authenticated users
export function AppStack() {
    return (
        <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontFamily: "PatrickHandSC-Regular",
            fontSize: 15
          }
        }}>
          {/* Shown in bottom tabs */}
          <Tab.Screen name="homepage" component={Home} 
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({size, focused, color}) => <Image source={HomeIcon} style={{ width: 35, height: 35 }} />,

            }}/> 
          <Tab.Screen name="RecipeUpload" component={RecipeForm} options={{
            headerShown: false,
            tabBarLabel: "Upload",
            tabBarIcon: ({size, focused, color}) => <Image source={AddIcon} style={{ width: 42, height: 42 }} />,
            }} />
          <Tab.Screen name="FriendsList" component={FriendsList} options={{
            headerShown: false,
            tabBarLabel: "Friends",
          }} />

          {/* not shown in bottom tabs */}
          <Tab.Screen name="Steps" component={stepsPage} options={{headerShown: false, tabBarButton: () => null}} />
          <Tab.Screen name='RecipeOverview' component={RecipeOverview} options={{headerShown: false, tabBarButton: () => null}}/>

        </Tab.Navigator>
    )
}