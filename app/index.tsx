import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SokoLink</Text>
      <Text style={styles.subtitle}>Connect, Discover, Shop</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("SokoLink", "Login button pressed")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.buttonOutline]}
        onPress={() => Alert.alert("SokoLink", "Sign up button pressed")}
      >
        <Text style={[styles.buttonText, styles.buttonOutlineText]}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F8F4",
    padding: 24,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: "#146B4C",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#4B5563",
    marginBottom: 40,
  },
  button: {
    width: "100%",
    maxWidth: 320,
    backgroundColor: "#146B4C",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "600" },
  buttonOutline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#146B4C",
  },
  buttonOutlineText: { color: "#146B4C" },
});
