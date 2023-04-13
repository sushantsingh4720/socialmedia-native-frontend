import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import backImage from "../../assets/wallpaper.jpg";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const forgotPasswordHandler = () => {
    console.log(email);
  };
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
        </View>
        <TouchableOpacity
          style={Styles.button}
          activeOpacity={0.8}
          onPress={forgotPasswordHandler}
          disabled={!email}
        >
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
            Send
          </Text>
        </TouchableOpacity>

        <View
          style={{
            alignItems: "flex-end",
            width: "80%",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("login")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Icon name="chevron-back-outline" size={24} color="#ff5c33" />
            <Text
              style={{
                color: "#ff5c33",
                fontWeight: "600",
                fontSize: 14,
              }}
            >
              Back to Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
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
    bottom: -14,
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
    paddingTop: 218,
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
