import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  FlatList,
  SafeAreaView,
  Dimensions,
  StyleSheet,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SliderBox } from "react-native-image-slider-box";
import Card from "../components/Card";
import data from "../const/data";
// https://ctxt.io/2/AABg6Fi7Eg
import GlobalStyles from "../styles/GlobalStyles";
import List from "../components/List";
import {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTv,
  getFamilyMovies,
  getDocumentaryMovies,
} from "../services/services";

const dimentions = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTv, setPopularTv] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [documentaryMovies, setDocumentaryMovies] = useState();

  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies(),
      getDocumentaryMovies(),
    ]);
  };

  useEffect(() => {
    getData()
      .then(
        ([
          upcomingMoviesData,
          popularMoviesData,
          popularTvData,
          familyMoviesData,
          documentaryMoviesData,
        ]) => {
          const moviesImagesArray = [];
          upcomingMoviesData.forEach((movie) => {
            moviesImagesArray.push(
              "https://image.tmdb.org/t/p/w500" + movie.poster_path
            );
          });

          setMoviesImages(moviesImagesArray);
          setPopularMovies(popularMoviesData);
          setPopularTv(popularTvData);
          setFamilyMovies(familyMoviesData);
          setDocumentaryMovies(documentaryMoviesData);
        }
      )
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      {loaded && !error && (
        <ScrollView>
          {moviesImages && (
            <View>
              {/*<SliderBox 
                            images={moviesImages}
                            sliderBoxHeight={dimentions.height / 1.5}
                            autoplay={true}
                            circleLoop={true} /> */}
            </View>
          )}
        </ScrollView>
      )}
      {/* Popular Movies */}
      {popularMovies && (
        <View style={styles.carousel}>
          <List
            navigation={navigation}
            title={"Popular Movies"}
            content={popularMovies}
          />
        </View>
      )}
      {/* Popular TV Shows */}
      {popularTv && (
        <View style={styles.carousel}>
          <List
            navigation={navigation}
            title={"Popular TV Shows"}
            content={popularTv}
          />
        </View>
      )}
      {/* Family Movies */}
      {familyMovies && (
        <View style={styles.carousel}>
          <List
            navigation={navigation}
            title={"Family Movies"}
            content={familyMovies}
          />
        </View>
      )}
      {/* Documentary Movies */}
      {documentaryMovies && (
        <View style={styles.carousel}>
          <List
            navigation={navigation}
            title={"Documentary Movies"}
            content={documentaryMovies}
          />
        </View>
      )}
      {!loaded && <ActivityIndicator size="large" />}
      {error && <Error />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sliderStyle: {
    height: 0,
  },
  carousel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
