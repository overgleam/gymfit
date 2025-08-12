import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MainTabs from "./MainTabs";

export type RootStackParamList = {
  Root: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={MainTabs} />
    </Stack.Navigator>
  );
}
