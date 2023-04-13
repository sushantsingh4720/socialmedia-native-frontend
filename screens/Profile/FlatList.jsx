import { StyleSheet, View, FlatList } from "react-native";
import SingleUploaded from "./SingleUploaded";

import { Text } from "react-native";
import { Avatar } from "react-native-paper";
const FlatLists = ({ myPost }) => {
  return (
    <View style={styles.Container}>
      {/* <Text style={styles.header}>Header</Text> */}
      <FlatList
        data={myPost}
        renderItem={({ item }) => {
          return <SingleUploaded myPost={item} />;
        }}
        keyExtractor={(item) => item._id}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
      />
      <View style={styles.footer}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    backgroundColor: "white",
    height: "58%",
  },

  columnWrapper: {
    flexWrap: "wrap",
    marginBottom: 2,
  },
});

export default FlatLists;
