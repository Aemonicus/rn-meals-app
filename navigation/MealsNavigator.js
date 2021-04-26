import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from "@expo/vector-icons"
import CategoriesScreen from '../screens/CategoriesScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
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

// On crée un stack dans la barre de navigation du bas, on inclut le stack de MealsNavigator sur le lien de la première vue. Un stack "nested" dans un stack en somme. On a ainsi toujours accès au stack de MealsNavigator sauf que là ça nous permet de poser une barre de navigation en bas qui utilise le stack de MealsNavigator dans le stack de MealsFavTabNavigator
const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator, navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      }
    }
  },
  Favorites: {
    screen: FavoritesScreen, navigationOptions: {
      tabBarLabel: "Favorites",
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      }
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: Colors.secondaryColor
  }
})

export default createAppContainer(MealsFavTabNavigator)