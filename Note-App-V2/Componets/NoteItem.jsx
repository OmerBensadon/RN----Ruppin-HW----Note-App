import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card } from '@rneui/base';




const NoteItem = (props) => {
  return (
    <Card>
      <View>
        {props.text}
      </View>
    </Card>
  );
}

export default NoteItem

const styles = StyleSheet.create({})