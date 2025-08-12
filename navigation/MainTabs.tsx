import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { useColorScheme } from "react-native";
import CalendarScreen from "../screens/CalendarScreen";
import DailyGuideScreen from "../screens/DailyGuideScreen";
import ProgressScreen from "../screens/ProgressScreen";
import WorkoutBuilderScreen from "../screens/WorkoutBuilderScreen";

export type TabParamList = {
  Calendar: undefined;
  Workout: undefined;
  Daily: undefined;
  Progress: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function MainTabs() {
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#6366f1", // indigo-500
        tabBarInactiveTintColor: colorScheme === "dark" ? "#9ca3af" : "#6b7280",
        tabBarIcon: ({ color, size }) => {
          let iconName: React.ComponentProps<typeof Ionicons>["name"] =
            "ellipse";
          switch (route.name) {
            case "Calendar":
              iconName = "calendar";
              break;
            case "Workout":
              iconName = "barbell";
              break;
            case "Daily":
              iconName = "fast-food";
              break;
            case "Progress":
              iconName = "stats-chart";
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Workout" component={WorkoutBuilderScreen} />
      <Tab.Screen name="Daily" component={DailyGuideScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
    </Tab.Navigator>
  );
}
