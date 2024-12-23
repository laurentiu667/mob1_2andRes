// app/_layout.tsx
import React from 'react';
import { Stack } from 'expo-router'; // Importation de Stack pour la navigation

export default function Layout() {
  return (
    <Stack>
      {/* Configuration de l'écran d'accueil */}
      <Stack.Screen
        name="index"
        options={{
          title: "Page d'accueil", // Titre de la page
          headerShown: true, // Affichage de la barre de navigation
          headerStyle: { backgroundColor: '#f4511e' }, // Style de la barre de navigation
          headerTintColor: '#fff', // Couleur du texte dans la barre de navigation
        }}
      />
      {/* Configuration de la deuxième page */}
      <Stack.Screen
        name="secondpage"
        options={{
          title: 'Deuxième page',
          headerShown: true,
          headerStyle: { backgroundColor: '#6200ea' },
          headerTintColor: '#fff',
        }}
      />
      {/* Configuration de la troisième page */}
      <Stack.Screen
        name="thirdpage"
        options={{
          title: 'Troisième page',
          headerShown: true,
          headerStyle: { backgroundColor: '#03dac6' },
          headerTintColor: '#fff',
        }}
      />
    </Stack>
  );
}
