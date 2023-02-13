import { StyleSheet, Text, View } from "react-native";
import Categories from "./Componets/Categories";
import InsideCategorie from "./Componets/InsideCategorie";
import AllScreens from "./Screens/AllScreens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import CategorieContextProvider from "./Function/CategorieContextProvider";

const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <CategorieContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={AllScreens.HOME_SCREEN}
              component={Categories}
              options={{ title: "My Notes! Best Note App EVER!!" }}
            />
            <Stack.Screen
              name={AllScreens.NOTESARRAY_SCREEN}
              component={InsideCategorie}
              options={{ title: "Categories" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CategorieContextProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: "12px",
    border: "1px solid #40005d",
    padding: "1rem 2rem",
    margin: "2rem auto",
    width: "50rem",
    flex: "0",
  },
});
