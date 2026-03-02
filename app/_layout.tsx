import "../global.css";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { toastConfig } from "../src/components/ToastConfig";
import OfflineBanner from "../src/components/OfflineBanner";
import OnlineBanner from "../src/components/OnlineBanner";
import { initClarity } from "../src/utils/clarity";

export default function RootLayout() {
  useEffect(() => {
    // Initialize Microsoft Clarity
    try {
      initClarity();
    } catch (error) {
      console.log("Clarity init error:", error);
    }
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <OfflineBanner />
      <OnlineBanner />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6C3AED",
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "700",
          },
          headerShadowVisible: false,
          animation: "slide_from_right",
        }}
      />
      <Toast config={toastConfig} />
    </SafeAreaProvider>
  );
}
