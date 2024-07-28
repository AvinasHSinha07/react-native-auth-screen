import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function InitialScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/allef-vinicius-IvQeAVeJULw-unsplash(1).jpg')} style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text style={styles.title}>INBARBER</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.subtitle}>Bem-vindo a agenda feita para você</Text>
          <Text style={styles.description}>
            Planeje e organize seu dia a dia, alcance seus objetivos e transforme seu futuro.
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.buttonText}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Termos e Condições | Política de Privacidade</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 90,
  },
  content: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 90,
  },
  subtitle: {
    fontSize: 30,
    color: 'white',
    fontWeight:'700',
    textAlign: 'left',
    marginBottom: 10,
    
  },
  description: {
    fontSize: 12,
    color: 'white',
    textAlign: 'left',

    
  },
  buttonsContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#c87f52',
    paddingVertical: 15,
    borderRadius: 15,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderColor: "white",
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  footer: {
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  footerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
  },
});
