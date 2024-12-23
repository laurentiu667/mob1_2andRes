/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */



import {

  Text,
  Button,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView
  
} from 'react-native';
import React, { useState } from 'react';

import { liste } from '../donnees/donnees.js'; // les données sous forme de tableau, je les recupere

function Galerie() {
  const [index, setIndex] = useState(0);
  const [paragraphe, setParagraphe] = useState(false);

  let oeuvre = liste[index];
  const image = { uri: oeuvre.url };


  const changerDeDocument = (action) => {
    if (action === "suivant") {
      if (index === liste.length - 1) {
        setIndex(0);
      }else {
        setIndex(index + 1);
      }
    }
    else {
      if (index === 0) {
        setIndex(liste.length - 1);
      }else {
        setIndex(index - 1);
      }
    }
    
  }
  
  const afficherParagraphe = () => {

    setParagraphe(!paragraphe);

    
  }
  

  return (

    <View style={styles.main}>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.buttonChangement}
          onPress={() => changerDeDocument("Précédent")}
        >
          <Text style={styles.buttonText}>Précédent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonChangement}
          onPress={() => changerDeDocument("Suivant")}
        >
          <Text style={styles.buttonText}>Suivant</Text>
        </TouchableOpacity>

      
      </View>
      <Text>
        {oeuvre.name + " de " + oeuvre.artist}
      </Text>
      <Text>
        ({index + 1} of {liste.length})
      </Text>
      <Image style={styles.image} source={image}/>

      <TouchableOpacity
          style={styles.buttonChangement}
          onPress={afficherParagraphe}
        >
          <Text style={styles.buttonText}> {paragraphe ? "fermer description" : "afficher"} </Text>
        </TouchableOpacity>

      <View style={styles.containerdesc}>
        <ScrollView>
          {paragraphe && <Text>{oeuvre.desc}</Text>}
        </ScrollView>
      </View>

    </View>
  );
}


const styles = StyleSheet.create(
  {
    containerdesc: {
      height: "50",
    },
    buttonChangement: {

    },
    buttonText: {
      color: 'black',
      fontSize: 20,
      textAlign: 'center',
      backgroundColor: 'green',
      borderRadius: 4,
      borderColor: 'black',
      borderWidth: 3,
    },
    containerButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 20,
    },
    image: {
      width: 160,
      height: 160,
    },

    main: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: 'grey',
    }
  }
)
export default Galerie;
