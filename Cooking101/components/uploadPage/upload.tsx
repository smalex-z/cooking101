import React, { useState } from 'react';
import { View, TextInput, Button, Image, ScrollView, StyleSheet } from 'react-native';

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
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Title of Recipe"
          value={recipeTitle}
          onChangeText={setRecipeTitle}
          style={styles.textInput}
        />
      </View>
      
      <View style={styles.imageContainer}>
        {/* Image Picker would go here */}
        <Button title="Attach an image" onPress={() => {}} />
      </View>
      
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
      
      <Button title="Add More" onPress={handleAddIngredient} />
      
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Please enter any additional details about your recipe."
          multiline
          style={[styles.textInput, styles.additionalDetails]}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="Save for later" onPress={() => {}} />
        <Button title="Next Page" onPress={() => {}} />
      </View>
    </ScrollView>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default RecipeForm;