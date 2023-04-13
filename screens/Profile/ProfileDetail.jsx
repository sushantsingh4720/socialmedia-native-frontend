import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
import profileImage from "../../assets/profile.png";
import { Lists } from "../../store/Actions/userAction";
import { useEffect, useState } from "react";
import { CLEAR_ERRORS } from "../../store/constents/userConstent";
import Loader from "../../Layout/Loader/Loader";
const ProfileDetails = ({ user, followers, following }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const { loading, followers, following } = useSelector((store) => store.lists);
  // console.log(followers, following);
  const showFollowerHandler = () => {
    navigation.navigate("followerslist", {
      pointer: 1,
    });
  };
  const showFollowinghandler = () => {
    navigation.navigate("followerslist", {
      pointer: 2,
    });
  };

  return (
    <View
      style={{
        alignItems: "center",
        borderBottomWidth: 0.4,
        borderColor: "#e6e6e6",
      }}
    >
      <View style={{ width: "94%" }}>
        <View style={styles.first_row}>
          <TouchableOpacity
            style={{ borderRadius: 100 }}
            activeOpacity={1}
            onPress={() => console.log("profile")}
          >
            <Avatar.Image
              size={80}
              source={user.avatar ? { uri: user.avatar.url } : profileImage}
              style={{ backgroundColor: "#900" }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>0</Text>
            <Text>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={showFollowerHandler}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {followers ? followers.length : 0}
            </Text>
            <Text>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={showFollowinghandler}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {following ? following.length : 0}
            </Text>
            <Text>Following</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.second_row}>
          <Text style={{ fontSize: 16 }}>{user.name}</Text>
          <Text>you always be a part of my life</Text>
        </View>
        <View style={styles.edit}>
          <TouchableOpacity style={styles.edit_button}>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.edit_button}>
            <Text>Share Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.edit_connect_button}>
            <Icon name="sharealt" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  first_row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 8,
  },
  edit: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  edit_button: {
    marginVertical: 12,
    backgroundColor: "#e6e6e6",
    height: 32,
    width: "44%",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  edit_connect_button: {
    marginVertical: 12,
    backgroundColor: "#e6e6e6",
    height: 32,
    width: "10%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ProfileDetails;
