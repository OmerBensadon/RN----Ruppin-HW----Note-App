import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateNewNote from "./Components/CreateNewNote";
import CreateNewCategories from "./Components/CreateNewCategories";
import MyCategoriesScreen from "./ScreenPages/MyCategoriesScreen";
import AllScreens from "./ScreenPages/AllScreens"
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();
function App(props) {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={AllScreens.HOME_SCREEN}
            component={MyCategoriesScreen}
            options={{ title: "Categories" }}
          />
          <Stack.Screen
            name="Create New Categories"
            component={CreateNewCategories}
          />
          <Stack.Screen name="Create New Note" component={CreateNewNote} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;
