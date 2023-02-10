import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import AllScreens from "../ScreenPages/AllScreens";

const CategorieItem = (props) => {
  const navigation = useNavigation();

  navigateToCategorieHandler = () => {
    // navigation.push(AllScreens.CATGORIE_SCREEN, categorie);
    console.log("Why?");
  };

  return (
    <Pressable onPress={navigateToCategorieHandler}>
      <Card style={styles.container}>
        <View>
          <Text>{props.name}</Text>
        </View>
      </Card>
    </Pressable>
  );
};

export default CategorieItem;

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
