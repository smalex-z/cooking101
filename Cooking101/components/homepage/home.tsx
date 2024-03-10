import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/AuthContext';

// Mock component for the search bar
const SearchBar = () => (
  <TextInput
    placeholder="Search recipe..."
    style={{
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      margin: 10,
    }}
  />
);

// Define the type for the props that RecipeCard expects
interface RecipeCardProps {
  dishName: string;
  recipeId?: string, // isn't required for now because we're testing
  imageSource: any; // Change 'any' to the appropriate type of your image source
  navigation?: any // idk how to do this with typescript and i don't have time rn, also not required because of testing
}

// Mock component for a single cuisine card
const CuisineCard: React.FC<RecipeCardProps> = ({ dishName, imageSource }) => (
  <View style={{ alignItems: 'center', margin: 10 }}>
    <View style={{ aspectRatio: 5/3, width: 150, borderRadius: 10, overflow: 'hidden' }}>
      <Image
        source={imageSource}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      />
    </View>
    <Text style={{ marginTop: 5 }}>{dishName}</Text>
  </View>
);

// Mock component for a single recipe card
const RecipeCard: React.FC<RecipeCardProps> = ({ dishName, recipeId, imageSource, navigation }) => (
  <View 
    style={{ alignItems: 'center', margin: 10 }} 
    onTouchEnd={() =>
      navigation?.navigate('RecipeOverview', {
        recipeId: recipeId
      })
    }
  >
    <View style={{ aspectRatio: 3/5, width: 150, borderRadius: 10, overflow: 'hidden' }}>
      <Image
        source={imageSource}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      />
    </View>
    <Text style={{ marginTop: 5 }}>{dishName}</Text>
  </View>
);


// Main component for the recipe page
const RecipePage = ({navigation}: {navigation: any}) => { // TODO: clean up prop types
  // Placeholder data for recipes
  const recipes = [
    { key: '1', dishName: 'Dish Name' },
    { key: '2', dishName: 'Dish Name' },
    // Add more recipes here
  ];
  const {currentUser} = useAuth()

  return (
    <ScrollView>
      {/* For testing successful auth */}
      {/* currentUser shouldn't be undefined because that would cause context to render sign in page */}
      <Text>Hello, {currentUser!.email}</Text>
      <SearchBar />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <CuisineCard dishName="Cuisine Name" imageSource={require('../homepage/food1.jpg')} />
        <CuisineCard dishName="Cuisine Name" imageSource={require('../homepage/food1.jpg')} />
      </View>
      <Text style={{ margin: 10 }}>Recommended for you</Text>
      <ScrollView horizontal>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.key} dishName={recipe.dishName} imageSource={require('../homepage/food2.jpg')} navigation={navigation} />
        ))}
      </ScrollView>
      <Text style={{ margin: 10 }}>Trending Now</Text>
      <ScrollView horizontal>
        {recipes.map(recipe => (
          <RecipeCard key={recipe.key} dishName={recipe.dishName} imageSource={require('../homepage/food2.jpg')} />
        ))}
      </ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 10 }}>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation?.navigate('RecipeUpload')}>
          <Text>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RecipePage;
