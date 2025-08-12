import { useFonts } from "expo-font";
import AppNavigator from "../navigation/AppNavigator";
import "./globals.css";

export default function RootLayout() {
  const [loaded] = useFonts({
    JetBrainsMonoBold: require("../assets/fonts/JetBrainsMono-Bold.ttf"),
    JetBrainsMonoExtraBold: require("../assets/fonts/JetBrainsMono-ExtraBold.ttf"),
    JetBrainsMonoExtraLight: require("../assets/fonts/JetBrainsMono-ExtraLight.ttf"),
    JetBrainsMonoLight: require("../assets/fonts/JetBrainsMono-Light.ttf"),
    JetBrainsMonoMedium: require("../assets/fonts/JetBrainsMono-Medium.ttf"),
    JetBrainsMonoRegular: require("../assets/fonts/JetBrainsMono-Regular.ttf"),
    JetBrainsMonoSemiBold: require("../assets/fonts/JetBrainsMono-SemiBold.ttf"),
    JetBrainsMonoThin: require("../assets/fonts/JetBrainsMono-Thin.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return <AppNavigator />;
}
