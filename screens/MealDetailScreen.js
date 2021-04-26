import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { MEALS } from "../data/dummy-data"

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam('mealId')

  const selectedMeal = MEALS.find(item => item.id === mealId)
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button title="Go Back to Categories" onPress={() => { navigation.popToTop() }} />
    </View>
  )
}

MealDetailScreen.navigationOptions = navigationData => {

  const mealId = navigationData.navigation.getParam("mealId")
  const selectedMeal = MEALS.find(item => item.id === mealId)

  return {
    headerTitle: selectedMeal.title
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MealDetailScreen