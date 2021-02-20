import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Input } from "react-native-elements";

const Search = (props) => {
  const handleInput = (event) => {
    props.setSearchValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <View>
      <View>
        <View>
          <Input
            style={styles.formInput}
            placeholder="Search Movie"
            onChangeText={handleInput}
            value={props.value}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formInput: {
    marginRight: 10,
  },
});

export default Search;
