import React from 'react'
import MealList from '../components/MealList'
import { MEALS } from "../data/dummy-data"

const FavoritesScreen = ({ navigation }) => {
  const favMeals = MEALS.filter(item => item.id === "m1" || item.id === "m2")
  return (
    <MealList listData={favMeals} navigation={navigation} />
  )
}

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites"
}


export default FavoritesScreen