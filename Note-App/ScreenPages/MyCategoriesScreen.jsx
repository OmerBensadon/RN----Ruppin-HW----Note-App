import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CategorieItem from "../Components/CategorieItem";
import { Button, Card, ListItem } from "@rneui/base";
import CreateNewCategories from "../Components/CreateNewCategories";

const initCateg = [
  { id: 0, categorie: "Work" },
  { id: 1, categorie: "Personal" },
];

const MyCategoriesScreen = () => {
  const [isClick, setIsClick] = useState(true);
  const [categoriesArray, setCategoriesArray] = useState(initCateg);

  const addCategoriehandler = () => {
    setIsClick(false);
    // navigation.puse(CreateNewCategories,)
    console.log("New Categorie");
  };
  const addNewCategorie = (newCategorie) => {
    const categoriesNewName = {
      id: Math.random() * 1000,
      categorie: newCategorie,
    };
    setCategoriesArray({ ...categoriesArray, categoriesNewName });
    console.log();
    setIsClick(true);
  };

  return (
    <>
      {isClick ? (
        <Card style={styles.container}>
          <View>
            <Text>My Categories</Text>
            <CategorieItem />
          </View>
          <Card>
            <Button onPress={addCategoriehandler}>Add Categorie</Button>
          </Card>
        </Card>
      ) : (
        <CreateNewCategories onSaveNewCategorie={addNewCategorie} />
      )}
    </>
  );
};

export default MyCategoriesScreen;

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
