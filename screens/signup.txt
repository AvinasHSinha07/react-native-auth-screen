// screens/SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SignupScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ImageBackground source={require('../assets/allef-vinicius-IvQeAVeJULw-unsplash(1).jpg')} style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text style={styles.title}>Cadastro</Text>
          <Text style={styles.subtitle}>Preencha os campos abaixo para criar sua agenda.</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput placeholder="Nome do Estabelecimento" style={styles.input} placeholderTextColor="#ccc" />
          <TextInput placeholder="Seu Nome Completo" style={styles.input} placeholderTextColor="#ccc" />
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
                return <Icon name="chevron-down" size={10} color="white" />;
              }}
            />
            <TextInput placeholder="Seu Telefone" style={styles.phoneInput} placeholderTextColor="#ccc" keyboardType="phone-pad" />
          </View>
          <TextInput placeholder="Seu E-mail" style={styles.input} placeholderTextColor="#ccc" />
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Digite Sua Senha"
              style={styles.passwordInput}
              placeholderTextColor="#ccc"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
              <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="white" />
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
    marginBottom: 30,
    alignItems: 'center',
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
  },
  input: {
    width: '85%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
    color: 'white',
    fontSize: 16,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 15,
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
    alignItems: 'center',
    width: '85%',
    marginVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 15,
    padding: 15,
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
    // backgroundColor: '#e67e22',
    backgroundColor: '#c87f52',
    paddingVertical: 15,
    borderRadius: 15,
    marginVertical: 20,
    width: '85%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    // fontWeight: 'bold',
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
