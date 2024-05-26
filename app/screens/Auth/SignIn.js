import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ITEM_WIDTH } from "../Onboarding/OnboardingCardItem";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handlePress = () => {
    // Handle sign-in logic here
    console.log("Username:", username);
    console.log("Password:", password);
    navigation.navigate("Home");
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp"); // Navigate to the next screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.pageTitle}>Sign In</Text>
        <Text style={styles.pageSubTitle}>
          Sign in to continue to an awesome experience.
        </Text>
        <View style={styles.formContainer}>
          <View>
            <Text style={styles.label}>Username</Text>
            <View>
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                selectionColor="#2D2D5F"
                placeholder="Enter your username"
              />
              <Text style={styles.errorMessage}>
                This user isn’t registered
              </Text>
            </View>
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Password</Text>
            <View>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                selectionColor="#2D2D5F"
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handlePress}
              style={styles.buttonClickMe}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.somethingWrongBTNContainer}>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.somethingWrongText}>
              Don’t have an account?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.somethingWrongText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  somethingWrongBTNContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  somethingWrongText: {
    fontSize: 14,
  },
  buttonClickMe: {
    width: "100%",
    height: 55,
    backgroundColor: "#2D2D5F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  buttonContainer: {
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  formGroup: {
    marginTop: 10,
  },
  errorMessage: {
    color: "#FF0000",
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 16.42,
    fontWeight: "500",
    display: "none",
  },
  container: {
    backgroundColor: "white",
    width: ITEM_WIDTH,
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  formContainer: {
    marginBottom: 20,
    marginTop: 10,
  },

  label: {
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 16.42,
    fontWeight: "500",
  },

  pageTitle: {
    fontSize: 24,
    color: "#2D2D5F",
    lineHeight: 28.25,
    fontWeight: "500",
    color: "#000000",
  },

  pageSubTitle: {
    fontSize: 14,
    color: "#2D2D5F",
    lineHeight: 16.42,
    fontWeight: "400",
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    height: 60,
    borderColor: "#C4C4C4",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 15,
  },
});

export default SignIn;
