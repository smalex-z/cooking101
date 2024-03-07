import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

// Mock data for recipe steps
const recipeSteps = [
  {
    stepNumber: 1,
    time: '20 minutes',
    instruction: 'Wash all ingredients and blend all ingredients together or mash them together in a bowl.',
    imageUrl: 'http://placekitten.com/200/200', // Replace with your actual image URL
  },
  {
    stepNumber: 2,
    time: '10 minutes',
    instruction: 'Wash all ingredients and blend all ingredients together or mash them together in a bowl.',
    imageUrl: 'http://placekitten.com/200/200', // Replace with your actual image URL
  },
  {
    stepNumber: 3,
    time: '10 minutes',
    instruction: 'Wash all ingredients and blend all ingredients together or mash them together in a bowl.',
    imageUrl: 'http://placekitten.com/200/200', // Replace with your actual image URL
  },
  // ... more steps
];

const RecipeScreen = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goToNextStep = () => {
    if (currentStepIndex < recipeSteps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const { stepNumber, time, instruction, imageUrl } = recipeSteps[currentStepIndex];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Preparation</Text>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.stepIndicator}>
        <Text style={styles.stepText}>Step {stepNumber}</Text>
      </View>
      <View style={styles.recipeCard}>
        <Text style={styles.recipeName}>Recipe Name</Text>
        <Text style={styles.recipeTime}>Time: {time}</Text>
        <Text style={styles.recipeInstruction}>{instruction}</Text>
        <Image style={styles.recipeImage} source={{ uri: imageUrl }} />
        {/* Placeholder for progress bar and cute encouraging character */}
      </View>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={goToPreviousStep} disabled={currentStepIndex === 0}>
          <Text style={styles.navText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNextStep} disabled={currentStepIndex === recipeSteps.length - 1}>
          <Text style={styles.navText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 8,
  },
  closeButtonText: {
    color: '#fff',
  },
  stepIndicator: {
    alignItems: 'center',
    marginVertical: 16,
  },
  stepText: {
    fontSize: 20,
  },
  recipeCard: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  recipeTime: {
    marginVertical: 8,
  },
  recipeInstruction: {
    marginBottom: 16,
  },
  recipeImage: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  placeholderText: {
    // Add styles for the progress bar placeholder
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
  },
  navText: {
    fontSize: 18,
  },
});

export default RecipeScreen;
