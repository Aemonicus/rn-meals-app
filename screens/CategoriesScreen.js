import React from 'react'
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = ({ navigation }) => {

  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        // Version alternative
        // onPress={() => { navigation.navigate({ routeName: "CategoryMeals", {categoryId: itemData.item.id} }) }}>
        // Je passe des params dans l'objet navigation jusqu'à la vue suivante
        onPress={() => { navigation.navigate({ routeName: "CategoryMeals", params: { categoryId: itemData.item.id } }) }}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
})

export default CategoriesScreen