import * as React from "react";
import { database } from "./database";
import MainScreen from "./Screens/MainScreen";
import CartScreen from "./Screens/CartScreen";
import { AppContextProvider } from "./Context/AppContext";
import { Provider as PaperProvider } from "react-native-paper";
import { DatabaseProvider } from "@nozbe/watermelondb/DatabaseProvider";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Main() {
  return (
    <DatabaseProvider database={database}>
      <PaperProvider>
        <AppContextProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
              <Stack.Screen name="Main" component={MainScreen} />
              <Stack.Screen name="CartScreen" component={CartScreen} />
              {/* Add more screens here if needed */}
            </Stack.Navigator>
          </NavigationContainer>
        </AppContextProvider>
      </PaperProvider>
    </DatabaseProvider>
  );
}
