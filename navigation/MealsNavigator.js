import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";

// Import Screens
import CategoriesScreen, { screenOptions } from "../screens/CategoriesScreen";
import CategoryMealsScreen, {
  screenOptions as categoryMealsScreenOptions,
} from "../screens/CategoryMealsScreen";
import MealDetailScreen, {
  screenOptions as mealDetailScreenOptions,
} from "../screens/MealDetailScreen";

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

export const MealsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={categoryMealsScreenOptions}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={mealDetailScreenOptions}
      />
    </Stack.Navigator>
  );
};
