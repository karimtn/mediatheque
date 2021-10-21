import React, { Component, useState } from 'react'
import { View, Button, FlatList, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import data from "../const/data"
import Card from './Card'

const Search = ({ navigation }) => {
    
    const [text, setText] = useState();
    const [searchResults, setSearchResults] = useState();


    const onSubmit = (query) => {
        setSearchResults(
        data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
        )
    }

        return (
            <View style={{ marginTop: 20 }}>
                <TextInput style={styles.textinput} value={text} onChangeText={setText} placeholder='Titre du film' />
                <Button title='Rechercher' onPress={() => { onSubmit(text)}} />
                <FlatList
                 data={searchResults}
                 horizontal={true}
                 keyExtractor={(item) => item.id.toString() }
                 renderItem={({item}) => <Card navigation={navigation} item={item} />}
                />
            </View>
        )
    

}

const styles = StyleSheet.create({ textinput: {

 marginLeft: 5, 
 marginRight: 5, 
 marginBottom:5, 
 marginTop: 20,
 height: 50, 
 borderColor: '#3333', 
 borderWidth: 1, 
 paddingLeft: 5
}})

export default Search