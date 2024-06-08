import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { ITEM_WIDTH } from "../Onboarding/OnboardingCardItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { FIREBASE_AUTH } from "../../config/firebase";
import { categorizeFirebaseError } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailrror, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigation = useNavigation();
  const auth = FIREBASE_AUTH;
  const signIn = () => {
    navigation.navigate("SignIn");
  };

  const handlePress = () => {};

  const signUp = async () => {
    setEmailError("");
    setPasswordError("");
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigation.navigate("SignIn");

      console.log("Success", response);
      alert("Registration Successful");
    } catch (error) {
      const { emailError, passwordError } = categorizeFirebaseError(error);
      console.log("Error", error);
      if (emailError) {
        console.error("Email Error:", emailError);
        setEmailError(emailError);
      }
      if (passwordError) {
        console.error("Password Error:", passwordError);
        setPasswordError(passwordError);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.pageTitle}>Create an Account</Text>
        <Text style={styles.pageSubTitle}>
          Create an account to continue to an awesome experience.
        </Text>
        <KeyboardAvoidingView behavior="padding">
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
              </View>
            </View>
            <View>
              <Text style={styles.label}>Email Address</Text>
              <View>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  selectionColor="#2D2D5F"
                  placeholder="johndoe@thehype.com"
                />

                {emailrror ? (
                  <Text style={styles.errorMessage}>{emailrror}</Text>
                ) : (
                  <></>
                )}
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
                {passwordError ? (
                  <Text style={styles.errorMessage}>{passwordError}</Text>
                ) : (
                  <></>
                )}
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={signUp} style={styles.buttonClickMe}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.somethingWrongBTNContainer}>
          <TouchableOpacity onPress={signIn}>
            <Text style={styles.somethingWrongText}>
              Already have an account?
            </Text>
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

export default SignUp;
