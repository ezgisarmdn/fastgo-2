import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, Linking} from 'react-native';

import LoginInputs from '../components/LoginInputs';

export default function Login()  {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
                <Image
                   source={require('../assets/logo.png')}
                   style={styles.image}
                />
                <Text style={styles.textTitle}>Welcome to My App</Text>
                <Text style={styles.textBody}>Log in to your existant account</Text>
                <LoginInputs/>
            </View>
            <View style={styles.register}>
                <Text style={styles.newRegister}>Don't You Have an Account? &nbsp;
                   <Text
                    style={[styles.newRegister, styles.link]}
                    onPress={() => Linking.openURL("../screens/Register.js")}
                   >Sign Up!</Text>
                </Text>
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
        marginVertical: 20, 
        fontWeight: 'bold',
    },
    textBody:{
        fontFamily: "sans-serif",
        fontSize: 16,
    },
    register:{ 
        alignItems: "center",
        marginTop: 20,
        fontSize: 18,
    },
    newRegister:{
        fontWeight: "bold",
    },
    link:{
        color: "lightblue"
    },
});