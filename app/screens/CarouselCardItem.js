import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Dimensions.get("window").width;

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.imgUrl }}
          style={styles.image}
          resizeMode="cover"
        />
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.4)", "#000000"]}
          style={styles.gradient}
        />
      </View>

      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: ITEM_WIDTH,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "90%",
    resizeMode: "cover",
  },
  imageContainer: {
    position: "relative",
    width: ITEM_WIDTH,
    height: 400,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    overflow: "hidden",
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {
    color: "#2D2D5F",
    fontSize: 20,
    fontWeight: "600",
    paddingLeft: 20,
    paddingTop: 20,
    textAlign: "center",
    lineHeight: 23.46,
    marginTop: 15,
  },

  body: {
    color: "#2D2D5F",
    fontSize: 14,
    marginTop: 15,
    paddingLeft: 21,
    paddingRight: 21,
    textAlign: "center",
    lineHeight: 20,
  },
});

export default CarouselCardItem;
