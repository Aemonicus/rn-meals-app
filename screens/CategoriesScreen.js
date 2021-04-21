import React from 'react'
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity, Platform } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import Colors from "../constants/Colors"

const CategoriesScreen = ({ navigation }) => {

  const renderGridItem = itemData => {
    return (
      <TouchableOpacity style={styles.gridItem} onPress={() => { navigation.navigate({ routeName: "CategoryMeals" }) }}>
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
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
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