import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Ionicons } from "@expo/vector-icons"
import CategoriesScreen from '../screens/CategoriesScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FiltersScreen from '../screens/FiltersScreen'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"

import { Platform } from "react-native"
import Colors from "../constants/Colors"

const defaultStackNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
  }
}

const MealsNavigator = createStackNavigator({
  Categories: {
    // Exemple de customisation d'un élément différemment des autres
    screen: CategoriesScreen,
    defaultStackNavOptions
  },
  CategoryMeals: CategoryMealsScreen,
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
})

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
})

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      }
    },
    tabBarColor: Colors.primaryColor
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.secondaryColor
    }
  }
}

// On crée un stack dans la barre de navigation du bas, on inclut le stack de MealsNavigator sur le lien de la première vue. Un stack "nested" dans un stack en somme. On a ainsi toujours accès au stack de MealsNavigator sauf que là ça nous permet de poser une barre de navigation en bas qui utilise le stack de MealsNavigator dans le stack de MealsFavTabNavigator
const MealsFavTabNavigator = Platform.OS === "android" ? createMaterialBottomTabNavigator(tabScreenConfig, {
  activeColor: "white",
  shifting: true
}) : createBottomTabNavigator(tabScreenConfig, {
  tabBarOptions: {
    activeTintColor: Colors.secondaryColor
  }
})

// Je crée ce stack uniquement pour avoir un Header sur la page filters, aucune autre raison
const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen
})

// Notre outil de navigation principal, le drawing navigator qui sera utilisé pour englober l'app dessous sera symbolisé dans l'app par un menu burger. Il faut penser à poser ce menu burger dans les navigationOptions des pages où on veut le voir apparaitre avec la propriété "headerLeft":
const MainNavigator = createDrawerNavigator({
  MealsFavs: MealsFavTabNavigator,
  Filters: FiltersNavigator
})

export default createAppContainer(MainNavigator)