import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import data from "./data";

const CarouselCards = () => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const handlePress = () => {
    // Handle button press action here
    console.log("Button pressed!");
  };
  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />

      {index >= data.length - 1 && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handlePress} style={styles.buttonClickMe}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress} style={styles.buttonSignIn}>
            <Text style={styles.buttonTextSignIn}>Click Me</Text>
          </TouchableOpacity>
        </View>
      )}
      {index < data.length - 1 && (
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 50,
            marginHorizontal: 0,
            backgroundColor: "#2D2D5F",
          }}
          inactiveDotStyle={{
            width: 10,
            height: 10,
            borderRadius: 50,
            marginHorizontal: 0,
            backgroundColor: "transparent",
            borderColor: "#2D2D5F",
            borderWidth: 2,
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.5}
          tappableDots={true}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonClickMe: {
    width: "100%",
    height: 55,
    backgroundColor: "#2D2D5F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
    justifyContent: "center", // Center content vertically
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20, // Add top margin for spacing
  },
  buttonSignIn: {
    width: "100%",
    height: 55,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "center",
    justifyContent: "center", // Center content vertically
    alignItems: "center",
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#2D2D5F",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  buttonTextSignIn: {
    color: "#2D2D5F",
    fontSize: 14,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
export default CarouselCards;
