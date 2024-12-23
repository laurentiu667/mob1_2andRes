import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';

const touchedItem = (name, car) => {
    ToastAndroid.show(`La voiture de ${name} est ${car}`, ToastAndroid.SHORT);
};

const WantedItem = ({ name, car }) => {
  return (
    <TouchableOpacity onPress={() => touchedItem(name, car)} style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.car}>{car}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: '70%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    boxShadow: "0px 2px 1px grey",
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  car: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});

export default WantedItem;
