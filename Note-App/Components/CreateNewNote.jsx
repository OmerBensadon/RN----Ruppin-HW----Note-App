import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Button } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { Card } from "@rneui/themed";
import { Camera, CameraType } from "expo-camera";

const CreateNewNote = (props) => {
  const [enteredNote, setNote] = useState("");

  const navigation = useNavigation();


  const btnCreateNoteHandler = () => {
    console.log(enteredNote, "New Note");
    setNote("");

  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Card style={style.container}>
          <View>
            <Text>Note </Text>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <TextInput
                value={enteredNote}
                onChangeText={setNote}
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
      </TouchableWithoutFeedback>
      <Card>
        <Button onPress={(btnCreateNoteHandler)}>
          Create New Note
        </Button>
      </Card>
    </>
  );
};

const style = StyleSheet.create({
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
export default CreateNewNote;
