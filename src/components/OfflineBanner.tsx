import React, { useEffect, useRef } from "react";
import {
  Animated,
  Text,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
} from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { useNetworkStatus } from "../hooks/useNetworkStatus";
import Svg, { Path, Circle, G } from "react-native-svg";

const { width, height } = Dimensions.get("window");

const OfflineBanner: React.FC = () => {
  const { isConnected } = useNetworkStatus();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (isConnected === false) {
      // Show full screen
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 80,
          friction: 10,
          useNativeDriver: true,
        }),
      ]).start();

      // Pulse animation loop for the icon
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.15,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      // Hide
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 0.8,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isConnected]);

  const handleRetry = () => {
    NetInfo.refresh();
  };

  if (isConnected !== false) return null;

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Animated.View
        style={[
          styles.content,
          { transform: [{ scale: scaleAnim }] },
        ]}
      >
        {/* Animated WiFi Off Icon */}
        <Animated.View
          style={[
            styles.iconContainer,
            { transform: [{ scale: pulseAnim }] },
          ]}
        >
          <Svg height="80" width="80" viewBox="0 0 24 24">
            <G fill="none" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {/* WiFi arcs */}
              <Path d="M1.5 8.5C4.8 5.2 8.2 3.5 12 3.5c3.8 0 7.2 1.7 10.5 5" opacity={0.3} />
              <Path d="M5 12c1.9-1.9 4.3-3 7-3s5.1 1.1 7 3" opacity={0.5} />
              <Path d="M8.5 15.5c1-1 2.2-1.5 3.5-1.5s2.5.5 3.5 1.5" opacity={0.7} />
              {/* Center dot */}
              <Circle cx="12" cy="19" r="1" fill="#EF4444" />
              {/* Cross line */}
              <Path d="M3 21L21 3" stroke="#EF4444" strokeWidth="2" />
            </G>
          </Svg>
        </Animated.View>

        <Text style={styles.title}>No Internet Connection</Text>
        <Text style={styles.subtitle}>
          Please check your Wi-Fi or mobile data{"\n"}and try again.
        </Text>

        {/* Retry Button */}
        <TouchableOpacity
          style={styles.retryButton}
          onPress={handleRetry}
          activeOpacity={0.8}
        >
          <Text style={styles.retryText}>↻ Try Again</Text>
        </TouchableOpacity>

        {/* Decorative dots */}
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.dot1]} />
          <View style={[styles.dot, styles.dot2]} />
          <View style={[styles.dot, styles.dot3]} />
        </View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: width,
    height: height,
    backgroundColor: "#FFFFFF",
    zIndex: 99999,
    elevation: 99999,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 40,
  },
  iconContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#FEF2F2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
    borderWidth: 2,
    borderColor: "#FECACA",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1F2937",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 36,
  },
  retryButton: {
    backgroundColor: "#EF4444",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 50,
    shadowColor: "#EF4444",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  retryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  dotsContainer: {
    position: "absolute",
    top: -60,
    left: -20,
    right: -20,
    bottom: -60,
  },
  dot: {
    position: "absolute",
    borderRadius: 50,
    backgroundColor: "#FEE2E2",
  },
  dot1: {
    width: 12,
    height: 12,
    top: 10,
    right: 30,
  },
  dot2: {
    width: 8,
    height: 8,
    bottom: 20,
    left: 10,
  },
  dot3: {
    width: 16,
    height: 16,
    top: "50%" as unknown as number,
    left: -10,
    opacity: 0.5,
  },
});

export default OfflineBanner;
