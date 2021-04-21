import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

import { Platform } from "react-native"
import Colors from "../constants/Colors"

const MealsNavigator = createStackNavigator({
  Categories: {
    // Exemple de customisation d'un élément différemment des autres
    screen: CategoriesScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
    }
  },
  CategoryMeals: CategoryMealsScreen,
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
  }
})

export default createAppContainer(MealsNavigator)