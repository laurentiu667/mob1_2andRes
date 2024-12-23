// app/index.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

const HomePage = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text>Bienvenue sur la page d'accueil</Text>
      <Link href="/secondpage">
        <Button title="Aller à erwrela deuxième page" />
      </Link>
      <Link href="/thirdpage">
        <Button title="Aller à la troisième page" />
      </Link>
    </View>
  );
};

export default HomePage;
