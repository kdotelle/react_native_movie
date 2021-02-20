import React, { Component, useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Search from "./SearchComponent";
import Movie from "./MovieComponent";

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

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
    <View>
      <View>
        <Search
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
      </View>
      <View>
        <Movie movies={movies} />
      </View>
    </View>
  );
};

export default Main;
