import React from 'react'
import MealList from '../components/MealList'

import { CATEGORIES, MEALS } from '../data/dummy-data'


const CategoryMealsScreen = ({ navigation }) => {


  const carId = navigation.getParam("categoryId")

  const displayedMeals = MEALS.filter(item => item.categoryIds.indexOf(carId) >= 0)

  return (
    <MealList listData={displayedMeals} navigation={navigation} />
  )
}

CategoryMealsScreen.navigationOptions = navigationData => {
  const carId = navigationData.navigation.getParam("categoryId")

  const selectedCategory = CATEGORIES.find(item => item.id === carId)

  return {
    headerTitle: selectedCategory.title,
  }
}


export default CategoryMealsScreen