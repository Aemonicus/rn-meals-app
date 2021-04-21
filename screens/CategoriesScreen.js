import React from 'react'
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'

import { CATEGORIES } from '../data/dummy-data'


const CategoriesScreen = ({ navigation }) => {

  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelected={() => {
          navigation.navigate({ routeName: "CategoryMeals", params: { categoryId: itemData.item.id } })
        }} />
    )
  }

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  )
}

// Rappel : les fonctions sont des objets en js, après avoir créé la fonction/objet, je peux lui ajouter des propriétés. Je rajoute donc la propriété "navigationOptions" qui me permet, entre autres, d'ajouter du style au header de la barre de navigation
CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})

export default CategoriesScreen