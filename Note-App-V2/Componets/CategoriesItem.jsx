import { useNavigation } from "@react-navigation/native";
import { Card } from "@rneui/base";
import { useContext } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import AllScreens from "../Screens/AllScreens";

const CategoriesItem = ({ categorie }) => {
  const navigation = useNavigation();

  const navegateToCategorieHandler = (categorie) => {
    console.log(categorie);
    navigation.push(AllScreens.NOTESARRAY_SCREEN);
  };
  console.log(categorie);
  return (
    <>
      {categorie && (
        <Pressable onPress={navegateToCategorieHandler}>
          <Card style={styles.container}>
            <View style={styles.text}>
              <Text>{categorie.categorie}</Text>
              <Text>{categorie.notes.length}</Text>
            </View>
          </Card>
        </Pressable>
      )}
    </>
  );
};

export default CategoriesItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: "12px",
    border: "1px solid #40005d",
    padding: "1rem 2rem",
    margin: "2rem auto",
    width: "50rem",
  },
  text: {
    display: "flex",
    justifyContent: "space-around",
    // alignItems:"baseline",
  },
});
