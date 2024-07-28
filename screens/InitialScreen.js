import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from "react-native";

export default function InitialScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("../assets/allef-vinicius-IvQeAVeJULw-unsplash(1).jpg")}
        style={styles.container}
      >
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.title}>INBARBER</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.subtitle}>Bem-vindo a agenda feita para você</Text>
            <Text style={styles.description}>
              Planeje e organize seu dia a dia, alcance seus objetivos e
              transforme seu futuro.
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={[styles.buttonText, styles.secondaryButtonText]}>
                CADASTRAR
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Termos e Condições | Política de Privacidade
            </Text>
          </View>
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
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
  },
  header: {
    position: "absolute",
    top: 250,
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
  },
  content: {
    width: "100%",
  },
  subtitle: {
    fontSize: 24,
    color: "white",
    fontWeight: "700",
    textAlign: "left",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "white",
    textAlign: "left",
    marginBottom: 30,
    // paddingHorizontal: 20,
  },
  buttonsContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#c87f52",
    paddingVertical: 15,
    borderRadius: 50,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
  },
  secondaryButtonText: {
    color: "white",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  footer: {
    width: "100%",
    paddingBottom: 20,
    alignItems: "center",
  },
  footerText: {
    color: "white",
    textAlign: "center",
    fontSize: 12,
  },
});
