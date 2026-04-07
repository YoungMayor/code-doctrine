---
name: mayrlabs-security-mobile
description: Mobile security guidelines handling secure storage, SSL pinning, and minimizing physical/local attack surfaces on iOS and Android.
license: MIT
metadata:
  author: MayR Labs
  version: "1.0"
---

# MayR Labs Security Doctrine: Mobile

## Purpose
To shield mobile applications from reverse engineering, insecure data storage, and network interception.

## Audience
Mobile developers and AI agents building iOS, Android, or cross-platform (React Native, Flutter) applications.

## Core Rules & Constraints

### 1. Secure Local Storage
- **Do NOT use SharedPreferences or AsyncStorage for Secrets**: These are unencrypted by default.
- ALWAYS use the native OS secure enclaves: **iOS Keychain** and **Android Keystore** for API keys, access tokens, and sensitive PII.

### 2. Network Security
- **Certificate/SSL Pinning**: Ensure apps strictly communicate with the intended server by pinning the SSL certificate or public key.
- Disallow fallback to cleared data or plain HTTP.

### 3. Application State & Obfuscation
- Clear highly sensitive data from memory when the application moves to the background.
- Ensure production builds are properly obfuscated and minified (e.g., ProGuard/R8 on Android) to raise the difficulty of reverse engineering.
- Implement biometric authentication (FaceID/TouchID) gates when accessing critical app areas.

## Examples & References

### ❌ Insecure Storage (React Native)
```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

// BANNED: Storing auth tokens in clear text
await AsyncStorage.setItem('auth_token', token);
```

### ✅ Secure Storage (React Native)
```javascript
import * as SecureStore from 'expo-secure-store';
// OR react-native-keychain

// Securely encrypted via OS Enclaves
await SecureStore.setItemAsync('auth_token', token);
```

## Inputs & Outputs
- **Input**: Implicit when scaffolding mobile architecture or adding local data persistence.
- **Output**: Employs secure enclaves, enforces HTTPS everywhere, and shields background state.
