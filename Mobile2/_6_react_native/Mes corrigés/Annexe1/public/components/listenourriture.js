import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native'; 
import Nourriture from '../components/nourriture'; 

const ListeNourriture = () => {
    // Créer un tableau de nourriture
    const data = ["burger", "pizza", "pasta", "sushi", "tacos"];
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollview}>
                {data.map((nourriture, index) => {
                    return (
                        <Nourriture key={index} typenourriture={nourriture} /> 
                    );
                })}
            </ScrollView>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 500,  
        overflow: 'hidden',  
    },
    scrollview: {
        backgroundColor: 'black',
        
    }
});

export default ListeNourriture;
