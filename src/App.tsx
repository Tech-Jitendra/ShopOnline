import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { AppContextProvider } from "./Context/AppContext";
import MainScreen from "./Screens/MainScreen";

// export default function Main() {
//   return (
//     <PaperProvider>
//       <AppContextProvider>
//         <MainScreen />
//       </AppContextProvider>
//     </PaperProvider>
//   );
// }

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Main() {
  return (
    <PaperProvider>
      <AppContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={MainScreen} />
            {/* Add more screens here if needed */}
          </Stack.Navigator>
        </NavigationContainer>
      </AppContextProvider>
    </PaperProvider>
  );
}
