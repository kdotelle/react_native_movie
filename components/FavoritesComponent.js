import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from "react-native";

const Favorites = () => {
    return (
        <View style={styles.container}>
            <Text> Favorites </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Favorites;