import React, { Component } from 'react'
import { Text, View , Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

//export class Card extends Component {
  //  render() {
const Card = ({navigation, item}) => {
        //const { navigation, item } = this.props;
        console.log(item);
        return (
            <TouchableOpacity style={styles.container}
                onPress={() => { navigation.navigate("Detail", {movieId: item.id}) }}>
                <Image style={styles.imageStyle} resizeMode='cover' 
                source={{uri: "https://image.tmdb.org/t/p/w500" + item.poster_path}} />
                {!item.poster_path && (
                <Text style={styles.movieName}>{item.title}</Text>
                )}
            </TouchableOpacity>
        )
    }

const styles = StyleSheet.create({
    imageStyle: {
        height: 200, 
        width: 120,
        borderRadius: 20
    }, 
    container: {
        position: 'relative',
        alignItems: "center",
        height: 200,
        padding: 5
    },
    movieName: {
        position: 'absolute',
        width: 100,
        top: 10,
        textAlign: 'center'
    }
})

export default Card
