import React, { Component, useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import Search from "./SearchComponent";
import Movie from "./MovieComponent";
import { createBottomTabNavigator } from "react-navigation-tabs";



const Main = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=14c9736d`;

    const response = await fetch(url).then((response) => response.json());
    if (response.Search) {
      setMovies(response.Search);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, [searchValue]);

  return (
    <View style={styles.container}>
      <View>
        <Search 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
          defaultValue=''
        />
      </View>
      <View>
        <Movie movies={movies} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#435d8d",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});

export default Main;
