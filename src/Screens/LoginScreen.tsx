// src/screens/auth/LoginScreen.tsx
import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  TextInput,
  Button,
  Text,
  Portal,
  Modal,
  Title,
  HelperText,
  useTheme,
} from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  // Form States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Modal States
  const [isModalVisible, setModalVisible] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetTimer, setResetTimer] = useState(0);
  const [canResend, setCanResend] = useState(true);

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle login
  const handleLogin = async () => {
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      return;
    }
    setEmailError("");
    setIsLoading(true);

    try {
      // Implement your login logic here
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulated API call
      // Navigate to main app
      // navigation.navigate('MainApp');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle password reset request
  const handleResetRequest = async () => {
    if (!validateEmail(resetEmail)) {
      return;
    }

    try {
      setCanResend(false);
      setResetTimer(60);
      // Implement your password reset logic here
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
    } catch (error) {
      console.error(error);
    }
  };

  // Reset timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resetTimer > 0) {
      interval = setInterval(() => {
        setResetTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resetTimer]);

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInDown"
        duration={1000}
        style={styles.headerContainer}
      >
        <Title style={styles.title}>Welcome Back</Title>
        <Text style={styles.subtitle}>Sign in to continue</Text>
      </Animatable.View>

      <Animatable.View
        animation="fadeInUp"
        duration={1000}
        delay={300}
        style={styles.formContainer}
      >
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          style={styles.input}
          error={!!emailError}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        {!!emailError && <HelperText type="error">{emailError}</HelperText>}

        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.forgotPassword}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.loginButton}
          loading={isLoading}
          disabled={isLoading}
        >
          Login
        </Button>
      </Animatable.View>

      {/* Forgot Password Modal */}
      <Portal>
        <Modal
          visible={isModalVisible}
          onDismiss={() => setModalVisible(false)}
          contentContainerStyle={styles.modalContainer}
        >
          <Animatable.View animation="zoomIn" duration={300}>
            <Title style={styles.modalTitle}>Reset Password</Title>
            <Text style={styles.modalText}>
              Enter your email address to receive a password reset link
            </Text>

            <TextInput
              label="Email"
              value={resetEmail}
              onChangeText={setResetEmail}
              mode="outlined"
              style={styles.modalInput}
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <Button
              mode="contained"
              onPress={handleResetRequest}
              style={styles.resetButton}
              disabled={!canResend}
            >
              {canResend ? "Send Reset Link" : `Resend in ${resetTimer}s`}
            </Button>

            <Button
              mode="text"
              onPress={() => setModalVisible(false)}
              style={styles.cancelButton}
            >
              Cancel
            </Button>
          </Animatable.View>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  headerContainer: {
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1976D2",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 8,
  },
  formContainer: {
    padding: 20,
  },
  input: {
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#1976D2",
  },
  loginButton: {
    padding: 4,
    backgroundColor: "#1976D2",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  modalTitle: {
    textAlign: "center",
    marginBottom: 10,
    color: "#1976D2",
  },
  modalText: {
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
  },
  modalInput: {
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  resetButton: {
    marginBottom: 10,
    backgroundColor: "#1976D2",
  },
  cancelButton: {
    marginTop: 10,
  },
});

export default LoginScreen;
