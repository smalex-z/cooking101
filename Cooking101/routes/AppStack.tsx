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
import ViewProfile from "../components/Profile/ProfileScreen";
import { RecipeOverviewSoup } from "../components/RecipeOverview/RecipeOverviewSoup";
import { RecipeOverviewCurry } from "../components/RecipeOverview/RecipeOverviewCurry";
import { RecipeOverviewStew } from "../components/RecipeOverview/RecipeOverviewStew";
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


          <Tab.Screen name="Profile" component={ViewProfile} options={{
            headerShown: false,
            tabBarLabel: "Profile",
            tabBarIcon: ({size, focused, color}) => <Image source={ChefIcon} style={{ width: 42, height: 42 }} />,
            }} />

          <Tab.Screen name="FriendsList" component={FriendsList} options={{
            headerShown: false,
            tabBarLabel: "Friends",
            tabBarButton: () => null
          }} />


          {/* not shown in bottom tabs */}
          <Tab.Screen name="Steps" component={stepsPage} options={{headerShown: false, tabBarButton: () => null}} />
          <Tab.Screen name='RecipeOverview' component={RecipeOverview} options={{headerShown: false, tabBarButton: () => null}}/>
          {/* hard coded recipe overview screens for demo */}
          <Tab.Screen name='RecipeOverviewSoup' component={RecipeOverviewSoup} options={{headerShown: false, tabBarButton: () => null}}/>
          <Tab.Screen name='RecipeOverviewCurry' component={RecipeOverviewCurry} options={{headerShown: false, tabBarButton: () => null}}/>
          <Tab.Screen name='RecipeOverviewStew' component={RecipeOverviewStew} options={{headerShown: false, tabBarButton: () => null}}/>

        </Tab.Navigator>
    )
}