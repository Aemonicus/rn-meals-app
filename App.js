import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from "react-native-screens"

import MealsNavigator from './navigation/MealsNavigator'

// Améliore légèrement les performances des screens lors de la navigation
enableScreens()

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
    <MealsNavigator />
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
