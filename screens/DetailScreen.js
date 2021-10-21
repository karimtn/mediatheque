import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Modal,
  Pressable,
  TouchableHighlight,
  Platform,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import data from "../const/data";
import StarRating from "react-native-star-rating";
import dateFormat from "dateformat";
import PlayButton from "../components/PlayButton";
import Videos from "../components/Videos";
import { connect } from "react-redux";

const height = Dimensions.get("screen").height;

function DetailScreen({ route, navigation, film }) {
  const movieId = route.params.movieId;
  const [movieDetail, setMovieDetail] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setMovieDetail(data.filter((item) => item.id === movieId)[0]);
  }, [movieId]);

  const videoShown = () => {
    setModalVisible(!modalVisible);
  };

  const toggleFavorite = () => {
    const action = { type: "TOGGLE_FAVORITE", value: film };
    dispatch(action);
    console.log(film);
  };

  return (
    <>
      <View>
        <ScrollView vertical={true}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{
              uri: "https://image.tmdb.org/t/p/w500" + movieDetail.poster_path,
            }}
          />
          <View style={styles.container}>
            <Text style={styles.movieTitle}>{movieDetail.title}</Text>
            <View style={styles.playButton}>
              <PlayButton handlePress={videoShown} />
            </View>
            <StarRating
              disabled={true}
              maxStars={5}
              starSize={30}
              rating={movieDetail.vote_average / 2}
              fullStarColor={"gold"}
            />
            <Text style={styles.overview}>{movieDetail.overview}</Text>
            <Button title={"Favoris"} onPress={() => toggleFavorite} />
            <Text style={styles.release}>
              {"Date de sortie : " +
                dateFormat(movieDetail.release_date, "dd/mm/yyyy")}
            </Text>
          </View>
        </ScrollView>
        <Modal
          supportedOrientations={["portrait", "landscape"]}
          animationType="slide"
          visible={modalVisible}
        >
          <View>
            <TouchableHighlight
              activeOpacity={1}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  fontSize: 30,
                  paddingRight: 15,
                }}
              >
                X
              </Text>
            </TouchableHighlight>
            <Videos onClose={videoShown} />
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: height / 2.5,
  },
  overview: {
    padding: 15,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  release: {
    fontWeight: "bold",
  },
  playButton: {
    position: "absolute",
    top: -25,
    right: 20,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => {
      dispatch(action);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    favoriteFilm: state.favoriteFilm,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
