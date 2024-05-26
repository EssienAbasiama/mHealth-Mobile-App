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

const Main = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleSignIn = () => {
    // Handle sign-in logic here
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Email:", email);
  };

  const handlePress = () => {};

  const signIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Main Page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Main;
