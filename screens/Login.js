import React from "react";
import { View, StyleSheet, Text, Image,ScrollView, KeyboardAvoidingView, TextInput, Platform, TouchableOpacity} from "react-native";

const Login = (props) => {
  const { navigation } = props;

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.bigContainer}>
        <Image source={require("../assets/logo.png")} style={styles.image} />
        <Text style={styles.textTitle}>Welcome to My App</Text>
        <Text style={styles.textBody}>Log in to your existant account</Text>
        <KeyboardAvoidingView
          style={styles.inputGroup}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Username/E-mail" />
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text 
               style={styles.signIn}
               onPress={() => navigation.navigate("Map")}
                >
                    Sign In
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
      <View style={styles.register}>
        <Text style={styles.newRegister}>
          Don't You Have an Account? &nbsp;
          <Text
            style={[styles.newRegister, styles.link]}
            onPress={() => navigation.navigate("Register")}
          >
            Sign Up!
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bigContainer: {
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
    marginVertical: 20,
    fontWeight: "bold",
  },
  textBody: {
    fontFamily: "sans-serif",
    fontSize: 16,
  },
  inputGroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  input: {
    padding: 15,
    borderColor: "black",
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 20,
  },
  container: {
    width: "80%",
    padding: 10,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  signIn: {
    fontSize: 18,
    backgroundColor: "lightblue",
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  register: {
    alignItems: "center",
    marginTop: 20,
    fontSize: 18,
  },
  newRegister: {
    fontWeight: "bold",
  },
  link: {
    color: "lightblue",
  },
});

export default Login;
