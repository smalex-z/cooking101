import React, { useState } from 'react';
import { View, TextInput, Button, Image, ScrollView, StyleSheet, Text } from 'react-native';

const RecipeForm = () => {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [ingredients, setIngredients] = useState(['']);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleIngredientChange = (text: string, index: number) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = text;
    setIngredients(newIngredients);
  };

  return (
    <ScrollView style={styles.container}>
      <View ><Text style={styles.header}>What Would you Like To Upload?</Text></View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Title of Recipe"
          value={recipeTitle}
          onChangeText={setRecipeTitle}
          style={styles.textInput}
        />
      </View>
      
      <View><Text style={styles.header}>Image</Text></View>
      <View style={styles.buttonContainer}>
        {/* Image Picker would go here */}
        <Button title="Attach an image" onPress={() => {}} />
      </View>
      
      <View><Text style={styles.header}>Ingredients</Text></View>
      {ingredients.map((ingredient, index) => (
        <View key={index} style={styles.inputContainer}>
          <TextInput
            placeholder={`Ingredient ${index + 1}`}
            value={ingredient}
            onChangeText={(text) => handleIngredientChange(text, index)}
            style={styles.textInput}
          />
        </View>
      ))}
      
      <View style={styles.buttonContainer}>
      <Button title="Add More" onPress={handleAddIngredient} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Please enter any additional details about your recipe."
          multiline
          style={[styles.textInput, styles.additionalDetails]}
        />
      </View>
      
      <View style = {styles.buttonBox}>
      <View style={styles.buttonContainer}>
        <Button title="Save for later" onPress={() => {}} />
      </View>
      <View style={styles.buttonContainer}>
      <Button title="Next Page" onPress={() => {}} />
      </View>
      </View>
    </ScrollView>
  );
};

const ProgressBar = ({ currentStep, totalSteps }) => {
  const stepsArray = Array.from({ length: totalSteps }, (_, index) => index + 1);

  return (
    <View style={styles.progressContainer}>
      {stepsArray.map(step => (
        <View
          key={step}
          style={[
            styles.circle,
            currentStep >= step ? styles.filledCircle : styles.unfilledCircle,
          ]}
        />
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  
  inputContainer: {
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  imageContainer: {
    marginBottom: 20,
  },
  additionalDetails: {
    height: 100,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#E5E5E5', // Adjust the color to match the button background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    margin: 10,
  },
  buttonBox:{
    flexDirection: 'row',
  },
  header:{
    fontWeight: 'bold',
    fontSize: 21,
  }
});

export default RecipeForm;