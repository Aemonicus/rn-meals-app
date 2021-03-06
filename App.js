import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from "react-native-screens"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"

import MealsNavigator from './navigation/MealsNavigator'
import mealsReducer from "./store/reducers/meals"

// Améliore légèrement les performances des screens lors de la navigation
enableScreens()

// On récupère les reducers
const rootReducer = combineReducers({
  meals: mealsReducer
})

// On donne les reducers au store pour le créer
const store = createStore(rootReducer)

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={(err) => console.log(err)}
    />
  }

  return (
    // On encadre l'application avec provider qui englobera l'application avec le store
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
