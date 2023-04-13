import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Layout/Loader/Loader";
import FlatListFollowing from "./FlatListFollowing";
import FlatListFollowers from "./FlatListFollowers";
import { useEffect, useState } from "react";
import { Lists } from "../../store/Actions/userAction";
import { CLEAR_MESSAGES } from "../../store/constents/userConstent";

const FollowersList = ({ route }) => {
  const dispatch = useDispatch();
  const [pointer, setPointer] = useState(route.params.pointer);
  const { loading, followers, following, message } = useSelector(
    (store) => store.lists
  );

  useEffect(() => {
    dispatch(Lists());
    if (message) {
      ToastAndroid.show(message, ToastAndroid.SHORT);
      dispatch({ type: CLEAR_MESSAGES });
    }
  }, [dispatch, message]);
  return loading ? (
    <Loader />
  ) : (
    <View style={styles.container}>
      <View style={styles.first_child}>
        <TouchableOpacity
          onPress={() => setPointer(1)}
          activeOpacity={0.5}
          style={pointer === 1 ? styles.touchableActive : styles.touchable}
        >
          <Text style={{ marginRight: 4 }}>
            {" "}
            {followers ? followers.length : 0}
          </Text>
          <Text>followers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setPointer(2)}
          activeOpacity={0.5}
          style={pointer === 2 ? styles.touchableActive : styles.touchable}
        >
          <Text style={{ marginRight: 4 }}>
            {" "}
            {following ? following.length : 0}
          </Text>
          <Text>following</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.touchable}>
          <Text style={{ marginRight: 4 }}>0</Text>
          <Text>subscriptions</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: "94%" }}>
        <TextInput type style={styles.input} placeholder="Search" />
        <View>
          {pointer === 1 ? (
            <FlatListFollowers followers={followers} />
          ) : (
            <FlatListFollowing following={following} />
          )}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  first_child: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 12,
  },
  second_child: {
    backgroundColor: "yellow",
  },
  input: {
    backgroundColor: "#d9dbda",
    height: 46,
    marginTop: 16,
    marginBottom: 8,
    fontSize: 16,
    borderRadius: 10,
    paddingHorizontal: 18,
  },
  touchable: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 12,
  },
  touchableActive: {
    borderBottomWidth: 2,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 12,
  },
});

export default FollowersList;
