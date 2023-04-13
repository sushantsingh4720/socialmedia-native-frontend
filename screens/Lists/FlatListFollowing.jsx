import { FlatList } from "react-native";

import SingleFollowingList from "./SingleFollwingList";

const FlatListFollowing = ({ following }) => {
  return (
    <FlatList
      data={following}
      renderItem={({ item }) => {
        return <SingleFollowingList following={item} />;
      }}
      keyExtractor={(item) => item._id}
      numColumns={1}
    />
  );
};

export default FlatListFollowing;
