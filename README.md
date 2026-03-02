# 🚀 RN Basecode

A production-ready React Native Expo boilerplate with TypeScript.

## ✅ What's Included

| Feature | Package |
|---|---|
| Framework | Expo SDK 55 + TypeScript |
| Styling | NativeWind (TailwindCSS) |
| Navigation | Expo Router (Stack) |
| Analytics | @microsoft/react-native-clarity |
| Toasts | react-native-toast-message |
| SVG Support | react-native-svg |
| Network Detection | @react-native-community/netinfo |
| Animations | react-native-reanimated |

## 📁 Project Structure

```
├── app/                    # Expo Router screens
│   ├── _layout.tsx         # Root layout (Stack + providers)
│   ├── index.tsx           # Home screen
│   └── details.tsx         # Details screen
├── src/
│   ├── components/         # Reusable components
│   │   ├── OfflineBanner   # Auto-show when offline
│   │   ├── OnlineBanner    # Auto-show when back online
│   │   └── ToastConfig     # Custom toast styles
│   ├── hooks/              # Custom hooks
│   │   └── useNetworkStatus
│   ├── constants/          # App constants & colors
│   ├── utils/              # Utility functions (Clarity init)
│   └── types/              # TypeScript types
├── tailwind.config.js
├── metro.config.js
├── babel.config.js
└── global.css
```

## 🏃 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npx expo start

# Run on Android
npx expo run:android

# Run on iOS
npx expo run:ios
```

## 📡 Network Detection

The app automatically shows/hides banners:
- **🔴 Red banner** slides in when internet disconnects
- **🟢 Green banner** briefly appears when connection is restored

## 🎨 NativeWind Usage

```tsx
<View className="flex-1 bg-white p-5">
  <Text className="text-2xl font-bold text-gray-900">Hello!</Text>
</View>
```

## 📊 Microsoft Clarity

Clarity is auto-initialized on app start. Project ID: `v7h03sxqrn`

---

Built with ❤️
