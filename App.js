import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./components/MainComponent";
import Movie from './components/MovieComponent';
import Search from './components/SearchComponent';
import Favorites from './components/FavoritesComponent'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Movie Search</Text>
      <Main/>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeBackgroundColor: "#438C73",
        activeTintColor: '#fff',
        inactiveBackgroundColor: '#8C4381',
        inactiveTintColor: '#fff',
        labelStyle: { fontSize: 16 },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#435d8d",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 70
  },
  text: {
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
  },
  tab: {
    marginLeft: 10,
    fontSize: 24,
  },
});
