import { View, Text } from "react-native";
import React, { createContext, useState } from "react";

export const NoteContext = createContext();



const NoteProvider = ({ children }) => {
  const [notesArry, setNoteArry] = useState(initNote);

const getNotes = (categoriesId) => {
  return notesArry.filter((note) => note.categoriesId === categoriesId);
};

const noteCounter = (categoriesId) => {
  return getNotes(categoriesId).length;
};

addNewNoteHandler = ({ text, categorieId }) => {
  const newNote = {
    id: Math.random() * 1000,
    categorieId,
    text,
  };
  setNoteArry([...notesArry, newNote]);
};

  return (
    <NoteContext.Provider
      value={(notesArry, addEventListener, getNotes, noteCounter)}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
