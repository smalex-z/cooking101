import React from "react";
import { useAuth } from "../context/AuthContext";
import { Loading } from "../components/Loading";
import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";


export function Router() {
    const {currentUser, loading} = useAuth()

    console.log('entering router with user:', currentUser)
    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <NavigationContainer>
            {currentUser ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}