import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Index() {
  const image = {uri: 'https://e.sport.fr/wp-content/uploads/2023/01/gotaga-ban-twitch-dmca.jpg'};

  return (
    <View style={style.containerView}>
      <ImageBackground style={style.imageContainer} source={image} resizeMode="cover" >
        <View style={style.menuBar}>
          <Image source={require('../assets/images/images/play.png')} />
          <Image source={require('../assets/images/images/sound.png')} />
          <View style={style.bar}>
            <View style={style.barabs}></View>
          </View>
          <Image source={require('../assets/images/images/hd-sign.png')} />
          <Image source={require('../assets/images/images/full-screen.png')} />
        </View>
      </ImageBackground>
    </View>
    
      
  );


 
}
const style = StyleSheet.create({
    containerView:{
      flex: 1,
      backgroundColor: "white",
      height: 200,
      alignItems: "center",
      justifyContent: "center",
    },

    imageContainer: {
      height: 200,
      justifyContent: "flex-end",
      width: "100%",

    },

    menuBar:{
      height: "30%",
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "black"
    },
    text: {
      color: "white"
    },
    bar:{
      width: "40%",
      height: "10%",
      backgroundColor: "red",
      position: "relative",
      
    },
    barabs: {
      position: "absolute",
      width: "70%",
      height: "100%",
      backgroundColor: "white"
    }
})