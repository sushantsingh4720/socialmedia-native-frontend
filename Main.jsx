import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraComponent from "./screens/Camera/Camera";
import Signup from "./screens/Signup/Signup";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import Loader from "./Layout/Loader/Loader";
import Footer from "./Layout/Footer/Footer";
import { Lists, Loading } from "./store/Actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useLayoutEffect } from "react";
import Profile from "./screens/Profile/Profile";
import FollowersList from "./screens/Lists/List";
import ForgotPassword from "./screens/ForgotPassword/ForgotPassword";
import Posts from "./screens/Post/Post";

const Stack = createNativeStackNavigator();
const Main = () => {
  const { loading, isAuthenticated, user } = useSelector((store) => store.user);
  // const { following, followers } = useSelector((store) => store.lists);

  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(Loading());
  }, [dispatch]);
  return loading ? (
    <Loader />
  ) : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? "home" : "login"}>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="camera"
          component={CameraComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="followerslist"
          component={FollowersList}
          options={{ title: user ? user.email : "" }}
        />
        <Stack.Screen
          name="forgotpassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="posts"
          component={Posts}
          options={{ title: "post" }}
        />
      </Stack.Navigator>
      {isAuthenticated ? <Footer /> : ""}
    </NavigationContainer>
  );
};

export default Main;
