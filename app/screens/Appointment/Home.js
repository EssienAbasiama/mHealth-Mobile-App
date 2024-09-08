import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  Linking,
} from "react-native";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";

const PregApp = ({
  languageResources = {},
  languagesList = {},
  changeLng = () => {},
}) => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [appointmentTitle, setAppointmentTitle] = useState("");
  const [appointmentDetails, setAppointmentDetails] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const { t } = useTranslation();
  const handleDatePress = (day) => {
    setSelectedDate(day.dateString);
  };

  const handleSaveDate = () => {
    if (!selectedDate || !appointmentTitle || !appointmentDetails) {
      alert("Please fill out all fields.");
      return;
    }

    const formattedDate = moment(selectedDate).format("YYYYMMDD");
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      appointmentTitle
    )}&details=${encodeURIComponent(
      appointmentDetails
    )}&dates=${formattedDate}/${formattedDate}`;

    Linking.openURL(calendarUrl).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
        >
          <Ionicons name="arrow-back" size={24} color="#2D2D5F" />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>
          {/* Set Appointment Date */}
          {t("pregnancyAD")}
        </Text>
        <Text style={styles.pageSubTitle}>
          {/* Set an appointment date to receive a reminder on the due date. */}
          {t("pregnancyADInfo")}
        </Text>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.formContainer}>
            <View>
              <Text style={styles.label}>{t("title")}</Text>
              <TextInput
                style={styles.input}
                value={appointmentTitle}
                onChangeText={setAppointmentTitle}
                placeholder={t("titleInput")}
              />
            </View>
            <View>
              <Text style={styles.label}>{t("details")}</Text>
              <TextInput
                style={styles.input}
                value={appointmentDetails}
                onChangeText={setAppointmentDetails}
                placeholder={t("detailsInput")}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        <Calendar
          onDayPress={handleDatePress}
          markedDates={{
            [selectedDate]: {
              selected: true,
              marked: true,
              selectedColor: "#2D2D5F",
            },
          }}
          theme={{
            calendarBackground: "#ffffff",
            selectedDayBackgroundColor: "#2D2D5F",
            todayTextColor: "#2D2D5F",
            dayTextColor: "#2D2D5F",
            textDisabledColor: "#d9e1e8",
            arrowColor: "#2D2D5F",
            monthTextColor: "#2D2D5F",
          }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleSaveDate}
            style={styles.buttonClickMe}
          >
            <Text style={styles.buttonText}>{t("saveDate")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default PregApp;

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    paddingBottom: 35,
    paddingTop: 40,
  },
  pageTitle: {
    fontSize: 24,
    color: "#2D2D5F",
    fontWeight: "500",
  },
  pageSubTitle: {
    fontSize: 14,
    color: "#2D2D5F",
    marginTop: 10,
    marginBottom: 20,
  },
  formContainer: {
    marginBottom: 20,
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "500",
  },
  input: {
    height: 60,
    borderColor: "#C4C4C4",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonClickMe: {
    height: 55,
    backgroundColor: "#2D2D5F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  backIcon: {
    position: "absolute",
    top: 15,
    left: 0,
    zIndex: 1,
  },
});
