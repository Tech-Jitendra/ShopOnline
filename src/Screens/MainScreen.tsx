// screens/MainScreen.js
import React from "react";
import { View, Text } from "react-native";
import { Button, Switch } from "react-native-paper";
import { useAppContext } from "../Context/AppContext";

const MainScreen = () => {
  const { theme, toggleTheme, user, setUser } = useAppContext();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Welcome {user || "Guest"}</Text>
      <Switch
        value={theme === "dark"}
        onValueChange={toggleTheme}
        style={{ marginVertical: 10 }}
      />
      <Button
        mode="contained"
        onPress={() => {
          setUser(user ? null : "John Doe")}}
        style={{ marginTop: 20 }}
      >
        {user ? "Logout" : "Login"}
      </Button>
    </View>
  );
};

export default MainScreen;
