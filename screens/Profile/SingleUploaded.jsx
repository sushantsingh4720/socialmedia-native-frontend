import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SingleUploaded = ({ myPost, index }) => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity activeOpacity={0.8}>
        <Image
          source={{
            uri: myPost.image.url,
          }}
          style={Styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    width: "32.82%",
    marginHorizontal: 1,
  },
  image: {
    width: "100%",
    height: 129,
  },
});

export default SingleUploaded;
