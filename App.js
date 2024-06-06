import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./app/screens/SplashScreen";
import Onboarding from "./app/screens/Onboarding/Onboarding";
import SignIn from "./app/screens/Auth/SignIn";
import SignUp from "./app/screens/Auth/SignUp";
import Main from "./app/screens/Main/Main";
import TopicDetails from "./app/screens/TopicDetails/TopicDetails";
import SubTopic from "./app/screens/SubTopic/SubTopic";
import MainTopicDetail from "./app/screens/TopicDetails/MainTopicDetail";
import MainTopicSubTopic from "./app/screens/SubTopic/MainTopicSubTopic";
import i18next, { languageResources } from "./services/i18next";
import { useTranslation } from "react-i18next";
import languagesList from "./services/languagesList.json";

const Stack = createStackNavigator();

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  const changeLng = (lng) => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isShowSplash ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home">
              {(props) => (
                <Main
                  {...props}
                  languageResources={languageResources}
                  languagesList={languagesList}
                  changeLng={changeLng}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="TopicDetailScreen" component={TopicDetails} />
            <Stack.Screen name="SubTopicScreen" component={SubTopic} />
            <Stack.Screen
              name="SubMainTopicScreen"
              component={MainTopicSubTopic}
            />
            <Stack.Screen
              name="MainTopicDetailScreen"
              component={MainTopicDetail}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
