import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import data from "./data";

const CarouselCards = () => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);

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
          inactiveDotOpacity={1}
          inactiveDotScale={1}
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
});
export default CarouselCards;
