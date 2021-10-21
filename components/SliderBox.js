import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const SliderBox = ({ slideList }) => {
  console.log(slideList);
  //const [current, setCurrent] = useState(0);
  const length = slideList.length;
  const flatListRef = useRef();
  /*
  useEffect(() => {
    // fires every time when "current" is updated
   //  flatListRef.current.scrollToIndex({ index: current, animated: true });
  }, [current]); */

  const renderItem = ({ item }) => {
    const arr = Object.values(item);
    return (
      <View style={styles.imagesContainer}>
        <Image style={styles.image} source={{ uri: item.image }} />
      </View>
    );
  };

  const goNextSlide = () => {
    //  flatListRef.current.scrollToIndex({ index: current, animated: true });
  };
  const goPrevSlide = () => {
    // flatListRef.current.scrollToIndex({ index: current, animated: true });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.controls}>
        {/*<TouchableOpacity style={styles.controlleft} onPress={goPrevSlide}>
          <CarouselLeftArrow style={styles.leftArrow} size={28} fill="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlRight} onPress={goNextSlide}>
          <CarouselRightArrow
            style={styles.rightArrow}
            size={28}
            fill="black"
          />
        </TouchableOpacity>*/}
      </View>
      <FlatList
        data={slideList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        ref={flatListRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagesContainer: {
    width: windowWidth,
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  controls: {
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    zIndex: 2,
    width: "100%",
    top: 100,
  },
  controlLeft: {},
  controlRight: {},
});

export default SliderBox;
