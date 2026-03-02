import "../global.css";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { toastConfig } from "../src/components/ToastConfig";
import { useNetworkStatus } from "../src/hooks/useNetworkStatus";
import { initClarity } from "../src/utils/clarity";

export default function RootLayout() {
  const { isConnected } = useNetworkStatus();

  useEffect(() => {
    try {
      initClarity();
    } catch (error) {
      console.log("Clarity init error:", error);
    }
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      {isConnected === false ? (
        <Stack screenOptions={{ headerShown: false, animation: "fade" }}>
          <Stack.Screen name="no-internet" />
        </Stack>
      ) : (
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "#6C3AED" },
            headerTintColor: "#FFFFFF",
            headerTitleStyle: { fontWeight: "700" },
            headerShadowVisible: false,
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen name="index" options={{ title: "🚀 RN Basecode" }} />
          <Stack.Screen name="details" options={{ title: "Details" }} />
        </Stack>
      )}
      <Toast config={toastConfig} />
    </SafeAreaProvider>
  );
}
