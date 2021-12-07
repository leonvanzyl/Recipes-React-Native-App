import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();
import { BottomTabNav } from "./BottomTabNavigator";
import FiltersScreen, { filtersScreenOptions } from "../screens/FiltersScreen";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontFamily: "poppins-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "poppins",
  },
  tabBarActiveTintColor: Colors.accent,
};

function FilterStack() {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="StackFilters"
        component={FiltersScreen}
        options={filtersScreenOptions}
      />
    </Stack.Navigator>
  );
}

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: Colors.accent,
        drawerType: "slide",
      }}
    >
      <Drawer.Screen
        name="MealsFavs"
        component={BottomTabNav}
        options={{ title: "Meals" }}
      />
      <Drawer.Screen
        name="DrawerFilters"
        component={FilterStack}
        options={{ title: "Filters" }}
      />
    </Drawer.Navigator>
  );
}
