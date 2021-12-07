import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
// REDUX
import { useSelector } from "react-redux";

import MealItem from "../components/MealItem";

const MealList = ({ meals, navigation }) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  const renderItem = (itemData) => {
    const isFavorite = favoriteMeals.some(
      (meal) => meal.is === itemData.item.id
    );
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate("MealDetail", {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            isFav: isFavorite,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={meals}
        renderItem={renderItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
