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
  - créer un dossier `screens` et dedans créer les "pages" voulues
  
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
  - On va créer un stack, une pile des vues rentrées dans l'objet qui englobera l'application
  - L'ordre des vues dans l'objet est important et indique quelle vue est en premier, en second, etc..
  - Chaque vue entrée dans l'objet de navigation possède automatiquement une props spéciale
  - Une fois ce dernier créé, on va le poser dans `App.js`


```javascript

  import MealsNavigator from './navigation/MealsNavigator'

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

  ```

Ensuite, dans la première vue, ici `CategoriesScreen.js`, on va poser un bouton pour tester le routing. 
On va utiliser la props spéciale qui est passée à la vue grâce à l'objet du navigator, cette props possède beaucoup de propriétés (objets et functions) dont une qui nous intéresse : la fonction `navigate`.
Cette fonction `navigate` accepte en argument un objet dans lequel on indique la vue vers laquelle on veut être dirigée si on clique sur le bouton. Rien de plus, la librairie s'occupe du reste. On ne s'occupe pas du "sens" de navigation, du bouton retour etc.. c'est géré par la librairie.
Deux syntaxe pour la fonction `navigate`, les deux fonctionnent sans différence, l'une est plus courte, c'est tout

```javascript

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button title="Go to Meals!" onPress={() => { navigation.navigate({ routeName: "CategoryMeals" }) }} />
      <Button title="Go to Meals!" onPress={() => { navigation.navigate("CategoryMeals") }} />
    </View>
  )
}

```