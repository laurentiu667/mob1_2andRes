import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

import ListMostWanted from './ListMostWanted.js';


export default function Index() {
  return (
    <View style={style.main}>

      <View style={style.containertitle}>
        <Text style={style.title}>Most Wanted 2005</Text>
      </View>
    
      <View style={style.containermostwanted}>
        <ListMostWanted />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  main:{
    flex: 1,


    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F4F4F4"
  },
  containertitle:{
    backgroundColor: "white",
    height: "10%",
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: "0px 0px 10px grey",
  },
  title:{
    fontSize: 25,
    fontWeight: "bold",
  },
  containermostwanted:{

    height: "90%",
    width: "100%",
  
  }

});