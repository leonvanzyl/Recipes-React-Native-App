import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        // Create a copy of the original array
        const updatedFavMeals = [...state.favoriteMeals];
        // Remove the item using splice
        updatedFavMeals.splice(existingIndex, 1);
        // Update State
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(meal),
        };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter((meal) => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.lactoseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.vegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.vegan) {
          return false;
        }

        return true;
      });

      return { ...state, filteredMeals: filteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
