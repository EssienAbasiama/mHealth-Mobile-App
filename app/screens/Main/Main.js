import React, {
  useState,
  useMemo,
  useRef,
  useCallback,
  useEffect,
} from "react";
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
  FlatList,
} from "react-native";
import { ITEM_WIDTH } from "../Onboarding/OnboardingCardItem";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
// import topics from "../../storage/topic";
import mainTopics from "../../storage/MainTopic";
// import { languageResources } from "../../../services/i18next";
// import languagesList from "./../../../services/languagesList.json";
import RadioButton from "../../assets/components/RadioButton";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const screenWidth = Dimensions.get("window").width;
const numColumns = 2;
const containerPadding = 20;
const itemSpacing = 10;
const itemWidth =
  (screenWidth - containerPadding * 2 - itemSpacing * (numColumns - 1)) /
  numColumns;

const Main = ({
  languageResources = {},
  languagesList = {},
  changeLng = () => {},
}) => {
  // const mainTopics = t("mainTopics");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [bottomSheetOpen, isOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [seacrching, setSearching] = useState(false);
  const [searchText, setSearchText] = useState("");

  const navigation = useNavigation();
  const snapPoints = useMemo(() => ["25%", "50%"], []);
  const languageSnapPoints = useMemo(() => ["25%", "50%"], []);
  const bottomSheetRef = useRef(null);
  const bottomSheetSettingRef = useRef(null);
  const { t } = useTranslation();
  const mainTopics = t("mainTopics", { returnObjects: true });
  const topics = t("topics", { returnObjects: true });
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [filteredMainTopics, setFilteredMainTopics] = useState([]);
  const [filteredMainSubtopics, setFilteredMainSubtopics] = useState([]);
  const [filteredTopics, setFilteredTopics] = useState([]);
  const [filteredSubtopics, setFilteredSubtopics] = useState([]);
  useEffect(() => {
    // console.log("NewTopicsArray", t("mainTopics", { returnObjects: true }));
  }, []);

  const renderTopics = ({ item }) => (
    <TouchableOpacity key={item.id} onPress={() => handleTopicPress(item.id)}>
      <View style={styles.topicContainer}>
        <Text style={styles.topicTitle}>{item.title}</Text>
        <Image
          source={require("../../assets/next.png")}
          style={{ height: 17, width: 17 }}
          resizeMode="cover"
        />
      </View>
    </TouchableOpacity>
  );

  const handleMainTopicPress = (topicId) => {
    console.log("Main Topic Pressed:", topicId);
  };

  const handleSubTopicPress = (subTopicId) => {
    console.log("Subtopic Pressed:", subTopicId);
  };

  const handleSearch = (text) => {
    setSearching(true);
    setSearchText(text);

    if (!text.trim()) {
      setFilteredMainTopics([]);
      setFilteredMainSubtopics([]);
      setFilteredTopics([]);
      setFilteredSubtopics([]);
    }
    // Filter main topics and their subtopics
    const filteredMainTopics = (mainTopics || []).filter((topic) =>
      topic.title.toLowerCase().includes(text.toLowerCase())
    );

    const filteredMainSubtopics = (mainTopics || []).flatMap((topic) =>
      (topic.content.subtopics || [])
        .filter((subtopic) =>
          subtopic.title.toLowerCase().includes(text.toLowerCase())
        )
        .map((subtopic) => ({ ...subtopic, parentTopic: topic.title }))
    );

    // Filter other topics and their subtopics
    const filteredTopics = (topics || []).filter((topic) =>
      topic.title.toLowerCase().includes(text.toLowerCase())
    );

    const filteredSubtopics = (topics || []).flatMap((topic) =>
      (topic.subtopics || [])
        .filter((subtopic) =>
          subtopic.title.toLowerCase().includes(text.toLowerCase())
        )
        .map((subtopic) => ({ ...subtopic, parentTopic: topic.title }))
    );

    // Set state for each category
    setFilteredMainTopics(filteredMainTopics);
    setFilteredMainSubtopics(filteredMainSubtopics);
    setFilteredTopics(filteredTopics);
    setFilteredSubtopics(filteredSubtopics);
  };

  const handleFocus = () => {
    setSearching(true);
  };
  const handleBlur = () => {
    setSearching(false);
  };
  const handleLanguageSelect = (item) => {
    setSelectedLanguage(item);
    changeLng(item);
    console.log("SelectedLanguage", selectedLanguage);
  };

  const handleClosePress = () => {
    bottomSheetRef.current?.close();
  };
  const handleCloseClosePress = () => {
    bottomSheetSettingRef.current?.close();
  };

  const handleOpenPress = () => {
    bottomSheetRef.current?.expand();
  };
  const handleOpenSettingPress = () => {
    bottomSheetSettingRef.current?.expand();
  };
  const handlePress = () => {};

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  const handleMainPress = (id) => {
    navigation.navigate("MainTopicDetailScreen", { id });
  };

  const handlePregNav = (id) => {
    navigation.navigate("pregnancyCalculator");
  };
  const handleMainSubTopicPress = (id) => {
    // navigation.navigate("SubTopicScreen", { id });
    navigation.navigate("SubMainTopicScreen", { id });
  };
  const handleTopicPress = (id) => {
    navigation.navigate("TopicDetailScreen", { id });
  };
  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <SafeAreaView style={styles.container}>
          <View>
            <View style={styles.header}>
              <View>
                <Text style={styles.welcome}>{t("welcome")} </Text>
                <Text style={styles.subText}>{t("subText")}</Text>
              </View>
              <View style={styles.flexContainer}>
                <TouchableOpacity onPress={handleOpenSettingPress}>
                  <View style={styles.notificationContainer}>
                    <Image
                      source={require("../../assets/settings.png")}
                      // style={styles.image}s
                      style={{ height: 18, width: 18 }}
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
                  placeholder={t("searchPlaceholder")}
                  selectionColor="#2D2D5F"
                  style={styles.textSearchInput}
                  onFocus={handleFocus}
                  value={searchText}
                  onChangeText={handleSearch}
                  // onBlur={handleBlur}
                />
              </View>
              <TouchableOpacity onPress={handleBlur}>
                <View style={styles.filterContainer}>
                  <Image
                    source={require("../../assets/filter.png")}
                    style={styles.image}
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>
            </View>
            {seacrching ? (
              <View style={styles.seacrchOptionContainer}>
                {filteredMainTopics.map((suggestion) => (
                  <TouchableOpacity
                    key={suggestion.id}
                    onPress={() => handleMainPress(suggestion.id)}
                  >
                    <View style={styles.topicContainer}>
                      <Text style={styles.topicTitle}>{suggestion.title}</Text>
                      <Image
                        source={require("../../assets/next.png")}
                        style={{ height: 17, width: 17 }}
                        resizeMode="cover"
                      />
                    </View>
                  </TouchableOpacity>
                ))}
                {filteredMainSubtopics.map((suggestion) => (
                  <TouchableOpacity
                    key={suggestion.id}
                    onPress={() => handleMainSubTopicPress(suggestion.id)}
                  >
                    <View style={styles.topicContainer}>
                      <Text style={styles.topicTitle}>{suggestion.title}</Text>

                      <Image
                        source={require("../../assets/next.png")}
                        style={{ height: 17, width: 17 }}
                        resizeMode="cover"
                      />
                    </View>
                  </TouchableOpacity>
                ))}
                {/* Fixed */}
                {filteredTopics.map((suggestion) => (
                  <TouchableOpacity
                    key={suggestion.id}
                    onPress={() => handleTopicPress(suggestion.id)}
                  >
                    <View style={styles.topicContainer}>
                      <Text style={styles.topicTitle}>{suggestion.title}</Text>
                      <Image
                        source={require("../../assets/next.png")}
                        style={{ height: 17, width: 17 }}
                        resizeMode="cover"
                      />
                    </View>
                  </TouchableOpacity>
                ))}
                {/* Fixed */}
                {filteredSubtopics.map((suggestion) => (
                  <TouchableOpacity
                    key={suggestion.id}
                    onPress={() => handleSubTopicPress(suggestion.id)}
                  >
                    <View style={styles.topicContainer}>
                      <Text style={styles.topicTitle}>{suggestion.title}</Text>
                      {/* <Text style={styles.parentTopicTitle}>
                        ({suggestion.parentTopic})
                      </Text> */}
                      <Image
                        source={require("../../assets/next.png")}
                        style={{ height: 17, width: 17 }}
                        resizeMode="cover"
                      />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <View style={styles.topics}>
                {mainTopics.map((topic) => (
                  <TouchableOpacity
                    key={topic.id}
                    onPress={() => handleMainPress(topic.id)}
                  >
                    <View style={styles.topicContent}>
                      <View style={styles.imageContentContainer}>
                        <Image
                          style={styles.imageContent}
                          source={{ uri: topic.topic_img }}
                        />
                      </View>
                      <View style={styles.contentTextContainer}>
                        <Text style={styles.contentText}>{topic.title}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </SafeAreaView>
      </ScrollView>
      <BottomSheet
        index={0}
        ref={bottomSheetSettingRef}
        snapPoints={languageSnapPoints}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
      >
        {/* <ScrollView contentContainerStyle={styles.bottomSheetScrollContainer}> */}
        <View style={styles.bottomSheetContainer}>
          <Text style={styles.bottonSheetTitle}>{t("changeLanguage")}</Text>
          <View style={styles.bottomSheetContentContainer}>
            <FlatList
              data={Object.keys(languageResources)}
              renderItem={({ item }) => (
                <TouchableOpacity
                  // key={topic.id}
                  onPress={() => handleLanguageSelect(item)}
                >
                  <View style={styles.topicContainer}>
                    <Text style={styles.topicTitle}>
                      {languagesList[item].nativeName}
                    </Text>
                    <RadioButton selected={selectedLanguage === item} />
                  </View>
                </TouchableOpacity>
              )}
            />

            {/* Close BTN */}
            <TouchableOpacity
              style={styles.closeModalBtn}
              onPress={handleClosePress}
            >
              <Text style={styles.buttonText}>{t("closeButton")}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </ScrollView> */}
      </BottomSheet>
      <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
      >
        <View style={styles.bottomSheetContainer}>
          <Text style={styles.bottonSheetTitle}>{t("exploreTopics")}</Text>
          <View style={styles.bottomSheetContentContainer}>
            <FlatList
              data={topics}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderTopics}
              contentContainerStyle={styles.bottomSheetContentContainer}
              ListFooterComponent={
                <>
                  <TouchableOpacity onPress={handlePregNav}>
                    <View style={styles.topicContainer}>
                      <Text style={styles.topicTitle}>
                        Pregnancy Calculator
                      </Text>
                      <Image
                        source={require("../../assets/next.png")}
                        style={{ height: 17, width: 17 }}
                        resizeMode="cover"
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.closeModalBtn}
                    onPress={handleClosePress}
                  >
                    <Text style={styles.buttonText}>{t("closeButton")}</Text>
                  </TouchableOpacity>
                </>
              }
            />
          </View>
        </View>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  seacrchOptionContainer: {
    // padding: 20,
    // backgroundColor: "red",
  },
  bottomSheetScrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  bottomSheetContentContainer: {
    flex: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  topicTitle: {
    fontWeight: "400",
    fontSize: 12,
    color: "#1a1a1a",
  },
  topicContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 5,
    backgroundColor: "#efefef",
    borderWidth: 1,
    borderColor: "GREY",

    borderRadius: 10,
  },
  bottonSheetTitle: {
    fontWeight: "500",
    fontSize: 17,
    marginBottom: 15,
  },
  closeModalBtn: {
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
  bottomSheetContainer: {
    paddingRight: 20,
    paddingLeft: 20,
    flex: 1,
    flexGrow: 1,
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
    flexGrow: 1,
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

Main.propTypes = {
  languageResources: PropTypes.object.isRequired,
  languagesList: PropTypes.object.isRequired,
  changeLng: PropTypes.func.isRequired,
};

export default Main;
