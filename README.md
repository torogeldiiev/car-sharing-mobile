# Car Sharing Mobile App

React Native mobile application for the Car Sharing Platform (Kyrgyzstan Market).

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (installed automatically)
- For iOS: Xcode (Mac only)
- For Android: Android Studio

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure API URL**
   - Create `.env` file (copy from `.env.example`)
   - Update `API_BASE_URL` to point to your backend
   - For physical device: Use your computer's IP address

3. **Start the app**
   ```bash
   npm start
   ```
   
   Then:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your phone

## 📁 Project Structure

```
mobile-app/
├── src/
│   ├── config/          # Configuration files
│   │   └── api.ts       # API endpoints configuration
│   ├── navigation/      # Navigation setup
│   │   ├── AppNavigator.tsx
│   │   ├── AuthNavigator.tsx
│   │   └── MainNavigator.tsx
│   ├── screens/         # App screens
│   │   ├── auth/        # Authentication screens
│   │   │   ├── LoginScreen.tsx
│   │   │   └── RegisterScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── VehiclesScreen.tsx
│   │   ├── BookingsScreen.tsx
│   │   ├── TripsScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── services/        # API services
│   │   ├── api.ts       # Axios instance
│   │   └── authService.ts
│   └── types/           # TypeScript types
│       └── index.ts
├── App.tsx              # Main app entry
└── package.json
```

## 🔌 Connecting to Backend

The app connects to your backend API. Make sure:

1. **Backend is running** on `http://localhost:3000`
2. **For physical device testing:**
   - Find your computer's IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
   - Update `.env`: `API_BASE_URL=http://YOUR_IP:3000/api`

## 📱 Features

### ✅ Implemented
- User authentication (Login/Register)
- Navigation structure
- API service setup
- Token management
- Basic screens

### 🚧 To Be Implemented
- Vehicle listing and details
- Booking creation and management
- Trip tracking
- Real-time updates
- Maps integration
- Image uploads

## 🛠️ Development

### Run on iOS
```bash
npm run ios
```

### Run on Android
```bash
npm run android
```

### Run on Web
```bash
npm run web
```

## 📦 Dependencies

- **expo** - React Native framework
- **@react-navigation/native** - Navigation
- **axios** - HTTP client
- **@react-native-async-storage/async-storage** - Local storage

## 🔐 Authentication Flow

1. User registers/logs in
2. Token is stored in AsyncStorage
3. Token is automatically added to API requests
4. On 401 error, user is logged out

## 📝 Next Steps

1. Implement vehicle listing
2. Add booking functionality
3. Implement trip tracking
4. Add maps integration
5. Add image uploads

