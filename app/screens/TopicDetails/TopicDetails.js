import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { ITEM_WIDTH } from "../Onboarding/OnboardingCardItem";
import { LinearGradient } from "expo-linear-gradient";
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
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
// import topics from "../../storage/topic";

function TopicDetails() {
  const [topic, setTopic] = useState(null);
  const route = useRoute();
  const { id } = route.params;
  const navigation = useNavigation();
  const { t } = useTranslation();
  const topics = t("topics", { returnObjects: true });
  useEffect(() => {
    const selectedTopic = topics.find((topic) => topic.id === id);
    setTopic(selectedTopic);
  }, [id]);

  const handleTopicPress = (id) => {
    navigation.navigate("SubTopicScreen", { id });
  };

  if (!topic) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: topic.topic_img }}
            style={styles.image}
            resizeMode="cover"
          />
          <LinearGradient
            colors={["rgba(0, 0, 0, 0.4)", "#000000"]}
            style={styles.gradient}
          />
        </View>

        <Text style={styles.header}>{topic.title}</Text>
        <Text style={styles.intro}>{topic.content.intro}</Text>
        <View style={styles.containerDetails}>
          {topic.content.details &&
            topic.content.details.length > 0 &&
            topic.content.details.map((detail, index) => (
              <Text key={index} style={styles.body}>
                {detail}
              </Text>
            ))}
        </View>

        {/* Explore More Topics */}

        {topic.content.subtopics && topic.content.subtopics.length > 0 && (
          <View style={styles.subtopicsContainerr}>
            <Text style={styles.bottonSheetTitle}>Read More</Text>
            {topic.content.subtopics.map((subtopic) => (
              <TouchableOpacity
                key={subtopic.id}
                onPress={() => handleTopicPress(subtopic.id)}
              >
                <View style={styles.subtopicsContainer}>
                  <Text style={styles.topicTitle}>{subtopic.title}</Text>
                  <Image
                    source={require("../../assets/next.png")}
                    style={{ height: 17, width: 17 }}
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerDetails: {
    marginTop: 20,
  },
  subtopicsContainerr: {
    padding: 20,
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
  subtopicsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 5,
    backgroundColor: "#efefef",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    borderTopWidth: 1,
    borderTopColor: "white",
    borderRadius: 10,
  },
  bottonSheetTitle: {
    fontWeight: "500",
    fontSize: 15,
    marginBottom: 15,
  },
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
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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
    // paddingLeft: 20,
    paddingTop: 20,
    textAlign: "center",
    lineHeight: 23.46,
    marginTop: 15,
  },

  intro: {
    color: "grey",
    fontSize: 12,
    marginTop: 15,
    paddingLeft: 21,
    paddingRight: 21,
    textAlign: "center",
    lineHeight: 15,
  },
  body: {
    // color: "grey",
    fontSize: 14,

    paddingLeft: 21,
    paddingRight: 21,
    // textAlign: "center",
    lineHeight: 20,
  },
});

export default TopicDetails;
