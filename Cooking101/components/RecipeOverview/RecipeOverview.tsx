/* page structure (top down)
* top menu: back button, save (no functionality), share (no functionality)
* recipe image 
* recipe info:
*   name
*   author
*   description
* ingredients w/expand button
* start button
* recipe notes

More notes
- page starts with a fetch to backend to gather details like images and stuff


- start dev with hard-coded recipe object
*/
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';

// get button image
import BackButton from '../../assets/icons/page-back-navigation-icon.png'

import GnocchiImage from '../../assets/foodImages/Gnocchi.png'

const styles = StyleSheet.create({
  overviewContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FDF6EF',
  },
  recipeImageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: 'lightgrey',
  },
  recipeImage: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
    marginTop: 10,
    padding: 0,
  },
  RecipeTitle: {
    color: '#875F52',
    fontFamily: 'PatrickHandSC-Regular', // fix by importing this font
    fontSize: 34,
    fontStyle: 'normal',
    fontWeight: '400',
    marginBottom: 15,
  },
  authorshipContainer: {
    display: 'flex',
    fontFamily: 'PatrickHandSC-Regular',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  recipeByText: {
    color: '#67544C',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.75,
    fontFamily: 'PatrickHandSC-Regular',
  },
  authorText: {
    color: '#67A3EA',
    fontSize: 23,
    fontWeight: '400',
    letterSpacing: 0.75,
    textDecorationLine: 'underline',
    fontFamily: 'PatrickHandSC-Regular',
  },
  recipeDetailsTextContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  shortDescription: {
    color: '#875F52',
    fontFamily: 'PatrickHandSC-Regular',
    fontSize: 23,
    fontWeight: '400',
  },
  additionalDetails: {
    fontFamily: 'PatrickHandSC-Regular',
    color: '#67544C',
    fontSize: 25,
    fontWeight: '400',
  },
  ingredientsContainer: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#FCEED4',
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 12,
    marginTop: 20,
    marginBottom: 15,
  },
  ingredientsHeaderText: {
    color: '#875F52',
    fontFamily: 'PatrickHandSC-Regular',
    fontSize: 33,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 1.05,
  },
  ingredientItemText: {
    color: '#67544C',
    fontFamily: 'PatrickHandSC-Regular',
    fontSize: 23,
    fontWeight: '400',
  },
  startButton: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#E0F8E7',
    width: '100%',
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  startButtonText: {
    color: '#875F52',
    fontFamily: 'PatrickHandSC-Regular',
    fontSize: 35,
    fontWeight: '400',
    letterSpacing: 1.2,
  },
  notesHeaderText: {
    color: '#67544C',
    fontFamily: 'PatrickHandSC-Regular',
    fontSize: 23,
    fontWeight: '400',
    letterSpacing: 0.75,
  },
  notesContainer: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#E1F6FF',
    padding: 15,
  },
    notesText: {
        color: '#67544C',
        fontFamily: 'Patrick Hand SC',
        fontSize: 22,
        fontWeight: '400',
        lineHeight: 25 /* 100% */,
        letterSpacing: 0.75,
    },
        // stolen from friends list
    backButtonContainer: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15
    },
    backButtonText: {
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
});

export function RecipeOverview({route, navigation}: {route: any, navigation: any}) {

        const testRecipe: any = {
            title: "Butter + Parm Gnocchi",
            author: 'Cooking 101 Team',
            image: "HELP!", // aaggh
            shortDescription: "An easy 3-ingredient dinner!",
            ingredients: [
                {
                    text: "Ingredient 1: Amount, Description",
                    id: 1
                },
                {
                    text: "Ingredient 2: Amount, Substitute",
                    id: 2
                },
                {
                    text: "Ingredient 3: Amount, Details",
                    id: 3
                },
            ],
            additionalDetails: `Don't overcook the gnocchi! It's not as good when it's super mushy.`
        }

    return (
    <ScrollView style={styles.overviewContainer}>
        <View >
            <NavigationHeader navigation={navigation}/>
            {/* <View style={styles.recipeImageContainer}></View> */}
            <Image
                source={GnocchiImage}
                style={styles.recipeImage}
            />

            <View style={styles.recipeDetailsTextContainer}>
                <Text style={styles.RecipeTitle}>{testRecipe.title}</Text>
                <TouchableOpacity />
                <View style={styles.authorshipContainer}>
                    <Text style={styles.recipeByText}>Recipe By: </Text>
                    <Text onPress={() => navigation?.navigate('Profile')} style={styles.authorText}>{testRecipe.author}</Text>
                </View>
                <Text style={styles.shortDescription}>Short Description: {testRecipe.shortDescription}</Text>
                <View style={styles.ingredientsContainer}>
                    <Text style={styles.ingredientsHeaderText}>Ingredients</Text>
                    <IngredientItem text={testRecipe.ingredients[0].text} />
                    <IngredientItem text={testRecipe.ingredients[1].text} />
                    <IngredientItem text={testRecipe.ingredients[2].text} />
                </View>
                <TouchableOpacity style={styles.startButton} onPress={()=>navigation?.navigate("Steps")}>
                    <Text style={styles.startButtonText}>Start Cooking!</Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.notesHeaderText}>Notes:</Text>
                    <View style={styles.notesContainer}>
                        <Text style={styles.notesText}>
                            {`${testRecipe.additionalDetails}`}
                        </Text>
                    </View>
                </View>
            </View>

          </View>
    </ScrollView>
    )
}

function NavigationHeader({navigation}: {navigation: any}) {
    return (<View>
        <TouchableOpacity style={styles.backButtonContainer}
        onPress={() => navigation?.goBack()}>
            <Image source={BackButton} style={styles.backButtonIcon} />   
            <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
    </View>)
}

interface IngredientItemProps {
  text: string;
}

function IngredientItem({text}: IngredientItemProps) {
  return (
    <View>
      <Text style={styles.ingredientItemText}>{`\u2022 ${text}`}</Text>
    </View>
  );
  }
