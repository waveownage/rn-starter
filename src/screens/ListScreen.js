import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: 'Friend 1', age: "20", key: '1' },
        { name: 'Friend 2', age: "45", key: '2' },
        { name: 'Friend 3', age: "32", key: '3' },
        { name: 'Friend 4', age: "27", key: '4' },
        { name: 'Friend 5', age: "53", key: '5' },
        { name: 'Friend 6', age: "30", key: '6' },
        { name: 'Friend 7', age: "18", key: '7' },
        { name: 'Friend 8', age: "35", key: '8' },
        { name: 'Friend 9', age: "26", key: '9' }
    ];
    return (
    <FlatList 
    horizontal={false}
    showsHorizontalScrollIndicator={false}
    keyExtractor={friend => friend.name}
    data={friends} 
    renderItem={({ item }) => {
        return (<Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>)
    }}
    />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen