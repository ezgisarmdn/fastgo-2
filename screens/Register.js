import React from 'react'
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';

import RegisterInputs from "../components/RegisterInputs"

export default function Register() {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
                <Image
                   source={require('../assets/logo.png')}
                   style={styles.image}
                />
                <Text style={styles.textTitle}>New Account</Text>
                <Text style={styles.textBody}>Enter your Information!</Text>
                <RegisterInputs/>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 60,
    },
    image:{
        width: 300,
        height: 250,
        marginVertical: 10,

    },
    textTitle:{
        fontFamily: "sans-serif",
        fontSize: 40,
        marginTop: 5, 
        marginBottom: 5,
        fontWeight: 'bold',
    },
    textBody:{
        fontFamily: "sans-serif",
        fontSize: 16,
    },
});
