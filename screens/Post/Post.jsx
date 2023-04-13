import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { ToastAndroid } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Layout/Loader/Loader";

import {
  CLEAR_ERRORS,
  CLEAR_MESSAGES,
} from "../../store/constents/postConstent";
import mime from "mime";
import { AllPost, NewPost } from "../../store/Actions/postAction";

const Posts = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((store) => store.newPost);
  const [newPost, setNewPost] = useState("");
  const [title, setTitle] = useState("");
  console.log(loading, message, error);

  const chooseImageHandler = () => {
    navigation.navigate("camera", { newPost: true });
  };
  const postHandler = () => {
    if (!newPost)
      return ToastAndroid.show("Please choose a post", ToastAndroid.SHORT);
    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("image", {
      uri: newPost,
      type: mime.getType(newPost),
      name: newPost.split("/").pop(),
    });
    dispatch(NewPost(myForm));
  };
  useEffect(() => {
    if (route.params) {
      if (route.params.image) {
        setNewPost(route.params.image);
      }
    }
    if (message) {
      ToastAndroid.show(message, ToastAndroid.SHORT);
      dispatch({ type: CLEAR_MESSAGES });
      dispatch(AllPost());
      navigation.navigate("home");
    }
    if (error) {
      ToastAndroid.show(error, ToastAndroid.SHORT);

      dispatch({ type: CLEAR_ERRORS });
    }
  }, [route, message, error]);

  return loading ? (
    <Loader />
  ) : (
    <View style={Styles.container}>
      {newPost ? (
        <Image
          source={{
            uri: newPost,
          }}
          style={{
            width: "100%",
            height: "55.7%",
            marginTop: 1,
          }}
          resizeMode="contain"
        />
      ) : (
        ""
      )}
      <View
        style={{
          height: "50%",
          marginTop: 8,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {newPost ? (
          <TextInput
            style={Styles.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
        ) : (
          ""
        )}
        <TouchableOpacity
          style={Styles.choose}
          activeOpacity={0.6}
          onPress={chooseImageHandler}
        >
          <Text style={{ fontWeight: "bold", color: "black", fontSize: 18 }}>
            Choose Image
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.button}
          activeOpacity={0.6}
          onPress={postHandler}
        >
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 18 }}>
            Post
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#4db8ff",
    height: 58,
    width: "80%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  choose: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cccccc",
    height: 40,
    width: "80%",
    borderRadius: 10,
    marginVertical: 16,
  },
  input: {
    width: "80%",
    backgroundColor: "#F6F7FB",
    height: 58,

    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
});

export default Posts;
