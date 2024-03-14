import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAuth} from '../../context/AuthContext';

const SignupScreen = () => {
  const navigation = useNavigation();

  const [emailInput, onEmailInputChange] = useState('');
  const [passwordInput, onPasswordInputChange] = useState('');

  const {currentUser, signUpOrLogIn} = useAuth();

  const handleSignUpPress = () => {
    signUpOrLogIn(emailInput, passwordInput);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profilePicContainer}>
        <Image
          source={require('./LogoBorder.png')}
          style={styles.borderImage}
        />
        <Image source={require('./Logo.png')} style={styles.profilePic} />
      </View>
      {/* <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={24} color="#A9A9A9" />
        <TextInput style={styles.input} placeholder="Username" />
      </View> */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={24} color="#A9A9A9" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={onEmailInputChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={24} color="#A9A9A9" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={onPasswordInputChange}
        />
      </View>
      {/* <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={24} color="#A9A9A9" />
        <TextInput style={styles.input} placeholder="Re-enter password" secureTextEntry />
      </View> */}
      <TouchableOpacity style={styles.signupButton} onPress={handleSignUpPress}>
        <Image
          source={require('./SignIn.png')} // Your button background and border image
          style={styles.buttonBackgroundImage}
        />
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Sign Up with Google</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FDF6EF',
    paddingTop: 100,
  },
  profilePicContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Replace with the appropriate color
  },
  profilePic: {
    width: '110%',
    height: '110%',
    borderRadius: 110,
    position: 'absolute',
  },
  borderImage: {
    width: '112%',
    height: '112%',
    position: 'absolute',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A9A9A9',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 48,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#A9A9A9',
  },
  input: {
    flex: 1,
    height: '100%',
    marginLeft: 10,
    fontSize: 25,
    color: '#CCADA3',
    fontFamily: 'PatrickHandSC-Regular',
  },
  signupButton: {
    width: '80%',
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
    
  },
  buttonText: {
    color: '#67544C',
    fontSize: 30,

    fontFamily: 'PatrickHandSC-Regular',
  },
  buttonBackgroundImage: {
    position: 'absolute', 
    width: '100%', 
    height: '100%',
    borderRadius: 25,
  },
  googleButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#DB4437',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignupScreen;
