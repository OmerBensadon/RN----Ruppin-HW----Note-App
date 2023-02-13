import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Card } from "@rneui/base";

const NoteItem = (props) => {
  const deleteClickedHandler = () => {
    props.onDeleteClick();
  };

  return (
    <Card>
      <View>
        <Text>{props.text}</Text>
        <Button onPress={deleteClickedHandler}>DELETE</Button>
      </View>
    </Card>
  );
};

export default NoteItem;

const styles = StyleSheet.create({});
