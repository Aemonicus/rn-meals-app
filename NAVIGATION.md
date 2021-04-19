# Explication Générale

Deux options : 
- des vues conditionnelles depuis `App.js`, 
  Exemple
  ```javascript

    let content = <StartGameScreen onStartGame={startGameHandler} />

    if (userNumber && guessRounds <= 0) {
      content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    } else if (guessRounds > 0) {
      content = <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    }

    return (
      <SafeAreaView style={styles.screen}>
        <Header title={"Guess a Number"} />
        {content}
      </SafeAreaView>
    );

  ```

- Une librairie tierce qui gère la navigation : React Navigation
  - Arrêter le serveur 
  - `npm install --save react-navigation` 
  - `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`
  - créer un fichier `navigation`
  - créer le dossier voulu, ici `MealsNavigator.js`
  
  Le nom est trompeur, cette librairie a été conçue pour react native et pas react

  ! IMPORTANT !
  Avec les version 4+ de React Navigation, il faut installer différents navigateurs :
    - `npm install --save react-navigation-stack` puis `import { createStackNavigator } from 'react-navigation-stack';`
    - `npm install --save react-navigation-tabs` puis `import { createBottomTabNavigator } from 'react-navigation-tabs';`
    - `npm install --save react-navigation-drawer` puis `import { createDrawerNavigator } from 'react-navigation-drawer';`
  
  Exemple de composant de navigateur. 
  ```javascript

  import { createStackNavigator } from 'react-navigation-stack'
  import { createAppContainer } from 'react-navigation'
  import CategoriesScreen from '../screens/CategoriesScreen'
  import CategoryMealsScreen from '../screens/CategoryMealsScreen'
  import MealDetailScreen from '../screens/MealDetailScreen'

  const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  })

  export default createAppContainer(MealsNavigator)

  ```

  Une fois ce dernier créé, on va le poser dans `App.js`