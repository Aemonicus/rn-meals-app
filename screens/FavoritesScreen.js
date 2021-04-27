import React from 'react'
import MealList from '../components/MealList'
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import HeaderButton from "../components/HeaderButton"

import { MEALS } from "../data/dummy-data"

const FavoritesScreen = ({ navigation }) => {
  const favMeals = MEALS.filter(item => item.id === "m1" || item.id === "m2")
  return (
    <MealList listData={favMeals} navigation={navigation} />
  )
}

FavoritesScreen.navigationOptions = navData => {
  return ({
    headerTitle: "Your Favorites",
    headerLeft:
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => { navData.navigation.toggleDrawer() }} />
      </HeaderButtons >
  }
  )
}


export default FavoritesScreen