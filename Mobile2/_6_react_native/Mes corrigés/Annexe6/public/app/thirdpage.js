// app/thirdpage.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

const ThirdPage = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text>Bienvenue sur la troisième page</Text>
      <Link href="/">
        <Button title="Retour à la page d'accueil" />
      </Link>
      <Link href="/secondpage">
        <Button title="Retour à la deuxième page" />
      </Link>
    </View>
  );
};

export default ThirdPage;
