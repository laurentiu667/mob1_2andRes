// app/secondpage.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

const SecondPage = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text>Bienvenue sur la deuxième page</Text>
      <Link href="/">
        <Button title="Retour à la page d'accueil" />
      </Link>
      <Link href="/thirdpage">
        <Button title="Aller à la troisième page" />
      </Link>
    </View>
  );
};

export default SecondPage;
