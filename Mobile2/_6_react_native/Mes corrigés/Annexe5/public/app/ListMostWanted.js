import { FlatList, View, StyleSheet } from 'react-native';
import WantedItem from './WantedItem.js';

const mostWanted2005 = [
    { id: "1", name: "Razor Callahan", car: "Mitsubishi Lancer Evolution VIII" },
    { id: "2", name: "Tori", car: "Porsche 911 Turbo" },
    { id: "3", name: "Vince", car: "Ford Mustang GT" },
    { id: '4', name: "Junkman", car: "Chevrolet Corvette C6" }
];

const ListMostWanted = () => {
  return (
    <View style={styles.containerlist}>
        <FlatList 
            data={mostWanted2005}
            renderItem={({ item }) => (
                <WantedItem  name={item.name} car={item.car} />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.flatlist}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    containerlist: {
   
  
    },
    flatlist: {
        
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        

        
    },
   
});

export default ListMostWanted;
