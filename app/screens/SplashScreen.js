import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Animated, Image, Dimensions } from "react-native";

const SplashScreen = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const blueBlobRight = useRef(new Animated.Value(-500)).current;
  const blueBlobTop = useRef(new Animated.Value(-500)).current;
  const yellowBlobLeft = useRef(new Animated.Value(-500)).current;
  const yellowBlobBottom = useRef(new Animated.Value(-500)).current;

  useEffect(() => {
    Animated.timing(blueBlobRight, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start();

    Animated.timing(blueBlobTop, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start();

    Animated.timing(yellowBlobLeft, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: false,
    }).start();

    Animated.timing(yellowBlobBottom, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.splashScreenContainer}>
      <Animated.Image
        style={[
          styles.blueBlob,
          {
            right: blueBlobRight,
            top: blueBlobTop,
          },
        ]}
        source={require("../assets/BLOB.png")}
      />
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Animated.Image
        style={[
          styles.yellowBlob,
          {
            left: yellowBlobLeft,
            bottom: yellowBlobBottom,
          },
        ]}
        source={require("../assets/yelloBlob.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splashScreenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  yellowBlob: {
    position: "absolute",
    resizeMode: "cover",
  },
  blueBlob: {
    position: "absolute",
    resizeMode: "cover",
  },
  logo: {
    resizeMode: "cover",
  },
});

export default SplashScreen;
