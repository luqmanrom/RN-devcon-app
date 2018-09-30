import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar
} from 'react-native'
const WIDTH = Dimensions.get('window').width

import CardList from './src/components/CardList'

class App extends Component {
  render(){
    return (
      
      <SafeAreaView style={styles.container}>           

        {/* Header Cover */}
        <View style={{width:WIDTH, height:152, backgroundColor:'white'}} ></View>            
        <CardList tilte="AAB" titleB="BBB"/>

      </SafeAreaView>

    )
  }
}
const styles = {
  container: {
    paddingTop:StatusBar.currentHeight,   
    backgroundColor:'#7655EF',
    flex:1,
  }
}

export default App;