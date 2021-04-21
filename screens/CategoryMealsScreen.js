import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = ({ navigation }) => {

  const carId = navigation.getParam("categoryId")

  const selectedCategory = CATEGORIES.find(item => item.id === carId)

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Text>{selectedCategory.title}</Text>
      <Button title="Go to Details" onPress={() => { navigation.navigate("MealDetail") }} />
      <Button title="Go Back" onPress={() => { navigation.goBack() }} />
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

export default CategoryMealsScreen