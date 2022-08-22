import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Platform, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LoginInputs() {
  return (
    <KeyboardAvoidingView 
      style={styles.inputGroup}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="E-mail"/>
      </View>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry/>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.signIn}>Sign In</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    inputGroup:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
    },
    input:{
        padding: 15,
        borderColor: "black",
        borderWidth: 1,
        fontSize:18,
        borderRadius: 20,
    },
    container:{
        width: "80%",
        padding: 10,
    }, 
    buttonContainer:{
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    signIn:{
        fontSize: 18,
        backgroundColor: "lightblue",
        paddingVertical: 13,
        paddingHorizontal: 30,
        borderRadius: 20,
    },
})