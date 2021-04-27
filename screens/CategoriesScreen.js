import React from 'react'
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import { HeaderButtons, Item } from "react-navigation-header-buttons"

import { CATEGORIES } from '../data/dummy-data'
import HeaderButton from "../components/HeaderButton"

const CategoriesScreen = ({ navigation }) => {

  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate({ routeName: "CategoryMeals", params: { categoryId: itemData.item.id } })
        }}
      />
    )
  }

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  )
}

// Rappel : les fonctions sont des objets en js, après avoir créé la fonction/objet, je peux lui ajouter des propriétés. Je rajoute donc la propriété "navigationOptions" qui me permet, entre autres, d'ajouter du style au header de la barre de navigation
CategoriesScreen.navigationOptions = navData => {
  return ({
    headerTitle: "Meal Categories",
    headerLeft:
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => { navData.navigation.toggleDrawer() }} />
      </HeaderButtons >
  }
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})

export default CategoriesScreen