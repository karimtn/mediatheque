import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "./Card";

const List = ({ navigation, title, content }) => {
  return (
    <View style={StyleSheet.list}>
      <View>
        <Text>{title}</Text>
      </View>
      <FlatList
        data={content}
        horizontal={true}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card navigation={navigation} item={item} />}
      />
    </View>
  );
};

export default List;
