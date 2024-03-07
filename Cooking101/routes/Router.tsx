import React from "react";
import { useAuth } from "../context/AuthContext";
import { Loading } from "../components/Loading";
import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import uploadPage from '../components/uploadPage/upload';
import stepsPage from '../components/steps/steps';

export function Router() {
    const {currentUser, loading} = useAuth()
    const Stack = createNativeStackNavigator();

    console.log('entering router with user:', currentUser)
    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <NavigationContainer>
            {/* {currentUser ? <AppStack /> : <AuthStack />} */}
            <Stack.Navigator>
                <Stack.Screen name="Steps" component={stepsPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}