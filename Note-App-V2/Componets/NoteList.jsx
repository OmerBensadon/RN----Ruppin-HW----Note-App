import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import NoteItem from "./NoteItem";
import { Button, Card } from "@rneui/base";
import CreateNewNote from "./CreateNewNote";



const NoteList = (props) => {
  const [isClick, setIsClick] = useState(true);
  const [noteList, setNoteList] = useState([]);

  const addNoteHandler = () => {
    console.log("New Note");
    setIsClick(false);
  };

  const switchAndAddNoteHandler = (newNote) => {
    console.log(newNote, ",new name in NoteList comp");
    setIsClick(true);
    setNoteList((prevNotes) => {
      let newArray = [newNote, ...prevNotes];
      console.log(newArray);
      return newArray;
      
    });
  };
  return (
    <>
      {isClick ? (
        <>
          <Card style={styles.container}>
            <View>
              {noteList.map((note, ind) => (
                <NoteItem note={note} key={ind} />
              ))}
            </View>
          </Card>
          <Card>
            <Button onPress={addNoteHandler}> Add Note!</Button>
          </Card>
        </>
      ) : (
        <Card>
          <CreateNewNote onSaveNewNote={switchAndAddNoteHandler} />
        </Card>
      )}
    </>
  );
};

export default NoteList;

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
