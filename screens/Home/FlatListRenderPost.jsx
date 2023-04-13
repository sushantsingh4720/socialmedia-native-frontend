import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/EvilIcons";
const FlatListRenderPost = ({ post }) => {
  return (
    <View style={Styles.singlePost}>
      <View style={{ padding: 12, flexDirection: "row", alignItems: "center" }}>
        <Avatar.Image
          size={44}
          source={{
            uri: "http://res.cloudinary.com/dol4aj9y4/image/upload/v1676984792/userAvatar/nkulyaclbg0xjbj4k9c8.jpg",
          }}
          style={{ backgroundColor: "#900" }}
        />
        <View style={{ marginLeft: 8 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>username</Text>
          <Text>{post.title}</Text>
        </View>
      </View>

      <Image
        source={{
          uri: post.image.url,
        }}
        style={{
          width: "100%",
          height: 393,
        }}
        resizeMode="contain"
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          padding: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "30%",
          }}
        >
          <TouchableOpacity>
            <Icon name="hearto" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="message1" size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon2 name="sc-telegram" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Icon name="pushpino" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};
export default FlatListRenderPost;

const Styles = StyleSheet.create({
  singlePost: { marginVertical: 2 },
});
