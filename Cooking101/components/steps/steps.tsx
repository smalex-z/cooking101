import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// Mock data for recipe steps
const recipeSteps = [
  {
    stepNumber: 1,
    time: '20 minutes',
    instruction: 'Wash all ingredients and blend all ingredients together or mash them together in a bowl.',
    imageUrl: 'https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x500.jpg', 
  },
  {
    stepNumber: 2,
    time: '10 minutes',
    instruction: 'Wash all ingredients and blend all ingredients together or mash them together in a bowl.',
    imageUrl: 'https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x500.jpg',
  },
  {
    stepNumber: 3,
    time: '30 minutes',
    instruction: 'Wash all ingredients and blend all ingredients together or mash them together in a bowl.',
    imageUrl: 'https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x500.jpg', 
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
      <View style={styles.navigation}>
        <TouchableOpacity 
          onPress={goToPreviousStep} 
          disabled={currentStepIndex === 0}
          style={styles.arrowButton}
        >
          <Icon name="chevron-left" size={30} color={currentStepIndex === 0 ? 'gray' : 'black'} />
        </TouchableOpacity>
        <View style={styles.stepIndicator}>
          <Text style={styles.stepText}>Step {stepNumber}</Text>
        </View>
        <TouchableOpacity 
          onPress={goToNextStep} 
          disabled={currentStepIndex === recipeSteps.length - 1}
          style={styles.arrowButton}
        >
          <Icon name="chevron-right" size={30} color={currentStepIndex === recipeSteps.length - 1 ? 'gray' : 'black'} />
        </TouchableOpacity>
      </View>
      <View style={styles.recipeCard}>
        <Text style={styles.recipeName}>Recipe Name</Text>
        <Text style={styles.recipeTime}>Time: {time}</Text>
        <Text style={styles.recipeInstruction}>{instruction}</Text>
        <Image style={styles.recipeImage} source={{ uri: imageUrl }} />
        {/* Placeholder for progress bar and cute encouraging character */}
      </View>
      <SafeAreaView style={styles.container}>

      <ProgressBar currentStep={currentStepIndex + 1} totalSteps={recipeSteps.length} />
    
    </SafeAreaView>
    </SafeAreaView>
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
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold', 
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
    fontFamily: 'YourFont-Family',
  },
  recipeCard: {
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 16,
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
  arrowButton: {
    padding: 10, 
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20, // Adjust the vertical spacing of the progress bar
  },
  circle: {
    width: 20, // Circle size
    height: 20,
    borderRadius: 10, // Half the width to make it round
    marginHorizontal: 5, // Spacing between circles
  },
  filledCircle: {
    backgroundColor: 'black', // Color for filled steps
  },
  unfilledCircle: {
    backgroundColor: 'lightgrey', // Color for unfilled steps
  },
});

export default RecipeScreen;
