import React from "react";

import { Image, View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

import BackButton from '../../assets/icons/page-back-navigation-icon.png'

// get sample images
import JoeBruinPhoto from '../../assets/profile-photo-examples/joe-bruin.png'
import JosephineBruinPhoto from '../../assets/profile-photo-examples/josephine-bruin.png'

const styles = StyleSheet.create({
    friendsListContainer: {
        backgroundColor: '#FDF6EF',
        height: '100%'
    },
    friendIconContainer: {
        width: '100%',
        height: 125,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    friendIconPhoto: {
        width: 85,
        height: 85,
        borderRadius: 50,
        marginLeft: 30,
        borderColor: '#875F52',
        borderWidth: 1
    },
    friendName: {
        color: '#875F52',
        fontFamily: "Patrick Hand SC",
        fontSize: 30,
        letterSpacing: 0.9,
        textDecorationLine: 'underline',
        paddingLeft: 25
    },
    backFriendsButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },
    friendsButtonText: {
        color: '#67544C',
        fontFamily: "Patrick Hand SC",
        fontSize: 30,
        letterSpacing: 0.9,
    },
    backButtonIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    }
})

function NavigationHeader({navigation}: {navigation: any}) {
    return (<View>
        <TouchableOpacity style={styles.backFriendsButtonContainer}
        onPress={() => navigation?.goBack()}>
            <Image source={BackButton} style={styles.backButtonIcon} />   
            <Text style={styles.friendsButtonText}>Friends</Text>
        </TouchableOpacity>
    </View>)
}

export function FriendsList({navigation}: {navigation: any}){
    return (<SafeAreaView style={styles.friendsListContainer}>
        <NavigationHeader navigation={navigation} />
        <FriendIcon name={'Joe Bruin'} photoSource={JoeBruinPhoto} />
        <FriendIcon name={'Josephine Bruin'} photoSource={JosephineBruinPhoto} />
    </SafeAreaView>)
}

function FriendIcon({name, photoSource}: {name: string, photoSource: any}){
    return (<View style={styles.friendIconContainer}>
            <Image source={photoSource} style={styles.friendIconPhoto} resizeMode="cover"/>
        <View>
            <Text style={styles.friendName}>{name}</Text>
        </View>
    </View>)
}