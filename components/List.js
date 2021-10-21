import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const List = ({navigation, title, content}) => {
    return (
        <View style={StyleSheet.list}>
            <View>
                <Text>{title}</Text>
            </View>
            <FlatList 
                data={content}
                horizontal={true}
                keyExtractor={(item) => item.id.toString() }
                renderItem={({item}) => <Card navigation={navigation} item={item} />}
            />
        </View>
        
    )
}

export default List
