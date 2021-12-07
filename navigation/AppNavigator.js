import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// import { MealsNavigator, BottomTabNavigator } from "./MealsNavigator";
import { BottomTabNav } from "./BottomTabNavigator";
import { DrawerNavigator } from "./DrawerNavigator";

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      {/* <BottomTabNav /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
