import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";


const Login = (props) => {
  const { navigation } = props;
  

  return (
    <ScrollView style={{ backgroundColor: "#EEEEEE" }}>
      <View style={styles.bigContainer}>
        <Image source={require("../assets/logo.png")} style={styles.image} />
        <Text style={styles.textTitle}>Welcome to My App</Text>
        <Text style={styles.textBody}>Login to Your Account</Text>
        <KeyboardAvoidingView
          style={styles.inputGroup}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Username/E-mail" />
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
          Don't you have an account? &nbsp;
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
    paddingTop: 100,
  },
  image: {
    width: 170,
    height: 170,
    marginTop: 30,
  },
  textTitle: {
    fontSize: 40,
    marginVertical: 20,
    fontWeight: "bold",
    color: "#536162"

  },
  textBody: {
    fontSize: 16,
    color: "#6E7C7C",
    fontWeight: "bold",
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
    marginBottom: 10,
    textAlign: "center",
  },
  container: {
    width: "90%",
    padding: 8,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  signIn: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#5FD068",
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 20,
    overflow: "hidden",
  },
  register: {
    alignItems: "center",
    marginTop: 20,
    fontSize: 18,
  },
  newRegister: {
    fontWeight: "bold",
    color: "#6E7C7C",
  },
  link: {
    color: "#5FD068",
  },
});

export default Login;