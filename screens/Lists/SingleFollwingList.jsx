import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import profileImage from "../../assets/profile.png";
import { Unfollow } from "../../store/Actions/userAction";
const SingleFollowingList = ({ following }) => {
  const dispatch = useDispatch();
  const unfollowHandler = () => {
    dispatch(Unfollow(following._id));
  };
  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.profile} activeOpacity={0.9}>
        <Avatar.Image
          size={64}
          source={
            following.avatar.url ? { uri: following.avatar.url } : profileImage
          }
          style={{ backgroundColor: "#900" }}
        />
        <View style={{ width: "70%", paddingLeft: "6%" }}>
          <Text style={Styles.header_followingname} numberOfLines={1}>
            {following.email}
          </Text>
          <Text>{following.name}</Text>
        </View>
      </TouchableOpacity>
      <View style={Styles.buttomcontainer}>
        <TouchableOpacity style={Styles.remove} onPress={unfollowHandler}>
          <Text style={{ fontSize: 16 }}> unFollow</Text>
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
  header_followingname: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",

    paddingVertical: "4%",
  },
  profile: {
    padding: 8,

    width: "70%",

    flexDirection: "row",
  },
  buttomcontainer: {
    width: "35%",
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

export default SingleFollowingList;
