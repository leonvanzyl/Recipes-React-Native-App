import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import AppNavigator from "./navigation/AppNavigator";
import { enableScreens } from "react-native-screens";
import "react-native-gesture-handler";

// REDUX
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mealsReducer from "./store/reducers/meals";

// Optimize Performance by using Native Screen components
enableScreens();

// Set up Redux
const rootReducer = combineReducers({
  meals: mealsReducer,
});
const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
