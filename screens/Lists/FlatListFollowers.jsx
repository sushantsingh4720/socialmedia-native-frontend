import SingleFollowerList from "./SigleFollowerList";
import { FlatList } from "react-native";
const FlatListFollowers = ({ followers }) => {
  return (
    <FlatList
      data={followers}
      renderItem={({ item }) => {
        return <SingleFollowerList follower={item} />;
      }}
      keyExtractor={(item) => item._id}
      numColumns={1}
    />
  );
};
export default FlatListFollowers;
