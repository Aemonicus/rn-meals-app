import React from 'react'
import MealList from '../components/MealList'

// Ce hook me permet d'aller chercher directement dans le store certains éléments du state
import { useSelector } from 'react-redux'

import { CATEGORIES } from '../data/dummy-data'


const CategoryMealsScreen = ({ navigation }) => {


  const carId = navigation.getParam("categoryId")

  const availableMeals = useSelector(state => state.meals.filteredMeals)

  const displayedMeals = availableMeals.filter(item => item.categoryIds.indexOf(carId) >= 0)

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