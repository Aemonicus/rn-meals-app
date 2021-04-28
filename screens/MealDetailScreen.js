import React, { useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native'
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import DefaultText from "../components/DefaultText"

import { toggleFavorite } from "../store/actions/meals"


import HeaderButton from "../components/HeaderButton"

import { useSelector, useDispatch } from "react-redux"

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

  // On va utiliser le hook useDispatch pour lancer l'action au reducer
  const dispatch = useDispatch()

  // On utilise le hook useCallback() pour éviter les boucles infinies
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId))
  }, [dispatch, mealId])

  // Solution pas optimale car les hooks sont activés après le premier rendu du component, hors on utilise ce hook pour faire apapraitre un titre dans le header plus bas dans le code. Ca veut dire que le titre apparait quelques secondes après le rendu initial, pas top
  // useEffect(() => {
  //   navigation.setParams({ mealTitle: selectedMeal.title })
  // }, [selectedMeal])

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler })
  }, [selectedMeal])


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

  const mealTitle = navigationData.navigation.getParam("mealTitle")
  const toggleFavorite = navigationData.navigation.getParam("toggleFav")

  return {
    headerTitle: mealTitle,
    headerRight: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={toggleFavorite}
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