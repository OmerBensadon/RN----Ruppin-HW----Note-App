import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import CategoriesItem from "./CategoriesItem";
import { Button, Card } from "@rneui/base";
import CreateNewCategorie from "./CreateNewCategorie";
import { useCategorie } from "../Function/CategorieContextProvider";

const Categories = (props) => {
  const { categorieArray, setNewCategorie, changeCategorieHandler } =
    useCategorie();

  const [isClick, setIsClick] = useState(false);

  const addCategorieHandler = () => {
    setIsClick(true);
  };

  const switchAndAddNameHandler = (newCategorie) => {
    setIsClick(false);
    setNewCategorie(newCategorie);
  };
  return (
    <>
      {!isClick ? (
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
