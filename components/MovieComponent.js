import React from "react";
import {
  Text,
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { Card, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";

const DEFAULT_IMAGE =
  "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1-150x150.jpg";

const Movie = (props) => {
  return (
    <ScrollView>
      {props.movies.map((movie, index) => (
        <FlatList style={styles.image}>
          <Image
            src={movie.Post === "N/A" ? DEFAULT_IMAGE : movie.Poster}
            alt={movie.title}
          />
        </FlatList>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default Movie;
