import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Input } from "react-native-elements";

const Search = () => {
  const [input, setInput] = useState("");

  // const handleInput = (event) => {
  //   props.setSearchValue(event.props.value);
  //   console.log(this.props.value);
  // };

  return (
    <View>
      <TextInput
        style={styles.formInput}
        placeholder="Search Movie"
        onChangeText={(input) => setInput(input)}
        value={input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formInput: {
    padding: 20,
    margin: 40,
    marginTop: 200,
    width: "75%",
    fontSize: 20,
    fontWeight: "400",
    backgroundColor: '#fff',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Search;
