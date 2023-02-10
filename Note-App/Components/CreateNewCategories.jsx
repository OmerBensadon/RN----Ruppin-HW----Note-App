import {
  View,
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { React, useContext, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { Button, ListItem } from "@rneui/base";
import { Card } from "@rneui/themed";

const CreateNewCategories = (props) => {
  const [CategorieName, setCategorieName] = useState("");
  const [isClick, setIsClick] = useState(true);


  const onSubmitHandler = () => {
    console.log(CategorieName, "New Categorie");
    const newCategorie = {
      name: CategorieName,
    };
    setIsClick(false)
    setCategorieName("");
    props.onSaveNewCategorie(newCategorie);
  };
  return (
    <>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Card style={style.container}>
            <View>
              <Text>New Categorie</Text>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <TextInput
                  value={CategorieName}
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
        <Button onPress={onSubmitHandler}>Create New Categorie</Button>
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
export default CreateNewCategories;
