import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CategoriesItem from "./CategoriesItem";
import { Button, Card } from "@rneui/base";
import CreateNewCategorie from "./CreateNewCategorie";

const initCateg = [
  { id: 0, categorie: "Work", notes: [] },
  { id: 1, categorie: "Personal", notes: [] },
];

const Categories = (props) => {
  const [isClick, setIsClick] = useState(true);
  const [categorieArray, setCategorieArray] = useState(initCateg);


  const addCategorieHandler = () => {
    console.log("New Categorie");
    setIsClick(false);
  };

  const switchAndAddNameHandler =  (newCategorie) => {
    console.log(newCategorie, ",new name in Categories comp");
    setIsClick(true);
     setCategorieArray((prevCategories) => {
      let newArray = [newCategorie, ...prevCategories];
      console.log(newArray)
      return newArray;
    });
    
  };
  return (
    <>
      {isClick ? (
        <>
          <Card style={styles.container}>
            <View>
              {categorieArray.map((categorie, ind) => (
                <CategoriesItem categorie={categorie} key={ind} />
              ))}
            </View>
          </Card>
          <Card>
            <Button onPress={addCategorieHandler}> Add Categorie!</Button>
          </Card>
        </>
      ) : (
        <Card>
          <CreateNewCategorie onSaveNewCategorie={switchAndAddNameHandler} />
        </Card>
      )}
    </>
  );
};

export default Categories;

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
