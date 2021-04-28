import React from 'react'
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native'
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import DefaultText from "../components/DefaultText"


import HeaderButton from "../components/HeaderButton"

import { useSelector } from "react-redux"

const ListItem = ({ children }) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{children}</DefaultText>
    </View>
  )
}

const MealDetailScreen = ({ navigation }) => {
  const availableMeals = useSelector(state => state.meals.meals)

  const mealId = navigation.getParam('mealId')

  const selectedMeal = availableMeals.find(item => item.id === mealId)
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details} >
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(item => <ListItem key={item}>{item}</ListItem>)}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(item => <ListItem key={item}>{item}</ListItem>)}
    </ScrollView>
  )
}

MealDetailScreen.navigationOptions = navigationData => {

  const mealId = navigationData.navigation.getParam("mealId")
  const selectedMeal = MEALS.find(item => item.id === mealId)

  return {
    headerTitle: selectedMeal.title,
    headerRight: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => { console.log("coucou") }}
        />
      </HeaderButtons>
  }
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center"
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10
  }
})

export default MealDetailScreen