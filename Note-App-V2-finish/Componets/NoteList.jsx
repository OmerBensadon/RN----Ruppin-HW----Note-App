import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import NoteItem from "./NoteItem";
import { Button, Card } from "@rneui/base";
import CreateNewNote from "./CreateNewNote";
import { useCategorie } from "../Function/CategorieContextProvider";

const NoteList = (props) => {
  const [isClick, setIsClick] = useState(true);
  const [noteList, setNoteList] = useState(props.notes);

  const switchAndAddNoteHandler = (newNote) => {
    setIsClick(true);
    setNoteList((prevNotes) => {
      let newArray = [newNote, ...prevNotes];
      return newArray;
    });
  };
  const deleteNoteHandler = (index) => {
    let newArray = [...noteList];
    newArray.splice(index, 1);
    setNoteList(newArray);
    props.onDelete(newArray);
  };
  return (
    <>
      {isClick ? (
        <>
          {noteList.map((note, ind) => (
            <NoteItem
              text={note}
              key={ind}
              onDeleteClick={() => deleteNoteHandler(ind)}
            />
          ))}
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
