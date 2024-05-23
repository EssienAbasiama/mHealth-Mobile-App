import { useEffect, useState } from "react";
import SplashScreen from "./app/screens/SplashScreen";
import Onboarding from "./app/screens/Onboarding";

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
    return () => {};
  }, []);

  return <>{isShowSplash ? <SplashScreen /> : <Onboarding />}</>;
}
