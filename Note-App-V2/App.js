import { StyleSheet, Text, View } from "react-native";
import Categories from "./Componets/Categories";
import CreateNewNote from "./Componets/CreateNewNote";
import InsideCategorie from "./Componets/InsideCategorie";
import AllScreens from "./Screens/AllScreens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";


const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
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
            options={{ title: "Create The Best Note EVER!" }}
          />
          <Stack.Screen
            name={AllScreens.NOTE_SCREEN}
            component={CreateNewNote}
            options={{ title: "Create The Best Note EVER!" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
