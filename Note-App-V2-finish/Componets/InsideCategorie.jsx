import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Card, Button } from "@rneui/base";
import CreateNewNote from "./CreateNewNote";
import NoteList from "./NoteList";
import { useCategorie } from "../Function/CategorieContextProvider";

const InsideCategorie = (props) => {
  const [categorie, setCategorie] = useState(props.route.params.categorie);
  const { changeCategorieHandler } = useCategorie();
  const [isClick, setIsClick] = useState(false);

  const addNoteHandler = () => {
    setIsClick(true);
  };

  const switchAndAddNoteHandler = (newNote) => {
    setIsClick(false);
    const newCate = { ...categorie };
    newCate.notes.push(newNote);
    setCategorie(newCate);
    changeCategorieHandler(newCate);
  };
  const deleteNoteHandler = (notesArray) => {
    const newCate = { ...categorie, notes: notesArray };
    setCategorie(newCate);
    changeCategorieHandler(newCate);
  };
  return (
    <>
      {!isClick ? (
        <Card>
          <View>
            <Text>{categorie.categorie}</Text>
            <NoteList notes={categorie.notes} onDelete={deleteNoteHandler} />
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
