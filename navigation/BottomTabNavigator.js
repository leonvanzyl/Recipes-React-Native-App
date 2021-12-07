import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import FavoritesScreen from "../screens/FavoritesScreen";
import { MealsNavigator } from "../navigation/MealsNavigator";
import { FavoritesNavigator } from "../navigation/FavoritesNavigator";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

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

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

export const BottomTabNav = () => {
  return (
    <Tab.Navigator screenOptions={defaultNavOptions} shifting={true}>
      <Tab.Screen
        name="Home"
        component={MealsNavigator}
        options={{
          headerShown: false,
          title: "Meals",
          tabBarColor: Colors.primary,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          headerShown: false,

          tabBarColor: Colors.accent,
          tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
