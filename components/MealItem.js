import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import DefaultText from "../components/DefaultText";

const MealItem = ({
  title,
  duration,
  onSelectMeal,
  complexity,
  affordability,
  image,
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground style={styles.bgImg} source={{ uri: image }}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <DefaultText>{duration}m</DefaultText>
          <DefaultText>{`${complexity}`.toUpperCase()}</DefaultText>
          <DefaultText>{`${affordability}`.toUpperCase()}</DefaultText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    height: "15%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bgImg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "poppins-bold",
    fontSize: 20,
    color: "white",

    textAlign: "center",
  },
});
