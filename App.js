import React, { Component } from 'react'
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import Card from './Card'

class App extends Component {
  state = {
    cardSymbols: [
      '☺️', '🤩', '😎', '💩', '❤️', '⭐️', '🤘', '👍'
    ],
    cardSymbolsInRand: [],
    isOpen: [],
    firstPickedIndex: null,
    secondPickedIndex: null,
  }

  componentDidMount() {
    // Duplicate Symbols x 2
    let newCardSymbols = [...this.state.cardSymbols, ...this.state.cardSymbols]
    let cardSymbolsInRand = this.shuffleArray(newCardSymbols)

    // Init isOpen Array according to the length of symbol array
    let isOpen = []
    for (let i = 0; i < newCardSymbols.length; i++) {
      isOpen.push(false)
    }

    this.setState({
      cardSymbolsInRand: cardSymbolsInRand,
      isOpen: isOpen,
    })
  }

   cardPressHandler = (index) => {
     let newIsOpen = [...this.state.isOpen]
     newIsOpen[index] = true

      // Check the current game flow
      if (this.state.firstPickedIndex == null && this.state.secondPickedIndex == null) {
        // First Choice
        this.setState({
          isOpen: newIsOpen,
          firstPickedIndex: index,
        })
      } else if (this.state.firstPickedIndex != null && this.state.secondPickedIndex == null) {
        // Second Choice
        this.setState({
          isOpen: newIsOpen,
          secondPickedIndex: index,
        })
      }

     this.setState({
       isOpen: newIsOpen
     })
   }

  shuffleArray = (arr) => {
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr
  };

  render() {
    return (
      <>
        <StatusBar />
        <SafeAreaView style={ styles.container }>
          <View style={ styles.header }>
            <Text style={ styles.heading }>
            </Text>
           </View>
          <View style={ styles.main }>
              <View style={ styles.gameBoard }>
                  {this.state.cardSymbolsInRand.map((symbol, index) => 
                    <Card key={index} style={ styles.button } onPress={ () => this.cardPressHandler(index) } fontSize={30} title={symbol} cover="❓" isShow={this.state.isOpen[index]}></Card>
                  )}
                </View>
           </View>
          <View style={ styles.footer }>
            <Text style={ styles.footerText }>Footer Text</Text>
           </View>
        </SafeAreaView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  footer: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
  },
  footerText: {
    fontSize: 20,
    textAlign: 'center',
  },
  gameBoard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
    margin: (Dimensions.get('window').width - (48 * 4)) / (4 * 2) - (4 * 2),
  },
  button: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    margin: (Dimensions.get('window').width - (48 * 4)) / (4 * 2) - (4 * 2),
  },
  buttonText: {
    fontSize: 30,
  },
})

export default App 