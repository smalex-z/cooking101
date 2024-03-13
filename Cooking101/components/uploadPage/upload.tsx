import React, { useState } from 'react';
import { View, TextInput, Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

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
      <View ><Text style={styles.header}>What's the name of your Recipe?</Text></View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Title of Recipe"
          value={recipeTitle}
          onChangeText={setRecipeTitle}
          style={styles.textInput}
        />
      </View>

      <View><Text style={styles.header}>Short Description</Text></View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Please enter a short description of your recipe."
          multiline
          style={[styles.textInput, styles.additionalDetails]}
        />
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
      <TouchableOpacity onPress={handleAddIngredient}>
        <Text style = {styles.buttonText}>Add More</Text>
      </TouchableOpacity>
      </View>
      <View><Text style={styles.header}>Additional Notes:</Text></View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Please enter any additional details about your recipe."
          multiline
          style={[styles.textInput, styles.additionalDetails]}
        />
      </View>

      <View><Text style={styles.header}>Tags</Text></View>
      <View style={styles.inputContainer}>
  <TextInput
    placeholder="Enter tags"
    // other necessary props
    style={styles.tagsInput}
  />
</View>
      
      <View style={styles.buttonContainer}>
  <TouchableOpacity onPress={() => {}} style={styles.attachButton}>
    <View style={styles.attachButtonText}>
    <Image
        source={{ uri: 'https://thumbs.dreamstime.com/b/simple-drawing-camera-icon-vector-doodle-style-background-fun-camera-icon-vector-doodle-style-112393816.jpg' }}
        style={styles.cameraIcon}
      />
    </View>
  </TouchableOpacity>
</View>
      
      <View style={styles.buttonBox}>
  <View style={[styles.buttonContainer, styles.deleteButton]}>
    <TouchableOpacity onPress={() => {}}>
      <Text style={styles.buttonText}>Delete</Text>
    </TouchableOpacity>
  </View>
  <View style={[styles.buttonContainer, styles.stepsButton]}>
    <TouchableOpacity onPress={() => {}}>
      <Text style={styles.buttonText}>Steps ></Text>
    </TouchableOpacity>
  </View>
</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(253, 246, 239, 1)', 
  },
  
  inputContainer: {
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000', // a solid border color
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#FFF', // a white background for input
    fontSize: 16, // adjusted for better legibility
    fontFamily: "PatrickHandSC-Regular",
  },
  additionalDetails: {
    height: 100, // you might want to adjust this based on your needs
    textAlignVertical: 'top', // for multiline text input
  },
  buttonContainer: {
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FFF',
    marginBottom: 20, // Add some space below the button
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -15, // Adjust to extend the buttons full width
  },
  header:{
    fontWeight: 'bold',
    fontSize: 24, // slightly larger font size for headers
    marginBottom: 15, // space after the header
    color: '#000', // assuming you want black for the text color
    fontFamily: "PatrickHandSC-Regular",
  },
  buttonText:{
    fontFamily: "PatrickHandSC-Regular",
    fontSize: 18
  },
  deleteButton: {
    backgroundColor: '#FFD1DC', // Adjust color if needed
    flex: 1, // take up as much space as possible
    marginRight: 10, // add right margin for spacing between the buttons
  },
  stepsButton: {
    backgroundColor: '#ADD8E6', // Adjust color if needed
    flex: 1, // take up as much space as possible
    marginLeft: 10, // add left margin for spacing between the buttons
  },
  attachButton: {
    // ... (other button styles if needed)
    // backgroundColor: '#CCCCCC', // Replace with the hex code of the color from your picture
  },
  attachButtonText: {
    // ... (existing button text styles)
    flexDirection: 'row',
    alignItems: 'center',
  },
  cameraIcon: {
    width: 50, // Adjust width as needed
    height: 50, // Adjust height as needed
    marginRight: 10, // Space between icon and text
  },

  tagsInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
    fontFamily: "PatrickHandSC-Regular",
    backgroundColor: 'white',
    // For a sketch-like border, you might need an image or custom drawing
  },

  
});

export default RecipeForm;