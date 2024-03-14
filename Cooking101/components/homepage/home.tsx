import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {useAuth} from '../../context/AuthContext';
import {RecipeOverview} from '../RecipeOverview/RecipeOverview';

const SearchBar = () => (
  <TextInput
    placeholder="Search recipe..."
    style={{
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      margin: 10,
      fontFamily: 'PatrickHandSC-Regular',
      fontSize: 20,
    }}
  />
);

interface RecipeCardProps {
  dishName: string;
  recipeId?: string;
  imageSource: any;
  navigation?: any;
}

const CuisineCard: React.FC<RecipeCardProps> = ({dishName, imageSource}) => (
  <View style={{alignItems: 'center', margin: 5, marginTop: 75}}>
    <TouchableOpacity
      style={{alignItems: 'center', position: 'relative'}}
      onPress={() => {
        // Define onPress behavior here
      }}>
      <View style={{alignItems: 'center', position: 'relative'}}>
        <View
          style={{
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: -10,
            marginTop: -10,
          }}>
          {/* Border Image */}
          <Image
            source={require('./CuisineFrame.png')}
            style={{
              position: 'absolute',
              width: '70%', // Ensure the border image covers the container size
              height: '70%',
              resizeMode: 'cover', // Adjust as needed to ensure border fits well
            }}
          />

          {/* Cuisine Icon */}
          <Image
            source={imageSource}
            style={{
              width: '50%', // Adjust size as needed to ensure it fits within the border
              height: '50%', // Adjust size as needed to ensure it fits within the border
              resizeMode: 'cover',
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
    {/* Cuisine Name Text */}
    <Text
      style={{
        marginTop: 5,
        fontFamily: 'PatrickHandSC-Regular',
        fontSize: 25,
      }}>
      {dishName}
    </Text>
  </View>
);
const RecipeCard: React.FC<RecipeCardProps> = ({
  dishName,
  recipeId,
  imageSource,
  navigation,
}) => {
  const windowDimensions = useWindowDimensions();

  const imageTopSpace = 6; 

  return (
    <TouchableOpacity
      onPress={() => {
        if (dishName === 'Butter + Parm Gnocchi') {
          navigation?.navigate('RecipeOverview', {recipeId: recipeId});
        } else if (dishName === 'Tofu Soup') {
          navigation?.navigate('RecipeOverviewSoup', {recipeId: recipeId});
        } else if (dishName === 'Japanese Curry') {
          navigation?.navigate('RecipeOverviewCurry', {recipeId: recipeId});
        } else if (dishName === 'Classic Beef Stew') {
          navigation?.navigate('RecipeOverviewStew', {recipeId: recipeId});
        }
      }}
      style={{alignItems: 'center', margin: 10}}>
      <View
        style={{
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginBottom: 5,
          marginHorizontal: 8,
        }}>
        <Image
          source={require('./RecipeFrame.png')}
          style={{
            position: 'absolute',
            width: windowDimensions.height * 0.15 + 20, 
            height: windowDimensions.height * 0.15 * (220 / 167) + 60,
            resizeMode: 'cover',
          }}
        />
        <View
          style={{
            marginTop: imageTopSpace,
            aspectRatio: 167 / 220,
            width: windowDimensions.height * 0.15, 
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <Image
            source={imageSource}
            style={{width: '100%', height: '100%'}}
            resizeMode="cover"
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 5, 
          width: windowDimensions.height * 0.15, 
        }}>
        <Text
          style={{
            fontFamily: 'PatrickHandSC-Regular',
            fontSize: 16,
            textAlign: 'center',
          }}
          numberOfLines={2}>
          {dishName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const RecipePage = ({navigation}: {navigation: any}) => {
  const recipes = [
    {
      key: '1',
      dishName: 'Butter + Parm Gnocchi',
      imageSource: require('../../assets/foodImages/Gnocchi.png'),
      recipeId: 'gnocchi',
    },
    {
      key: '2',
      dishName: 'Tofu Soup',
      imageSource: require('../../assets/foodImages/TofuSoup.jpg'),
    },
    {
      key: '3',
      dishName: 'Japanese Curry',
      imageSource: require('../../assets/foodImages/Curry.png'),
    },
    {
      key: '4',
      dishName: 'Classic Beef Stew',
      imageSource: require('../../assets/foodImages/Stew.png'),
    },
    // Add more recipes as needed
  ];
  const {currentUser} = useAuth();

  // Filtering for the Trending Now section
  const trendingRecipes = recipes.filter(
    recipe =>
      recipe.dishName === 'Japanese Curry' ||
      recipe.dishName === 'Classic Beef Stew',
  );

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#FDF6EF',
      }}>
      <ScrollView>
        <View style={{height: 10}}>
          <SearchBar />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 5,
          }}>
          <CuisineCard dishName="Pasta" imageSource={require('./Pasta.png')} />
          <CuisineCard dishName="Vegan" imageSource={require('./Vegan.png')} />
          <CuisineCard dishName="Soup" imageSource={require('./Soup.png')} />
          <CuisineCard dishName="Protein" imageSource={require('./Protein.png')} />
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
          <Text
            style={{
              margin: 10,
              fontFamily: 'PatrickHandSC-Regular',
              color: '#67544C',
              fontSize: 30,
            }}>
            Recommended for you
          </Text>
          <ScrollView horizontal>
            {recipes.map(recipe => (
              <RecipeCard
                key={recipe.key}
                dishName={recipe.dishName}
                imageSource={recipe.imageSource}
                navigation={navigation}
              />
            ))}
          </ScrollView>
          <Text
            style={{
              margin: 10,
              fontFamily: 'PatrickHandSC-Regular',
              color: '#67544C',
              fontSize: 30,
            }}>
            Trending Now
          </Text>
          <ScrollView horizontal>
            {trendingRecipes.map(recipe => (
              <RecipeCard
                key={recipe.key}
                dishName={recipe.dishName}
                imageSource={recipe.imageSource}
                navigation={navigation}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default RecipePage;
