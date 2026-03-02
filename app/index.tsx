import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import Svg, { Circle, Rect } from "react-native-svg";

export default function HomeScreen() {
  const router = useRouter();

  const showToast = (type: "success" | "error" | "info") => {
    Toast.show({
      type,
      text1: type === "success" ? "Success!" : type === "error" ? "Error!" : "Info",
      text2: `This is a ${type} toast message example.`,
      visibilityTime: 3000,
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-5 pt-6">
        {/* Header */}
        <View className="mb-8">
          <Text className="text-3xl font-bold text-gray-900">
            🚀 RN Basecode
          </Text>
          <Text className="text-base text-gray-500 mt-2">
            React Native Expo + TypeScript boilerplate
          </Text>
        </View>

        {/* SVG Demo */}
        <View className="bg-purple-50 rounded-2xl p-5 mb-5 items-center">
          <Text className="text-lg font-semibold text-gray-800 mb-3">
            react-native-svg
          </Text>
          <Svg height="80" width="200" viewBox="0 0 200 80">
            <Circle cx="40" cy="40" r="30" fill="#6C3AED" opacity={0.8} />
            <Circle cx="100" cy="40" r="30" fill="#06D6A0" opacity={0.8} />
            <Rect x="140" y="10" width="50" height="60" rx="12" fill="#EC4899" opacity={0.8} />
          </Svg>
        </View>

        {/* Toast Demo */}
        <View className="bg-gray-50 rounded-2xl p-5 mb-5">
          <Text className="text-lg font-semibold text-gray-800 mb-3">
            Toast Messages
          </Text>
          <View className="flex-row gap-2">
            <TouchableOpacity
              className="flex-1 bg-green-500 py-3 rounded-xl items-center"
              onPress={() => showToast("success")}
            >
              <Text className="text-white font-semibold">Success</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 bg-red-500 py-3 rounded-xl items-center"
              onPress={() => showToast("error")}
            >
              <Text className="text-white font-semibold">Error</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 bg-blue-500 py-3 rounded-xl items-center"
              onPress={() => showToast("info")}
            >
              <Text className="text-white font-semibold">Info</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Navigation Demo */}
        <TouchableOpacity
          className="bg-purple-600 py-4 rounded-2xl items-center mb-5"
          onPress={() => router.push("/details")}
        >
          <Text className="text-white font-bold text-base">
            Go to Details Screen →
          </Text>
        </TouchableOpacity>

        {/* Setup Checklist */}
        <View className="bg-gray-50 rounded-2xl p-5 mb-10">
          <Text className="text-lg font-semibold text-gray-800 mb-3">
            ✅ Setup Checklist
          </Text>
          {[
            "Expo + TypeScript",
            "NativeWind (TailwindCSS)",
            "Expo Router (Stack Navigation)",
            "Microsoft Clarity Analytics",
            "react-native-toast-message",
            "react-native-svg",
            "@react-native-community/netinfo",
            "Auto Offline/Online Banner",
          ].map((item, index) => (
            <View key={index} className="flex-row items-center py-1.5">
              <Text className="text-green-500 mr-2">✓</Text>
              <Text className="text-gray-700 text-sm">{item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
