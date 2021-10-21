import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigation from "./components/MainNavigation";
import { Provider } from "react-redux";
import Store from "./store/configurateStore.js";

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}
