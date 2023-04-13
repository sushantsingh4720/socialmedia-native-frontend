import { View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Footer = () => {
  const navigation = useNavigation();
  const { footerPointer } = useSelector((store) => store.footerPointer);

  return (
    <View
      style={{
        padding: 12,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-around",
        elevation: 8,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("home");
        }}
        style={
          footerPointer == 1
            ? { borderTopWidth: 2, borderColor: "red", paddingTop: 2 }
            : ""
        }
      >
        <Icon name="home" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("home");
        }}
        style={
          footerPointer == 2
            ? { borderTopWidth: 2, borderColor: "red", paddingTop: 2 }
            : ""
        }
      >
        <Icon name="search1" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("posts");
        }}
        style={
          footerPointer == 3
            ? { borderTopWidth: 2, borderColor: "red", paddingTop: 2 }
            : ""
        }
      >
        <Icon name="pluscircleo" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("home");
        }}
        style={
          footerPointer == 4
            ? { borderTopWidth: 2, borderColor: "red", paddingTop: 2 }
            : ""
        }
      >
        <Icon name="hearto" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={
          footerPointer == 5
            ? { borderTopWidth: 2, borderColor: "red", paddingTop: 2 }
            : ""
        }
      >
        <Icon
          name="user"
          size={30}
          color="black"
          onPress={() => {
            navigation.navigate("profile");
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
