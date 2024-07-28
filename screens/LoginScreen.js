// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ImageBackground source={require('../assets/allef-vinicius-IvQeAVeJULw-unsplash(1).jpg')} style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Image
            source={require('../assets/7057474_592-removebg-preview.png')} // Replace with your logo path
            style={styles.logo}
            resizeMode="contain"
          />
          {/* <Text style={styles.title}>INBARBER</Text> */}
        </View>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="E-mail de acesso"
            style={styles.input}
            placeholderTextColor="#ccc"
          />
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Sua senha"
              style={styles.passwordInput}
              placeholderTextColor="#ccc"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? "visibility" : "visibility-off"}
                size={24}
                color="#ccc"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => { /* handle login */ }}>
            <Text style={styles.buttonText}>ENVIAR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { /* handle password reset */ }}>
            <Text style={styles.link}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.socialContainer}>
          {/* <Text style={styles.socialText}>Ou entre com</Text> */}
          <View style={styles.socialIcons}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="facebook" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="instagram" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="twitter" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 0,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    marginTop: 50,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
    color: 'white',
  },
  passwordContainer: {
    flexDirection: 'row',
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    color: 'white',
  },
  button: {
    backgroundColor: '#c87f52',
    paddingVertical: 15,
    borderRadius: 15,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  link: {
    color: '#ccc',
    marginTop: 20,
    textAlign: 'center',
  },
  socialContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  socialText: {
    color: '#ccc',
    marginBottom: 10,
    fontSize: 16,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   width: "50%"
  },
  socialButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    // padding: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
