import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

import cardsArray from "./images"

export default function App() {
  const [playerCardIndex, setPlayerCardIndex] = useState(0)
  const [CPUCardIndex, setCPUCardIndex] = useState(0)
  const [playerScore, setPlayerScore] = useState(0)
  const [CPUScore, setCPUScore] = useState(0)

  useEffect(() => {
    playerCardIndex > CPUCardIndex && setPlayerScore(playerScore + 1)
    CPUCardIndex > playerCardIndex && setCPUScore(CPUScore + 1)
  }, [playerCardIndex])

  const dealHand = () => {
    setPlayerCardIndex(Math.floor(Math.random() * (13 - 1)) + 1)
    setCPUCardIndex(Math.floor(Math.random() * (13 - 1)) + 1)
  }

  return (
    <ImageBackground source={require("./assets/WarCardGameAssets/background.jpg")} style={styles.container}>
      <Image source={require("./assets/WarCardGameAssets/logo.png")}/>
      <View style={styles.cards}>
        <Image source={cardsArray[playerCardIndex]}/>
        <Image source={cardsArray[CPUCardIndex]}/>
      </View>
      <TouchableOpacity onPress={dealHand}>
        <Image source={require("./assets/WarCardGameAssets/dealbutton.png")}/>
      </TouchableOpacity>
      <View style={styles.scores}>
        <View style={styles.score}>
          <Text style={styles.text}>Player</Text>
          <Text style={styles.text}>{playerScore}</Text>
        </View>
        <View style={styles.score}>
          <Text style={styles.text}>CPU</Text>
          <Text style={styles.text}>{CPUScore}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cards: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly"
  },
  scores: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  score: {
    alignItems: "center"
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    padding: 5
  }
});
