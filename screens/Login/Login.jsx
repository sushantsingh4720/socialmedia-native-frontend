import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Image,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/Actions/userAction";
import { CLEAR_ERRORS } from "../../store/constents/userConstent";
import backImage from "../../assets/wallpaper.jpg";
const Login = ({ navigation }) => {
  const { error } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = async () => {
    const myForm = new FormData();
    myForm.append("email", email);
    myForm.append("password", password);
    dispatch(login(myForm));
  };
  useEffect(() => {
    if (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);

      dispatch({ type: CLEAR_ERRORS });
    }
  }, [error, dispatch]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image source={backImage} style={Styles.backImage} />
      <View style={Styles.whiteSheet} />
      <View style={Styles.form}>
        <Text style={Styles.title}>Welcome</Text>
        <View style={{ width: "80%" }}>
          <TextInput
            style={Styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            secureTextEntry
            style={Styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity
          style={Styles.button}
          disabled={!email || !password}
          onPress={loginHandler}
        >
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
            Log in
          </Text>
        </TouchableOpacity>

        <View
          style={{
            alignItems: "flex-end",
            width: "80%",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text
              style={{
                color: "#ff5c33",
                height: 30,
                marginTop: 20,
                fontWeight: "600",
                fontSize: 14,
              }}
            >
              Don't have an account? Sign up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("forgotpassword")}
          >
            <Text
              style={{
                color: "#ff5c33",
                height: 30,
                marginTop: 20,
                fontWeight: "600",
                fontSize: 14,
              }}
            >
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const Styles = StyleSheet.create({
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  whiteSheet: {
    width: "100%",
    height: "68%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
  },
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: "cover",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 180,
    width: "100%",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ff5c33",
    alignSelf: "center",
    paddingBottom: 16,
  },
  button: {
    backgroundColor: "#ff5c33",
    height: 58,
    width: "80%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
