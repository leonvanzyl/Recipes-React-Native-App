import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
// REDUX
import { useSelector } from "react-redux";

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <Text>No favorite meals found. Start adding some!</Text>
      </View>
    );
  }
  return <MealList meals={favMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const favoriteScreenOptions = (data) => {
  return {
    title: "Favorites",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              data.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
  };
};
