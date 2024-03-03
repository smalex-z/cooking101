// loading page to be displayed while auth state loads
import React from 'react'
import { StyleSheet, Text, View } from "react-native";

export function Loading() {
    return (
        <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text>Loading :)</Text>
        </View>
    )
}