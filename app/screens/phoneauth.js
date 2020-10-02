import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  Dimensions,
  TextInput,
  Alert,
} from "react-native";
import auth from '@react-native-firebase/auth';

import color from "../config/color";


export default function PhoneAuth() {
  const [PhoneNo, setPhoneNo] = useState("");
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    console.log(1)
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber, true);
    console.log(2)
    setConfirm(confirmation);
    console.log(3)
  }

  async function confirmCode() {
    console.log(4)
    try {
      await confirm.confirm(code);
      console.log('SUCCESS')
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.BackgroundImage}
          source={require("../assets/image/PhoneAuthBG.png")}>
        </ImageBackground>

        <TextInput
          style={styles.input}
          placeholder="Phone No."
          keyboardType="numeric"
          onChangeText={(Number) => setPhoneNo(Number)}
          value={PhoneNo}
        />

        <Button
          title="Press me"
          style={styles.btn}
          onPress={() => signInWithPhoneNumber('+91 77090 13680')}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.BackgroundImage}
        source={require("../assets/image/otp.png")}
      ></ImageBackground>

      <TextInput
        keyboardType="default"
        style={styles.input}
        placeholder="Username"
        onChangeText={(Number) => setPhoneNo(Number)}
        value={PhoneNo}
      />

      <TextInput
        keyboardType="visible-password"
        style={styles.input1}
        placeholder="Password"
        onChangeText={(Number) => setPhoneNo(Number)}
        value={PhoneNo}
      />

      <View style={styles.btn}>
        <Button
          title="Login"
          style={styles.butt}
          onPress={() => alert(PhoneNo)}
        />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_light,
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    position: "absolute",
    top: Dimensions.get("window").height / 2,
    fontFamily: "nunito-Black",
    color: "#4B5769",
    fontSize: 20,
    textAlign: "center",
  },
  BackgroundImage: {
    alignItems: "center",
    position: "absolute",
    top: Dimensions.get("window").height / 6.3, //margin TOP
    height: Dimensions.get("window").height / 2.5, //HEIGHT
    width: Dimensions.get("window").width, //WIDTH
  },

  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    margin: 10,
    width: 300,
    borderRadius: 24,
    position: "absolute",
    bottom: Dimensions.get("window").height / 2.7,
  },
  input1: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 8,
    margin: 10,
    width: 300,
    borderRadius: 24,
    position: "absolute",
    bottom: Dimensions.get("window").height / 3.7,
  },
  btn: {
    position: "absolute",
    bottom: Dimensions.get("window").height / 5.4,
    width: 170,
  },
});
