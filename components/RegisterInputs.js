import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Platform } from 'react-native'
import React from 'react'

export default function LoginInputs() {
  return (
    <KeyboardAvoidingView 
      style={styles.inputGroup}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Name"/>
      </View>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Surname"/>
      </View>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Phone"/>
      </View>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="E-mail"/>
      </View>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry/>
      </View>
      
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
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderColor: "black",
        borderWidth: 1,
        fontSize:18,
        borderRadius: 20,
        width: "90%"
    },
    container:{
        width: "90%",
        padding: 8,
    }, 
    
})