import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar } from "react-native-paper";
import mime from "mime";
import { useDispatch, useSelector } from "react-redux";
import profileImage from "../../assets/profile.png";
import backImage from "../../assets/wallpaper.jpg";
import axios from "../../utils/axiosInstance";
import { Signin } from "../../store/Actions/userAction";

const Signup = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { error } = useSelector((store) => store.user);
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleImage = () => {
    navigation.navigate("camera", {
      updateProfile: false,
    });
  };

  const signupHandler = async () => {
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    if (avatar) {
      myForm.append("avatar", {
        uri: avatar,
        type: mime.getType(avatar),
        name: avatar.split("/").pop(),
      });
    }
    dispatch(Signin(myForm));
  };

  useEffect(() => {
    if (route.params) {
      if (route.params.image) {
        setAvatar(route.params.image);
      }
    }
    if (error) {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);

      dispatch({ type: CLEAR_ERRORS });
    }
  }, [route, error, dispatch]);

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
        <Avatar.Image
          size={100}
          source={avatar ? { uri: avatar } : profileImage}
          style={{ backgroundColor: "#900" }}
        />
        <TouchableOpacity onPress={handleImage}>
          <Text
            style={{ color: "#ff5c33", marginBottom: 18, fontWeight: "bold" }}
          >
            Choose Profile
          </Text>
        </TouchableOpacity>

        <View style={{ width: "80%" }}>
          <TextInput
            style={Styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
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
          disabled={!email || !password || !name}
          style={Styles.button}
          onPress={signupHandler}
        >
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
            Sign up
          </Text>
        </TouchableOpacity>
        <View
          style={{
            alignItems: "flex-end",
            width: "80%",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text
              style={{
                color: "#ff5c33",
                height: 30,
                marginTop: 20,
                fontWeight: "600",
                fontSize: 14,
              }}
            >
              Have an account? Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const Styles = StyleSheet.create({
  backImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: "cover",
  },
  whiteSheet: {
    width: "100%",
    height: "78%",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 180,
    width: "100%",
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
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
