import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Card, Button } from "@rneui/base";
import CreateNewNote from "./CreateNewNote";


initNote = [
  { id: 0, categorieId: 0, text: "This is our first fake note" },
  { id: 1, categorieId: 1, text: "And I'm the seconed fake note" },
];
const InsideCategorie = (props) => {
  const [isClick, setIsClick] = useState(true);


  const addNoteHandler = () =>{
        console.log("New Note");
        setIsClick(false);
  }
  const switchAndAddNoteHandler =  (newNote) => {
    console.log(newNote, ",New Note in InsideCategorie comp");
    setIsClick(true);
    //  setCategorieArray((prevCategories) => {
    //   let newArray = [newCategorie, ...prevCategories];
    //   console.log(newArray)
    //   return newArray;
    // })
  }
  return (
    <>
      {isClick ? (
        <Card>
          <View>
            <Text>The name of the categorie</Text>
          </View>
          <Card>
            <Button onPress={addNoteHandler}> Add Note!</Button>
          </Card>
        </Card>
      ) : (
        <Card>
          <CreateNewNote onSaveNoteItem={switchAndAddNoteHandler} />
        </Card>
      )}
    </>
  );
};

export default InsideCategorie;

const styles = StyleSheet.create({});
