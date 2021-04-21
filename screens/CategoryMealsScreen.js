import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

import { CATEGORIES, MEALS } from '../data/dummy-data'


const CategoryMealsScreen = ({ navigation }) => {

  const renderMealItem = itemData => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    )
  }
  const carId = navigation.getParam("categoryId")

  const displayedMeals = MEALS.filter(item => item.categoryIds.indexOf(carId) >= 0)

  return (
    <View style={styles.screen}>
      <FlatList data={displayedMeals} renderItem={renderMealItem} />
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