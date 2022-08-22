import React from "react";
import { View, StyleSheet, Text, ScrollView, Image,  TouchableOpacity } from "react-native";

import RegisterInputs from "../components/RegisterInputs";

const Register = props => {
    
    const {navigation} = props;
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Image source={require("../assets/logo.png")} style={styles.image} />
        <Text style={styles.textTitle}>New Account</Text>
        <Text style={styles.textBody}>Enter your Information!</Text>
        <RegisterInputs />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.signUp}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.login}>
            <Text
              style={[styles.loginLink, styles.link]}
              onPress={() => navigation.navigate("Home")}
            >
              Login
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },
  image: {
    width: 300,
    height: 250,
    marginVertical: 10,
  },
  textTitle: {
    fontFamily: "sans-serif",
    fontSize: 40,
    marginTop: 5,
    marginBottom: 5,
    fontWeight: "bold",
  },
  textBody: {
    fontFamily: "sans-serif",
    fontSize: 16,
  },
  buttonContainer:{
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
},
signUp:{
    fontSize: 18,
    backgroundColor: "lightblue",
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 20,
},
login:{ 
    alignItems: "center",
    marginTop: 20,
    fontSize: 20,
    paddingHorizontal : 10,
},
loginLink:{
    fontWeight: "bold",
},
link:{
    color: "lightblue"
},
});

export default Register