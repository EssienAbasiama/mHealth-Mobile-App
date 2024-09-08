import React, { useState, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

const PregHome = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [pregnancyInfo, setPregnancyInfo] = useState("");
  // const mainTopics = t("mainTopics", { returnObjects: true });

  const today = moment().format("YYYY-MM-DD");
  const maxPregnancyDate = moment().subtract(42, "weeks").format("YYYY-MM-DD");

  const handleDatePress = (day) => {
    const selected = moment(day.dateString);
    if (selected.isAfter(today) || selected.isBefore(maxPregnancyDate)) {
      return;
    }
    setSelectedDate(day.dateString);
    calculatePregnancy(day.dateString);
  };

  const calculatePregnancy = (date) => {
    const lastPeriodDate = moment(date);
    const today = moment();
    const duration = moment.duration(today.diff(lastPeriodDate));
    const weeks = Math.floor(duration.asWeeks());
    const days = Math.floor(duration.asDays() % 7);
    const durationString = `${weeks} ${t("weeks")} ${t("and")} ${days} ${t(
      "days"
    )}`;

    let info = "";
    if (weeks < 5) {
      info = t("pregnancyEarly", { durationString });
    } else if (weeks < 14) {
      info = t("pregnancyFirstTrimester", { durationString });
    } else if (weeks < 27) {
      info = t("pregnancySecondTrimester", { durationString });
    } else if (weeks <= 40) {
      info = t("pregnancyThirdTrimester", { durationString });
    } else {
      info = t("pregnancyOverdue", { durationString });
    }

    setPregnancyInfo(info);
    navigation.navigate("PregCalcHome", { pregnancyInfo: info });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backIcon}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/black-pregnant-women-posing_23-2151446148.jpg?t=st=1716894103~exp=1716897703~hmac=8e7ee396bb40d9e89d0f0523e4eb3d4933eb4b552f0bfc1ce9ca8bee6cbe2c98&w=996",
            }}
            style={styles.image}
            resizeMode="cover"
          />
          <LinearGradient
            colors={["rgba(0, 0, 0, 0.4)", "#000000"]}
            style={styles.gradient}
          />
        </View>

        <Text style={styles.header}>{t("pregnancyTitle")}</Text>
        <Text style={styles.intro}>{t("pregnancyCalculatorText")}</Text>
        <View style={styles.containerDetails}>
          <Text style={styles.body}>{t("pregnancyCalculatorSide")}</Text>
        </View>
        <Text style={styles.info}>{t("pregnancyInfo")}</Text>
        <Calendar
          onDayPress={handleDatePress}
          markedDates={{
            [selectedDate]: {
              selected: true,
              marked: true,
              selectedColor: "#2D2D5F",
            },
          }}
          disableAllTouchEventsForDisabledDays={true}
          minDate={maxPregnancyDate}
          maxDate={today}
          renderDay={(day, item) => {
            const dayDate = moment(day.dateString);
            const isDisabled =
              dayDate.isAfter(today) || dayDate.isBefore(maxPregnancyDate);
            return (
              <View style={isDisabled ? styles.disabledDay : null}>
                <Text
                  style={
                    isDisabled ? styles.disabledDayText : styles.enabledDayText
                  }
                >
                  {day.day}
                </Text>
              </View>
            );
          }}
          theme={{
            calendarBackground: "#ffffff",
            textSectionTitleColor: "#b6c1cd",
            selectedDayBackgroundColor: "#2D2D5F",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#2D2D5F",
            dayTextColor: "#2D2D5F",
            textDisabledColor: "#d9e1e8",
            dotColor: "#2D2D5F",
            selectedDotColor: "#ffffff",
            arrowColor: "#2D2D5F",
            disabledArrowColor: "#d9e1e8",
            monthTextColor: "#2D2D5F",
            indicatorColor: "#2D2D5F",
            textDayFontFamily: "monospace",
            textMonthFontFamily: "monospace",
            textDayHeaderFontFamily: "monospace",
            textDayFontWeight: "300",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "300",
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default PregHome;

const styles = StyleSheet.create({
  containerDetails: {
    marginTop: 20,
    marginBottom: 20,
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
    flex: 1,
    paddingBottom: 35,
  },
  image: {
    width: "100%",
    height: "90%",
    resizeMode: "cover",
  },
  imageContainer: {
    position: "relative",
    // width: ITEM_WIDTH,
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
    fontFamily: "monospace",
    fontWeight: "bold",
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
    fontFamily: "monospace",
  },
  body: {
    fontSize: 14,
    // fontFamily: "monospace",
    paddingLeft: 21,
    paddingRight: 21,
    lineHeight: 20,
  },
  info: {
    fontSize: 14,
    paddingLeft: 21,
    paddingRight: 21,
    lineHeight: 20,
    fontWeight: "700",
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
  backIcon: {
    position: "absolute",
    top: 30,
    left: 20,
    zIndex: 1,
  },
});
