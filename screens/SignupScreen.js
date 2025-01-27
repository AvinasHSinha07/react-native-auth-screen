// screens/SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ImageBackground source={require('../assets/allef-vinicius-IvQeAVeJULw-unsplash(1).jpg')} style={styles.container}>
      <View style={styles.overlay}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>Cadastro</Text>
          <Text style={styles.subtitle}>Preencha os campos abaixo para criar sua agenda.</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput placeholder="Nome do Estabelecimento" style={styles.input} placeholderTextColor="#ffffff" />
          <TextInput placeholder="Seu Nome Completo" style={styles.input} placeholderTextColor="#ffffff" />
          <View style={styles.phoneContainer}>
            <RNPickerSelect
              onValueChange={(value) => setSelectedCountry(value)}
              items={[
                { label: '🇧🇷 +55', value: '55' },
                { label: '🇺🇸 +1', value: '1' },
                // Add more country codes and flags as needed
              ]}
              placeholder={{ label: 'Código', value: null }}
              style={pickerSelectStyles}
              useNativeAndroidPickerStyle={false}
              Icon={() => {
                return <FontAwesome name="chevron-down" size={10} color="white" />;
              }}
            />
            <TextInput placeholder="Seu Telefone" style={styles.phoneInput} placeholderTextColor="#ffffff" keyboardType="phone-pad" />
          </View>
          <TextInput placeholder="Seu E-mail" style={styles.input} placeholderTextColor="#ffffff" />
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Digite Sua Senha"
              style={styles.passwordInput}
              placeholderTextColor="#ffffff"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
              <FontAwesome name={showPassword ? 'eye' : 'eye-slash'} size={20} color="white" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => { /* handle signup */ }}>
            <Text style={styles.buttonText}>FINALIZAR CADASTRO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Increased opacity for better readability
    padding: 20,
    borderRadius: 15,
    marginBottom: 0,
  },
  input: {
    width: '100%',
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    padding: 15,
    borderRadius: 50,
    marginVertical: 10,
    color: 'white',
    fontSize: 16,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
  phoneInput: {
    flex: 1,
    marginLeft: 10,
    color: 'white',
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    width: '100%',
    // backgroundColor: 'rgba(255, 255, 255, 0.3)',
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
    fontSize: 16,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#c87f52',
    paddingVertical: 15,
    borderRadius: 50,
    marginVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: 90,
    height: 45,
    backgroundColor: 'transparent',
    padding: 10,
    color: 'white',
  },
  inputAndroid: {
    width: 90,
    height: 45,
    backgroundColor: 'transparent',
    padding: 10,
    color: 'white',
  },
  iconContainer: {
    top: 18,
    right: 10,
  },
});

