import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={require('../assets/allef-vinicius-IvQeAVeJULw-unsplash(1).jpg')} style={styles.container}>
        <View style={styles.overlay}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <FontAwesome name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.header}>
            <Text style={styles.title}>INBARBER</Text>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.welcomeText}>
              Bem-vindo parceiro, entre com seus dados para ter acesso a sua agenda
            </Text>
            <TextInput
              placeholder="E-mail de acesso"
              style={styles.input}
              placeholderTextColor="#ffffff"
            />
            <View style={styles.passwordContainer}>
              <TextInput
                placeholder="Sua senha"
                style={styles.passwordInput}
                placeholderTextColor="#ffffff"
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
          <Text style={styles.footerText}>
            Sua agenda possui dados sensíveis de seus clientes, não forneça seu acesso a ninguém.
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Align content towards the bottom
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Darker overlay for better contrast
    flex: 1,
    justifyContent: 'flex-end', // Align content towards the bottom
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Increased opacity for better readability
    padding: 20,
    borderRadius: 15,
    marginBottom: 0, 
  },
  welcomeText: {
    color: '#ccc',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
    color: 'white',
  },
  passwordContainer: {
    flexDirection: 'row',
    width: '100%',
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    padding: 15,
    borderRadius: 50,
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
    borderRadius: 50,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  link: {
    color: '#ccc',
    marginTop: 10,
    textAlign: 'center',
  },
  footerText: {
    color: '#f4f4f4',
    marginBottom: 20, // Added margin for spacing from the form
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

