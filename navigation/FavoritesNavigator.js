import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavoritesScreen, {
  favoriteScreenOptions,
} from "../screens/FavoritesScreen";
import MealDetailScreen, { screenOptions } from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

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
};

export function FavoritesNavigator() {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="FavoritesHome"
        component={FavoritesScreen}
        options={favoriteScreenOptions}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
}
