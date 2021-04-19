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

- Une librairie tierce qui gère la navigation
  - Arrêter le serveur 
  - `npm install --save react-navigation` 
  - `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`
  - créer un fichier `navigation`
  - créer le dossier voulu, ici `MealsNavigator.js`
  
  Le nom est trompeur, cette librairie a été conçue pour react native et pas react