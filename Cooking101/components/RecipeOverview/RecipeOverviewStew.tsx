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
});

export function RecipeOverviewStew({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const testRecipe = {
    title: 'Classic Beef Stew',
    author: 'Cooking 101 Team',
    image: 'HELP!', // aaggh
    shortDescription: 'A warm and hearty meal for any occasion!',
    ingredients: [
      {
        text: 'Ingredient 1: Amount, Description',
        id: 1,
      },
      {
        text: 'Ingredient 2: Amount, Substitute',
        id: 2,
      },
      {
        text: 'Ingredient 3: Amount, Details',
        id: 3,
      },
    ],
    additionalDetails: `Beef stew is always versatile, add any extra veggies or ingredients if preferred.`,
  };

  return (
    <SafeAreaView style={styles.overviewContainer}>
      <ScrollView style={styles.overviewContainer}>
        <View>
          <View style={styles.recipeImageContainer}>
            {
              <Image
                source={require('../../assets/foodImages/Stew.png')}
                style={styles.recipeImage}
                resizeMode="cover"
              />
            }
          </View>
          <View style={styles.recipeDetailsTextContainer}>
            <Text style={styles.RecipeTitle}>{testRecipe.title}</Text>
            <TouchableOpacity />
            <View style={styles.authorshipContainer}>
              <Text style={styles.recipeByText}>Recipe By: </Text>
              <Text style={styles.authorText}>{testRecipe.author}</Text>
            </View>
            <Text style={styles.shortDescription}>
              Short Description: {testRecipe.shortDescription}
            </Text>
            <View style={styles.ingredientsContainer}>
              <Text style={styles.ingredientsHeaderText}>Ingredients</Text>
              <FlatList
                data={testRecipe.ingredients}
                renderItem={({item}) => <IngredientItem text={item.text} />}
                keyExtractor={item => `${item.id}`}
              />
            </View>
            <TouchableOpacity
              style={styles.startButton}
              onPress={() => navigation?.navigate('Steps')}>
              <Text style={styles.startButtonText}>Start Cooking!</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.notesHeaderText}>Notes:</Text>
              <View style={styles.notesContainer}>
                <Text style={styles.additionalDetails}>
                  {`${testRecipe.additionalDetails}`}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
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
