import React, { useEffect, useRef, useState } from "react";
import { Animated, Text, StyleSheet, Dimensions } from "react-native";
import { useNetworkStatus } from "../hooks/useNetworkStatus";

const { width } = Dimensions.get("window");

const OnlineBanner: React.FC = () => {
  const { isConnected } = useNetworkStatus();
  const slideAnim = useRef(new Animated.Value(-100)).current;
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    if (isConnected === false) {
      setWasOffline(true);
    } else if (isConnected === true && wasOffline) {
      // Show "Back Online" banner briefly
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 80,
        friction: 10,
      }).start(() => {
        // Auto-hide after 2 seconds
        setTimeout(() => {
          Animated.timing(slideAnim, {
            toValue: -100,
            duration: 300,
            useNativeDriver: true,
          }).start(() => setWasOffline(false));
        }, 2000);
      });
    }
  }, [isConnected]);

  if (!wasOffline || isConnected === false) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: slideAnim }] },
      ]}
    >
      <Text style={styles.icon}>✅</Text>
      <Text style={styles.text}>Back Online</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#22C55E",
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    width: width,
  },
  icon: {
    fontSize: 16,
    marginRight: 8,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default OnlineBanner;
