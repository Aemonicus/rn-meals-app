import React from 'react'
import { View, Text, StyleSheet, Button, Platform } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import Colors from "../constants/Colors"


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

CategoryMealsScreen.navigationOptions = navigationData => {
  const carId = navigationData.navigation.getParam("categoryId")

  const selectedCategory = CATEGORIES.find(item => item.id === carId)

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
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