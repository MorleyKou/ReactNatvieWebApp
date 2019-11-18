import React , { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity

} from 'react-native';

class App extends Component {
  state = {
  corrects: 0,
  currentIndex: 0,
  isDisabled : false, 
  buttonClass: [
    '', '', '', ''
  ],
  statusBarWidth: '1%',
  topics: [
    {
      question: 'JavaScript 與 Java 有什麼關係？',
      answers: [
        {
          value: '同公司的產品',
          correct: false,
        },
        {
          value: '新版與舊版的關係',
          correct: false,
        },
        {
          value: '一點關係也沒有',
          correct: true,
        },
        {
          value: 'JavaScript 是 Java 的 Web 版本',
          correct: false,
        },
      ]
    },
    {
      question: '發明 React JS 的公司是？',
      answers: [
        {
          value: 'Google',
          correct: false,
        },
        {
          value: 'Facebook',
          correct: true,
        },
        {
          value: 'Apple',
          correct: false,
        },
        {
          value: 'Microsoft',
          correct: false,
        },
      ]
    }
  ]
}

next = (index, correct) => {
  //1
  if (correct) {
    this.setState({
      corrects: this.state.corrects + 1
    })
  }

  this.setState({
    isDisabled :  true
  }) 

  //2
  let newButtonClass = [...this.state.buttonClass]
  newButtonClass[index] = (correct) ? 'correct' : 'wrong'
  
  setTimeout(()=> {
    this.setState({
      buttonClass : newButtonClass
    })
  },150)


  //3
  setTimeout(()=> {
    this.setState({
      currentIndex : this.state.currentIndex + 1,
      buttonClass : ['','','',''],
      statusBarWidth: `${ (this.state.currentIndex + 1 ) / this.state.topics.length * 100}%`
    })

    this.setState({
      isDisabled :  false
    }) 

  },1200)  

}

startOver = () => {
    setTimeout(() => {
    this.setState({
      corrects: 0,
      currentIndex: 0,
      buttonClass: ['', '', '', ''],
      statusBarWidth: '1%',
    })
  }, 300)
}

componentDidMount() {
  document.addEventListener("touchstart", function() {},false);
}

  render() {
    return (
      <View style={ styles.App } >
        <View style={ styles.statusBar} style = { {width: this.state.statusBarWidth} }></View>

        { (this.state.currentIndex < this.state.topics.length) ? 

          (
          <View style={ styles.topicsContainer }">


            <Text> {this.state.topics[this.state.currentIndex].question}</Text>

      
           {this.state.topics[this.state.currentIndex].answers.map((answer,index) =>{
              return (
                <>
                  <TouchableOpacity onPress={ ()=> this.next(index, answer.correct) } >
                    <Text style={styles.buttonText} >{answer.value}</Text>
                  </TouchableOpacity>
                </>
                );

            })}
          </View>
          ) :

          (
            <View style={ styles.fireworks}>
              <View style={ styles.before}></View>
              <View style={ styles.after}></View>
              <View style={ styles.result}>
                <Text>Completed!</Text>
                <Text>Your Score is {(Math.round((this.state.corrects / this.state.topics.length) * 100)) || 0}</Text>
                <TouchableOpacity onPress={ ()=> {this.startOver} } >
                  <Text >Start Over</Text>
                </TouchableOpacity>

              </View>
            </View>
          )
        }

      </View>
    )
  }
}

const styles= StyleSheet.create({
  App :{

  },
  container: {

  },
  statusBar:{

  },
  topicsContainer: {

  },
  fireworks: {

  },
  before: {

  },
  after: {

  },
  result: {

  }
});


export default App;
