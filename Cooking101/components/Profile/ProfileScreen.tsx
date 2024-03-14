import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const borderSizePercentage = 0.416;
const profileSizePercentage = 0.4;

const borderImageSize = width * borderSizePercentage;
const profileImageSize = width * profileSizePercentage;
const buttonWidth = borderImageSize * 0.7;
const buttonHeight = buttonWidth / (813 / 347);

const recipes = [
  {
    key: '1',
    dishName: 'Butter + Parm Gnocchi',
    imageSource: require('../../assets/foodImages/Gnocchi.png'),
    recipeId: 'gnocchi',
    navigationScreen: 'RecipeOverview',
  },
  {
    key: '2',
    dishName: 'Tofu Soup',
    imageSource: require('../../assets/foodImages/TofuSoup.jpg'),
    recipeId: 'tofuSoup',
    navigationScreen: 'RecipeOverviewSoup',
  },
  {
    key: '3',
    dishName: 'Japanese Curry',
    imageSource: require('../../assets/foodImages/Curry.png'),
    recipeId: 'japaneseCurry',
    navigationScreen: 'RecipeOverviewCurry',
  },
  {
    key: '4',
    dishName: 'Classic Beef Stew',
    imageSource: require('../../assets/foodImages/Stew.png'),
    recipeId: 'beefStew',
    navigationScreen: 'RecipeOverviewStew',
  },
  // Add more recipes as needed
];

const ViewProfile: React.FC = () => {
  const navigation = useNavigation();

  
  const profileImage = require('./ProfileImage.png'); 
  const borderImage = require('./PfpBorder.png'); 

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.backButtonContainer}>
        <Text style={styles.logout}>LOGOUT</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image source={borderImage} style={styles.borderImage} />
          <Image source={profileImage} style={styles.profileImage} />
        </View>
        <Text style={styles.name}>Cooking 101 Team</Text>
        <Text style={styles.username}>@COOKING101</Text>

        <TouchableOpacity
          onPress={() => {
            // Implement Friends button functionality
          }}
          style={[
            styles.buttonBorder,
            {width: buttonWidth, height: buttonHeight},
          ]}>
          <ImageBackground
            source={require('./ButtonBorderFriends.png')} 
            style={styles.buttonBackground}
            resizeMode="stretch">
            <Text style={styles.buttonText}>Friends</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // Implement Edit Profile button functionality
          }}
          style={[
            styles.buttonBorder,
            {width: buttonWidth, height: buttonHeight},
          ]}>
          <ImageBackground
            source={require('./ButtonBorderEdit.png')} 
            style={styles.buttonBackground}
            resizeMode="stretch">
            <Text style={styles.buttonText}>Edit Profile</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>My Recipes</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recipesScrollView}>
          {recipes.map((recipe, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                
              }}
              style={styles.recipeCard}>
              <View style={styles.recipeFrameContainer}>
                <Image source={require('./RecipeFrame.png')} style={styles.recipeFrame} />
                <Image source={recipe.imageSource} style={styles.recipeImage} />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6EF',
  },
  backButtonContainer: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 10,
  },
  backButton: {
    width: 35,
    height: 35,
  },
  logout: {
    fontFamily: 'PatrickHandSC-Regular',
    fontSize: 25,
    color: '#875F52'
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    position: 'relative',
    width: borderImageSize,
    height: borderImageSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  profileImage: {
    width: profileImageSize,
    height: profileImageSize,
    borderRadius: profileImageSize / 2,
  },
  name: {
    fontSize: 30,
    fontFamily: 'PatrickHandSC-Regular',
    color: '#875F52',
  },
  username: {
    fontFamily: 'PatrickHandSC-Regular',
    fontSize: 17,
    color: '#969696',
  },
  buttonBorder: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'PatrickHandSC-Regular',
    fontSize: 20,
    textAlign: 'center',
    color: '#78574C',
  },
  content: {
    flex: 1,
  },
  sectionTitle: {
    fontFamily: 'PatrickHandSC-Regular',
    color: '#875F52',
    fontSize: 25,
    padding: 10,
  },
  recipesScrollView: {
    paddingHorizontal: 10,
  },
  recipeCard: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 20,
  },
  recipeFrameContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  recipeFrame: {
    position: 'absolute',
    width: 260,
    height: 260,
  },
  recipeImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    position: 'relative',
    zIndex: 1,
  },
});

export default ViewProfile;