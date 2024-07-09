import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const PregCalcHome = () => {
  const { t } = useTranslation();
  const route = useRoute();
  const { pregnancyInfo } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backContainer}>
            <Image
              source={require("../../assets/next.png")}
              style={styles.invertedImage}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerText}>{t("pregnancyTitle")}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {pregnancyInfo ? (
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>{pregnancyInfo}</Text>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PregCalcHome;

const styles = StyleSheet.create({
  invertedImage: {
    height: 12,
    width: 13,
    transform: [{ rotate: "180deg" }],
  },
  backContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    opacity: 0.4,
    padding: 7,
    borderRadius: 10,
  },
  resultContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  headerContainer: {
    padding: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
    borderBottomColor: "#ddd",
    backgroundColor: "#2D2D5F",
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 1,
  },
  headerText: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#fff",
  },
  containerDetails: {
    marginTop: 20,
    marginBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    backgroundColor: "#f5f5f5",
    width: "100%",
    flexGrow: 1,
    paddingBottom: 40,
  },
  body: {
    fontSize: 14,
    paddingLeft: 21,
    paddingRight: 21,
    lineHeight: 20,
  },
  resultText: {
    fontSize: 18,
    textAlign: "center",
    // marginTop: 20,
    fontFamily: "monospace",
  },
  disabledDay: {
    opacity: 0.5,
  },
  disabledDayText: {
    color: "#d3d3d3",
  },
  enabledDayText: {
    color: "#000",
  },
});
