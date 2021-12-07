import React from "react";
import { StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
// REDUX
import { useSelector } from "react-redux";

import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  const catId = props.route.params["categoryId"];

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const meals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList meals={meals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({});

export const screenOptions = (data) => {
  const categoryId = data.route.params["categoryId"];
  const category = CATEGORIES.find((cat) => cat.id === categoryId);
  return {
    title: category.title,
  };
};
