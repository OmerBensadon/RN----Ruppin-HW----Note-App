import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Card } from "@rneui/base";
import { KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const CreateNewNote = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const [isClick, setIsClick] = useState(true);

  const onSubmitHandler = () => {
    console.log(enteredText, ",New Note log");
    const noteText = {};
    setIsClick(false);
    setEnteredText("");
    props.onSaveNoteItem(noteText);
  };

  return (
    <>
      <Card style={styles.container}>
        <View>
          <Text>Wirte a new note!</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <TextInput
              value={enteredText}
              onChangeText={setEnteredText}
              placeholder="Please write your note here"
              placeholderTextColor="gray"
              type="text"
              editable
              numberOfLines={4}
              multiline
              maxLength={100}
              height={250}
            ></TextInput>
          </KeyboardAvoidingView>
        </View>
      </Card>
      <Card>
        <Button onPress={onSubmitHandler}>Create New Note</Button>
      </Card>
    </>
  );
};

export default CreateNewNote;

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
