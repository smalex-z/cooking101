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

const leftArrowUrl = 'https://cdn-icons-png.flaticon.com/512/54/54517.png'; // Replace with your actual URL
const rightArrowUrl = 'https://cdn.icon-icons.com/icons2/2036/PNG/512/right_arrow_circle_icon_124233.png';

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
        {/* <TouchableOpacity 
          onPress={goToPreviousStep} 
          disabled={currentStepIndex === 0}
          style={styles.arrowButton}
        >
          <Icon name="chevron-left" size={30} color={currentStepIndex === 0 ? 'gray' : 'black'} />
        </TouchableOpacity> */}
        <TouchableOpacity 
          onPress={goToPreviousStep} 
          disabled={currentStepIndex === 0}
          style={styles.arrowButton}
        >
          <Image 
            source={{ uri: leftArrowUrl }} 
            style={[
              styles.arrowImage, 
              { tintColor: currentStepIndex === 0 ? 'gray' : 'black' }
            ]}
            resizeMode="contain" // This ensures the image fits within the button
          />
        </TouchableOpacity>
        <View style={styles.stepIndicator}>
          <Text style={styles.stepText}>Step {stepNumber}</Text>
        </View>
        {/* <TouchableOpacity 
          onPress={goToNextStep} 
          disabled={currentStepIndex === recipeSteps.length - 1}
          style={styles.arrowButton}
        >
          <Icon name="chevron-right" size={30} color={currentStepIndex === recipeSteps.length - 1 ? 'gray' : 'black'} />
        </TouchableOpacity> */}
        <TouchableOpacity 
          onPress={goToNextStep} 
          disabled={currentStepIndex === recipeSteps.length - 1}
          style={styles.arrowButton}
        >
          <Image 
            source={{ uri: rightArrowUrl }} 
            style={[
              styles.arrowImage, 
              { tintColor: currentStepIndex === recipeSteps.length - 1 ? 'gray' : 'black' }
            ]}
            resizeMode="contain" // This ensures the image fits within the button
          />
        </TouchableOpacity>
      </View>
      <View style={styles.recipeCard}>
        <Text style={styles.recipeName}>Penna Marinara</Text>
        <Text style={styles.recipeTime}>Time: {time}</Text>
        <Text style={styles.recipeInstruction}>{instruction}</Text>
        <Image style={styles.recipeImage} source={{ uri: imageUrl }} />
      </View>
      <SafeAreaView style={styles.container}>

      <ProgressBar currentStep={currentStepIndex + 1} totalSteps={recipeSteps.length} />
    
    </SafeAreaView>
    </SafeAreaView>
  );
};
// navigation.setOptions({ headerShown: false });
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
    backgroundColor: '#F5E7DA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold', 
    fontFamily: "PatrickHandSC-Regular",
  },
  closeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 8,
  },
  closeButtonText: {
    fontFamily: "PatrickHandSC-Regular",
    fontWeight: 'bold', 
    fontSize: 20,
  },
  stepIndicator: {
    alignItems: 'center',
    marginVertical: 16,
  },
  stepText: {
    fontSize: 30,
    fontFamily: "PatrickHandSC-Regular",
  },
  recipeCard: {
    marginHorizontal: 14,
    padding: 16,
    borderRadius: 10, 
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    borderWidth: 1, 
    borderColor: 'black', 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  recipeName: {
    fontSize: 28, // Increase font size to match the image
    fontWeight: '600', // Adjust weight to be semi-bold
    fontFamily: "PatrickHandSC-Regular",
    marginTop: 8, // Add a top margin to give space from the top edge
  },
  recipeTime: {
    marginVertical: 8,
    fontSize: 20,
    fontFamily: "PatrickHandSC-Regular",
  },
  recipeInstruction: {
    marginBottom: 16,
    fontFamily: "PatrickHandSC-Regular",
    fontSize: 22, // Increase font size to match the image
    textAlign: 'center', // Center the text
  },
  recipeImage: {
    width: 100,
    height: 100,
    marginBottom: 16,
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
    width: 30, // Circle size
    height: 20,
    borderRadius: 10, // Half the width to make it round
    marginHorizontal: 5, // Spacing between circles
    shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  },
  filledCircle: {
    backgroundColor: 'black', // Color for filled steps
  },
  unfilledCircle: {
    backgroundColor: 'lightgrey', // Color for unfilled steps
  },
  arrowImage: {
    width: 30, // Set the width of the arrow image
    height: 30, // Set the height of the arrow image
    // Add other styles as necessary
  },

});

export default RecipeScreen;
