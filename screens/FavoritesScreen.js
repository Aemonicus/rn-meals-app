import React from 'react'
import MealList from '../components/MealList'
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import HeaderButton from "../components/HeaderButton"

// Ce hook me permet d'aller chercher directement dans le store certains éléments du state
import { useSelector } from "react-redux"


const FavoritesScreen = ({ navigation }) => {

  const favMeals = useSelector(state => state.meals.favoriteMeals)

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