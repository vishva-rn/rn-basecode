import "../global.css";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { toastConfig } from "../src/components/ToastConfig";
import OnlineBanner from "../src/components/OnlineBanner";
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
      <OnlineBanner />

      {isConnected === false ? (
        // No internet — only show the no-internet screen
        <Stack screenOptions={{ headerShown: false, animation: "fade" }}>
          <Stack.Screen name="no-internet" />
        </Stack>
      ) : (
        // Internet available — show normal app screens
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
        >
          <Stack.Screen name="index" options={{ title: "🚀 RN Basecode" }} />
          <Stack.Screen name="details" options={{ title: "Details" }} />
          <Stack.Screen
            name="no-internet"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      )}

      <Toast config={toastConfig} />
    </SafeAreaProvider>
  );
}
