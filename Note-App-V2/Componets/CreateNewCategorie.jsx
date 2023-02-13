import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Button, Card } from "@rneui/base";


const CreateNewCategorie = (props) => {
  const [categorieName, setCategorieName] = useState("");
  const [isClick, setIsClick] = useState(true);

  const onSubmitHandler = () => {
    console.log(categorieName, ",New Categorie");
    const newCategorie = {
      categorie: categorieName,
      id: Math.random() * 1000,
      notes: [],
    };
    console.log(newCategorie);
    setIsClick(false);
    setCategorieName("");
    props.onSaveNewCategorie(newCategorie);
  }; // Sending the Data to Categories.jsx

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Card>
          <View>
            <Text>Create New Categorie</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <TextInput
                value={categorieName}
                onChangeText={setCategorieName}
                placeholder="Please write your Categorie name here"
                placeholderTextColor="gray"
                type="text"
                editable
                numberOfLines={4}
                multiline
                maxLength={100}
                height={50}
              ></TextInput>
            </KeyboardAvoidingView>
          </View>
        </Card>
      </TouchableWithoutFeedback>
      <Card>
        <Button onPress={onSubmitHandler}>Create New Categorie!</Button>
      </Card>
    </>
  );
};

export default CreateNewCategorie;

const styles = StyleSheet.create({});
