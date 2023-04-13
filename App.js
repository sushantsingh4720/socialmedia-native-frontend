import Main from "./Main";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import store from "./store/store";
export default function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <Main />
      </Provider>
    </PaperProvider>
  );
}
