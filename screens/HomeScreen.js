import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, SafeAreaView, Dimensions } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {SliderBox} from 'react-native-image-slider-box';
import Card from '../components/Card';
import data from '../const/data';
// https://ctxt.io/2/AABg6Fi7Eg
import GlobalStyles from '../styles/GlobalStyles';
import {getUpcomingMovies} from '../services/services'

const dimentions = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
    
    const [moviesImages, setMovieImages] = useState();
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    const getData = () => {
        return Promise.all([
            getUpcomingMovies()
        ])
    }

    useEffect(() => {
        getData()
        .then(([upcommingMoviesData]) => {
            const moviesImagesArray = [];
            upcommingMoviesData.forEach(movie => {
                moviesImagesArray.push(
                    'https://image.tmdb.org/t/p/w500' + movie.poster_path
                )
            })
        }).catch(() => {
            setError(true)
        }).finally(() => {
            setLoaded(true);
        })
    }, []);

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            {loaded && !error && (
                <ScrollView>
                    {moviesImages && (
                        <View>
                            <SliderBox 
                            images={moviesImages}
                            sliderBoxHeight={dimentions.height / 1.5}
                            autoplay={true}
                            circleLoop={true} />
                        </View>
                    )
                    }
                </ScrollView>
            ) }
        </SafeAreaView>
    )
}


export default HomeScreen
