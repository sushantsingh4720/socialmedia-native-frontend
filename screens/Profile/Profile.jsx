import { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Avatar } from "react-native-paper";
import { Portal, Modal, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/FontAwesome5";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Layout/Loader/Loader";
import { MyPost } from "../../store/Actions/postAction";
import { Lists, Loading, Logout } from "../../store/Actions/userAction";
import {
  CLEAR_LIST,
  POINTER_CHANGE_SUCCESS,
} from "../../store/constents/userConstent";
import FlatLists from "./FlatList";
import ProfileDetails from "./ProfileDetail";

const Profile = ({ navigator }) => {
  const { user } = useSelector((store) => store.user);
  const { loading, followers, following } = useSelector((store) => store.lists);
  const { myPost } = useSelector((store) => store.myPost);

  const [openPortal, setOpenPortal] = useState(false);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(Logout());
    setOpenPortal(!openPortal);
  };
  useLayoutEffect(() => {
    dispatch(MyPost());
    dispatch(Lists());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.header_username} numberOfLines={1}>
          {user.email}
        </Text>
        <View style={Styles.header_right}>
          <TouchableOpacity style={{ marginRight: 12 }}>
            <Icon name="pluscircleo" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOpenPortal(!openPortal)}>
            <Icon2 name="navicon" size={34} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ProfileDetails user={user} followers={followers} following={following} />
      {false ? (
        <Text
          style={{
            top: "25%",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          No posts yet
        </Text>
      ) : (
        <FlatLists myPost={myPost} />
      )}
      <Portal>
        <Modal
          style={{
            justifyContent: "flex-end",
          }}
          visible={openPortal}
          onDismiss={() => setOpenPortal(!openPortal)}
        >
          <View style={Styles.portal}>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity onPress={() => setOpenPortal(!openPortal)}>
                <Icon3 name="minus" size={44} color="black" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={Styles.portal_touchable}>
              <Icon name="setting" size={24} />
              <Text style={Styles.portal_touchable_text}> Settings </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.portal_touchable}>
              <Icon name="qrcode" size={24} />
              <Text style={Styles.portal_touchable_text}> QR code </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.portal_touchable}>
              <Icon name="save" size={24} />
              <Text style={Styles.portal_touchable_text}> Saved </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.portal_touchable}
              onPress={logoutHandler}
            >
              <Icon name="logout" size={24} color="black" />
              <Text style={Styles.portal_touchable_logout}>Log out </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </Portal>
    </View>
  );
};
export default Profile;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    marginTop: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
  },
  header_right: {
    flexDirection: "row",
    marginRight: 12,
    alignItems: "center",
  },
  header_username: {
    width: "50%",
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
    marginLeft: 12,
  },

  portal: {
    backgroundColor: "#fff",
    borderRadius: 16,
  },
  portal_touchable: {
    padding: 12,
    paddingLeft: 24,
    flexDirection: "row",
  },
  portal_touchable_text: {
    fontSize: 18,
    marginLeft: 12,
    color: "#666666",
  },
  portal_touchable_logout: {
    fontSize: 18,
    marginLeft: 12,
    color: "black",
  },
});
