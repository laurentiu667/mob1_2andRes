import { useState } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Index() {
    const [like, setLike] = useState(false);

  return (
    <View style={style.container}>
      
        <TouchableOpacity onPress={() => setLike(!like)}>
            <Image source={require('../assets/images/heart.png')} style={like ? style.heartactive : style.heartinactive} />
        </TouchableOpacity>
        <Text> {like ? 'j aime' : 'j aime pas'}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    
    justifyContent: 'center',
    alignItems: 'center',
  },
    heartactive: {

        tintColor: 'red',
    },
    heartinactive: {
        tintColor: 'grey',
    }
});