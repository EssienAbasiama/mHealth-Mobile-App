import React, { useState, useMemo, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Button,
} from "react-native";
import { ITEM_WIDTH } from "../Onboarding/OnboardingCardItem";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet from "@gorhom/bottom-sheet";

const screenWidth = Dimensions.get("window").width;
const numColumns = 2;
const containerPadding = 20;
const itemSpacing = 10;
const itemWidth =
  (screenWidth - containerPadding * 2 - itemSpacing * (numColumns - 1)) /
  numColumns;

const Main = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ["25%", "50%", "70%", "87%"], []);
  const bottomSheetRef = useRef < BottomSheet > null;

  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const handlePress = () => {};
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.header}>
            <View>
              <Text style={styles.welcome}>Hi Ayo 👋 </Text>
              <Text style={styles.subText}>
                What are you reading about today?
              </Text>
            </View>
            <View style={styles.flexContainer}>
              <TouchableOpacity onPress={handlePress}>
                <View style={styles.notificationContainer}>
                  <Image
                    source={require("../../assets/bell.png")}
                    // style={styles.image}s
                    style={{ height: 17, width: 17 }}
                    resizeMode="cover"
                  />
                  <View style={styles.notificationTextContainer}>
                    <Text style={styles.notificationText}>2</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleOpenPress}>
                <View style={styles.notificationContainer}>
                  <Image
                    source={require("../../assets/menu.png")}
                    style={{ height: 17, width: 17 }}
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.searchSection}>
            <View style={styles.searchContainer}>
              <Image
                source={require("../../assets/ep_search.png")}
                style={styles.searchIcon}
                resizeMode="cover"
              />
              <TextInput
                placeholder="Search"
                selectionColor="#2D2D5F"
                onChangeText={(text) => setUsername(text)}
                style={styles.textSearchInput}
              />
            </View>
            <TouchableOpacity onPress={handlePress}>
              <View style={styles.filterContainer}>
                <Image
                  source={require("../../assets/filter.png")}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.topics}>
            <TouchableOpacity>
              <View style={styles.topicContent}>
                <View style={styles.imageContentContainer}>
                  <Image
                    style={styles.imageContent}
                    source={{
                      uri: "https://img.freepik.com/free-photo/medium-shot-happy-parents-be_23-2151446095.jpg?t=st=1716893006~exp=1716896606~hmac=b7b5cf53c7adf68cf21bece8021635c06100b232177d1c22532384ec204041ef&w=740",
                    }}
                  />
                </View>
                <View style={styles.contentTextContainer}>
                  <Text style={styles.contentText}>Pregnancy</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.topicContent}>
                <View style={styles.imageContentContainer}>
                  <Image
                    style={styles.imageContent}
                    source={{
                      uri: "https://img.freepik.com/free-photo/portrait-mother-with-newborn-baby_23-2151055033.jpg?t=st=1716893171~exp=1716896771~hmac=20352121ae714f785024ac29dfb85ff7b060ede9697444d58f191d92134ab5a6&w=826",
                    }}
                  />
                </View>
                <View style={styles.contentTextContainer}>
                  <Text style={styles.contentText}>Birth</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.topicContent}>
                <View style={styles.imageContentContainer}>
                  <Image
                    style={styles.imageContent}
                    source={{
                      uri: "https://img.freepik.com/free-photo/portrait-mother-with-newborn-baby_23-2151055102.jpg?t=st=1716893264~exp=1716896864~hmac=032ebce4a7d2f0706ab78031a75764e0b6eecca2cd4b5e4e041b9cb5fbe3b947&w=740",
                    }}
                  />
                </View>
                <View style={styles.contentTextContainer}>
                  <Text style={styles.contentText}>After Birth</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.topicContent}>
                <View style={styles.imageContentContainer}>
                  <Image
                    style={styles.imageContent}
                    source={{
                      uri: "https://img.freepik.com/free-photo/black-pregnant-women-posing_23-2151446148.jpg?t=st=1716894103~exp=1716897703~hmac=8e7ee396bb40d9e89d0f0523e4eb3d4933eb4b552f0bfc1ce9ca8bee6cbe2c98&w=996",
                    }}
                  />
                </View>
                <View style={styles.contentTextContainer}>
                  <Text style={styles.contentText}>Labour</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.topicContent}>
                <View style={styles.imageContentContainer}>
                  <Image
                    style={styles.imageContent}
                    source={{
                      uri: "https://img.freepik.com/premium-photo/woman-is-shown-with-blood-dripping-her-hands-this-image-can-be-used-depict-crime-horror-mystery-scene-from-thriller_153912-226779.jpg?w=360",
                    }}
                  />
                </View>
                <View style={styles.contentTextContainer}>
                  <Text style={styles.contentText}>Postpartum bleeding</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.topicContent}>
                <View style={styles.imageContentContainer}>
                  <Image
                    style={styles.imageContent}
                    source={{
                      uri: "https://img.freepik.com/free-photo/african-american-woman-with-braids-standing-pink-background-disgusted-expression-displeased-fearful-doing-disgust-face-because-aversion-reaction_839833-2208.jpg?t=st=1716894569~exp=1716898169~hmac=d2e999f47519d91d6af488c13f5705194fe8c82e651327189babc21f0a5c934e&w=826",
                    }}
                  />
                </View>
                <View style={styles.contentTextContainer}>
                  <Text style={styles.contentText}>Bacterial Vaginosis</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <BottomSheet index={1} snapPoints={snapPoints}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.bottomSheetContainer}>
            <Text>Explore Topics</Text>
            <Button title="Open" onPress={handleOpenPress} />
            <Button title="Close" onPress={handleClosePress} />
          </View>
        </ScrollView>
      </BottomSheet>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  flexContainer: {
    flexDirection: "row",
    gap: 10,
  },
  contentTextContainer: {
    backgroundColor: "#000000",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  contentText: {
    color: "white",
  },
  scrollContainer: {
    paddingVertical: 10,
  },
  topics: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  topicContent: {
    width: itemWidth,
    height: 190,
    marginBottom: 10,
    borderRadius: 10,
    // backgroundColor: "red",
    borderRadius: 10,
    overflow: "none",
  },
  imageContentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContent: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  textSearchInput: {
    height: 50,
    flex: 1,
  },
  searchSection: {
    marginTop: 23,
    marginBottom: 23,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
    overflow: "none",
  },
  searchIcon: {
    // width: 50,
    // height: 50,
    marginRight: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    height: 50,
    flex: 1,
    width: "100%",
    borderRadius: 5,
    borderColor: "#000000",
    borderWidth: 2,
    paddingLeft: 15,
    paddingRight: 10,
  },
  filterContainer: {
    height: 50,
    width: 50,
    backgroundColor: "#2D2D5F",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  subText: {
    fontSize: 14,
    fontWeight: "400",
    marginTop: 5,
  },
  notificationText: {
    fontWeight: "700",
    fontSize: 11,
    // lineHeight: 11.73,
    color: "white",
  },
  container: {
    padding: 20,
    flex: 1,
  },
  notificationContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#2D2D5F",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationTextContainer: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#FF0000",
    // padding: 5,
    borderRadius: 20,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  header: {
    // alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  welcome: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2D2D5F",
    lineHeight: 23.46,
  },
});

export default Main;
