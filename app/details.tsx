import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

export default function DetailsScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          title: "Details",
          headerBackTitle: "Home",
        }}
      />
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 px-5 pt-6 items-center justify-center">
          {/* Decorative SVG */}
          <Svg height="120" width="120" viewBox="0 0 120 120">
            <Path
              d="M60 10 L110 40 L110 80 L60 110 L10 80 L10 40 Z"
              fill="#6C3AED"
              opacity={0.15}
              stroke="#6C3AED"
              strokeWidth={2}
            />
            <Path
              d="M60 25 L95 45 L95 75 L60 95 L25 75 L25 45 Z"
              fill="#6C3AED"
              opacity={0.3}
            />
          </Svg>

          <Text className="text-2xl font-bold text-gray-900 mt-6 mb-2">
            Details Screen
          </Text>
          <Text className="text-base text-gray-500 text-center mb-8 px-5">
            This is a Stack navigation screen. The Offline/Online banner works
            globally across all screens.
          </Text>

          <TouchableOpacity
            className="bg-gray-900 py-4 px-8 rounded-2xl"
            onPress={() => router.back()}
          >
            <Text className="text-white font-bold text-base">← Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
