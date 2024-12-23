import { Text, View, StyleSheet } from 'react-native';

const Nourriture = ({typenourriture}) => {
  return (
    <View style={styles.containerNourriture}>
        <Text style={styles.textnourriture}>{typenourriture}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    textnourriture: {
      
        color: "white",
        fontSize: 20        
    },
    containerNourriture: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        height: 500


        
    }
    
});


export default Nourriture;