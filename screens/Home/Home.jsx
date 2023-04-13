import { useEffect, useLayoutEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AllPost } from "../../store/Actions/postAction";
import Loader from "../../Layout/Loader/Loader";
import RenderItemList from "./newFlatlistranderitem";
import axios from "axios";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import FlatListRenderPost from "./FlatListRenderPost";
const Home = () => {
  const dispatch = useDispatch();
  const { allPost, loading } = useSelector((store) => store.allPost);

  useEffect(() => {
    getdata();
    dispatch(AllPost());
  }, [dispatch]);
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.header_username} numberOfLines={1}>
          mysocialmedia
        </Text>
        <View style={Styles.header_right}>
          <TouchableOpacity style={{ marginRight: 12 }}>
            <Icon name="pluscircleo" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="message1" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <View style={Styles.postContainer}>
          <FlatList
            data={allPost}
            renderItem={({ item }) => {
              return <FlatListRenderPost post={item} />;
            }}
            keyExtractor={(item) => item._id}
            numColumns={1}
          />
          <View style={Styles.footer}>
            <Text>there is no more data</Text>
          </View>
        </View>
      )}
    </View>
  );
};
export default Home;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
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
  postContainer: {
    padding: 0,
  },
  footer: {
    backgroundColor: "white",
    height: "28%",
  },
});
