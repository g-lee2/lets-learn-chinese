# Let's Write Chinese

#### By Grace Lee

## Table of Contents

- [Description of Application](#description-of-application)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [To run the app on your own device](#to-run-the-app-on-your-own-device)
- [Running the App on a Simulator/Emulator](#running-the-app-on-a-simulatoremulator)
- [For iOS (using Xcode) Installation/Setup](#for-ios-using-xcode)
- [For Android (using Android Studio) Installation/Setup](#for-android-using-android-studio)
- [General Setup/Installation Requirements](#setupinstallation-requirements)
- [Credit](#credit)
- [Contributing](#contributing)

#### Description of Application

This is a educational app designed to help users practice and memorize Chinese characters. The app provides an interactive interface for selecting HSK levels, tracing characters, and testing memory retention.

## Technologies Used

- _Expo_
- _Expo Router_
- _React Native_
- _NativeWind_
- _AsyncStorage_
- _FlashList_
- _React Native SVG_

## Prerequisites

Before you start, make sure you have the following installed on your machine:

-Node.js (with npm): Download and install [Node.js](https://nodejs.org/)

-Expo CLI: Install Expo CLI globally using npm:

```console
npm install -g expo-cli
```

### To run the app on your own device

Install the Expo Go App:

-On your iPhone, go to the App Store and install the Expo Go app.
-On your Android device, go to the Google Play Store and install the Expo Go app.

Scan the QR Code:

-Open the Expo Go app on your device.
-Use the app’s built-in QR code scanner to scan the QR code displayed in your browser after running npx expo start.
-This will open your app on your device for testing.

### Running the App on a Simulator/Emulator

If you prefer to run the app on a simulator or emulator, follow the instructions below:

### For iOS (using Xcode)

> **Note**: Xcode is only available on macOS, so you'll need an Apple product (Mac) to run the iOS Simulator.

Install Xcode:

-Download and install [Xcode from the Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12).
-After installation, open Xcode and follow the prompts to complete the initial setup.

Install Xcode Command Line Tools:

- Open Terminal and run:

```console
xcode-select --install
```

Set Up iOS Simulator:

-Open Xcode and go to Preferences > Components to install any necessary simulators (e.g., the latest iOS version).
-To launch a simulator, open Xcode, go to Xcode > Open Developer Tool > Simulator.
-Run the App on iOS Simulator:

-In the Expo Developer Tools, click on Run on iOS Simulator to open the app on your iOS simulator.

### For Android (using Android Studio)

Download and Install Android Studio:

-Download [Android Studio from the official website](https://developer.android.com/studio) and follow the installation instructions.

Set Up Android SDK:

-Open Android Studio, go to Preferences > Appearance & Behavior > System Settings > Android SDK.
-Install the latest Android SDK tools and any system images you may need.

Set Up Android Emulator:

-In Android Studio, go to Tools > AVD Manager and create a new Virtual Device (emulator).
-Choose a device model, select a system image, and finish the setup.
-Start the emulator by selecting it and clicking the Play button.

Run the App on Android Emulator:

-In the Expo Developer Tools, click on Run on Android device/emulator to open the app on your Android emulator.

## Setup/Installation Requirements

Clone this repository to your desktop:

```console
git clone https://github.com/g-lee2/lets-learn-chinese.git
```

Navigate to the project directory:

```console
cd lets-learn-chinese
```

Install all dependencies:

```console
npm install
```

Start the application:

**To run on Expo Go App**

```console
npx expo start
```

Open app on your device and scan the QR code in your browser or console.

**To run on iOS simulator**

```console
npx expo start i
```

**To run on Android Emulator**

```console
npx expo start a
```

## Known Bugs

- _No known bugs as of now_

## Credit

The JSON files `data/hsk-level-1.json`, `data/hsk-level-2.json`, `data/hsk-level-3.json`, `data/hsk-level-4.json`, `data/hsk-level-5.json`, `data/hsk-level-6.json` is sourced from:

### MIT License

- [gigacool](https://github.com/gigacool/hanyu-shuiping-kaoshi?tab=readme-ov-file) licensed under the MIT License.

### Creative Commons BY-NC License

- Source: [http://cedric.hartland.free.fr](http://cedric.hartland.free.fr)
- HSK source list from: [http://www.davidpetersson.com](http://www.davidpetersson.com)
- Translations from: [CEDICT Dictionary](http://www.mdbg.net)

Distributed under the Creative Commons BY-NC license.
