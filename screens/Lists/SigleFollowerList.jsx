import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";

import { useDispatch, useSelector } from "react-redux";
import profileImage from "../../assets/profile.png";
import { RemoveFollower } from "../../store/Actions/userAction";

const SingleFollowerList = ({ follower }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(RemoveFollower(follower._id));
  };

  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.profile} activeOpacity={0.9}>
        <Avatar.Image
          size={64}
          source={
            follower.avatar.url ? { uri: follower.avatar.url } : profileImage
          }
          style={{ backgroundColor: "#900" }}
        />
        <Text style={Styles.header_followername} numberOfLines={1}>
          {follower.email}
        </Text>
      </TouchableOpacity>
      <View style={Styles.buttomcontainer}>
        {/* <TouchableOpacity style={Styles.follow}>
          <Icon name="dot-single" size={24} color="black" />
          <Text>Follow</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={Styles.remove} onPress={removeHandler}>
          <Text style={{ fontSize: 16 }}> Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginVertical: 2,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "blue",
  },
  header_followername: {
    width: "66%",
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
    marginLeft: 12,
    // backgroundColor: "yellow",
  },
  profile: {
    padding: 8,
    // backgroundColor: "red",
    flex: 1.7,
    flexDirection: "row",
  },
  buttomcontainer: {
    flex: 1.3,
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "flex-end",
  },
  follow: {
    flexDirection: "row",

    justifyContent: "center",
    marginHorizontal: 2,
  },
  remove: {
    backgroundColor: "#d9dbda",
    padding: 6,
    borderRadius: 8,
  },
});

export default SingleFollowerList;
