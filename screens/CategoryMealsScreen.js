import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import MealItem from '../components/MealItem'

import { CATEGORIES, MEALS } from '../data/dummy-data'


const CategoryMealsScreen = ({ navigation }) => {

  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => { }} />
    )
  }
  const carId = navigation.getParam("categoryId")

  const displayedMeals = MEALS.filter(item => item.categoryIds.indexOf(carId) >= 0)

  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} renderItem={renderMealItem} style={{ width: "100%" }} />
    </View>
  )
}

CategoryMealsScreen.navigationOptions = navigationData => {
  const carId = navigationData.navigation.getParam("categoryId")

  const selectedCategory = CATEGORIES.find(item => item.id === carId)

  return {
    headerTitle: selectedCategory.title,
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealsScreen