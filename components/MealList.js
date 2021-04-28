import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { useSelector } from "react-redux"

import MealItem from './MealItem'

const MealList = ({ navigation, listData }) => {

  // Avec ce hook j'ai vais récupérer une partie du state
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

  const renderMealItem = itemData => {

    const isFavorite = favoriteMeals.some(item => item.id === itemData.item.id)

    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => navigation.navigate({
          routeName: "MealDetail", params: {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            isFav: isFavorite
          }
        })} />
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList data={listData} renderItem={renderMealItem} style={{ width: "100%" }} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MealList