### React Native

Librairie JavaScript maintenu et créer par Meta. Sert à bâtir des interfaces graphiques présentes dans des apps mobiles. Permet le développement d'interfaces graphiques pour le web.

Comprend du code JavaScript, html (kinda), css (kinda) et du TypeScript.

Contrairement à d'autres produits qui permettent le développements d'apps mobiles qui sont en fair que des apps web qu'on roule sur un téléphone. React Native permet le développement d'apps natives robutes. Un peu comme si on les codait en Java/Kotlin (Android) ou si on les codait en Swift/Objective-C (IOS).

Au moment de l'exécution, React Native crée les vues Android qu'on connait à partir des composantes React qu'on a utilisées en JavaScript. Par exemple en React Native, la balise \<Text\> serait équivalent à TextView pour Android, à UITextView pour IOS et à \<p\> pour le Web.

À pour avantages de :

-   Permettre le développement sur les deux principales plateformes en même temps
-   Open source
-   JavaScript est un des principaux lamgages utilisés dans le monde
-   Chargement rapide
-   Possibilité de combiner avec une app codée en Java / native
-   Grande base d'utilisateurs

Expo est un framework qui va nous permettre de faire tourner nos applications React Native.

#### Équivalence des balises

-   \<View\> (React Native) -> ViewGroup (Android) -> UIView (IOS) -> a non scrolling \<div\> (Web)

-   \<Text\> (React Native) -> TextView (Android) -> UITextView (IOS) -> \<p\> (Web)

-   \<Image\> (React Native) -> ImageView (Android) -> UIImageView (IOS) -> \<img\> (Web)

-   \<ScrollView\> (React Native) -> ScrollView (Android) -> UIScrollView (IOS) -> \<div\> (Web)

-   \<TextInput\> (React Native) -> EditText (Android) -> UITextField (IOS) -> \<input type="text"\> (Web)

#### Initialisation d'un projet

La première étape est de démarer notre émulateur à partir d'Android Studio. On va fermer notre projet présentement ouvert et on va aller dans Virtual Device Manager pour démarrer l'émulateur. On va pouvoir l'utiliser pour faire rouler notre app React Native.

Ensuite, pour créer notre projet React Native, on va aller dans un terminal de Visual Studio Code et utiliser la commande **npx create-expo-app@latest**, qui va générer le projet et ses dépendances dans le dossier où se trouver notre terminal.

Pour lancer notre projet, on va utiliser la commande **npm run android** ou **npx expo start** suivit de **a** pour la faire tourner sur un émulateur Android, **npm run ios** pour la faire tourner sur un IOS (on doit utiliser macOS pour build un projet IOS, on peut utiliser l'application Expo si on a besoin de faire du développement IOS sans utiliser un Mac), **npm run web** ou **npx expo start** suivit de **w** pour la faire tourner dans une page web.

    PS: Utiliser la commande npx expo start offre l'option d'écrire r dans le terminal. Permettant de refaire charger notre application avec les modifications qu'on a fait.

Pour repartir avec un projet quasiment vide à partir de notre original. On doit en premier lieu fermer notre terminal. On en ouvre un nouveau et utilise la commande **npm run reset-project**.

Pour continuer à travailler sur une projet React Native sur un autre ordinateur, on utilise **npm install expo**.

#### Node.js

Npm provient de Node.js. Npm est un acronyme pour node package manager. La commande vient avec un cli (command line interface). Npm est utile pour télécharger, intaller et gérer des packages / librairies dont on a besoin. C'est une grande librairie open source de composantes.

Npx permet d'exécuter des packages directement -> npx expo start.

Metro c'est un Java Script Bundler qui enveloppe le projet et ses dépendances, permet de recahrger l'app rapidement.

Expo est un framework pour tester et créer des applications avec React Native.

node_modules est l'ensemble des librairies qu'on peut utiliser pour notre application. Le fichier package.json répertorie celles qu'on utilise.

Le dossier components comprend des fichiers comprenant des composants qui sont exporté. En soit, application de l'orienté objet!

Le fichier app.json est l'endroit où on pourrait modifier le nom de l'app.

#### React Native Code

    La vue est faite en JSX ou en TSX, qui est un langage qui fonctionne avec des balises, un peu comme du HTML. C'est une syntaxe qui est un mélange entre du JavaScript et du XML. Utilisé par React et React Native. Permet d'écrire des composants dans du Javacript.

##### Composant fonctionnelle et injection

```jsx
// Composant fonctionnelle (Composant qui provient d'une fonction)
// Fait avec une arrow function
const Index = () => {
    const nom = "Blood Eagle";
    return (
        <View>
            <Text>{nom}</Text>
        </View>
    );
};

export default Index;
```

-   **_{variableName}_**: Nous permet d'injecter le contenu d'une variable dans notre code JSX.

##### Classes

```jsx
import React from "react";
import { Text, View } from "react-native";

export default class Chanson extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.conteneur}>
                <Text style={styles.text}>{this.props.nom}</Text>
            </View>
        );
    }
}
```

-   **_extends React.Component_**: Lorsqu'on créer un component, il faut que la classe extend React.Component. Il faut absolument que notre composant soit englober s'il contient plusieurs pièces, par exemple il pourrait être englober par une \<View\>. Sa seul fonction obligatoire est render qui va contenir la vu de ce composant. Cette fonction sera appelé lors de l'affichage du widget, on peut instancier ce dernier tel que:

    PS: Si on souhaite définir des variables this, il faut les placer à l'extérieur de la fonction render et il ne faut pas leur donner de déclarateur tel que const ou let.

```jsx
const Index = () => {
    const chanson = new Chanson();
    return (
        <View>
            <Chanson />
        </View>
    );
};

export default Index;
```

Les classes utilise le paramètre props qui est le seul paramètre de notre constructeur et qui nous permet d'assigner des valeurs à notre composant.

On peut alors utiliser **this.props.value** pour modifier l'affichage en fonction de la valeur.

```jsx
<Chanson nom={"Reptile"} />
```

On assigne les valeurs que contiendra props lors de l'instantiation de notre composant tel que démontré ci-haut.

##### Arrays

```jsx
const createTabs = () => {
    const tab = [];
    const names = ["Bruh", "Moment", "Wildfire", "Reptile", "We the Sad"];

    for (let i = 0; i < 5; ++i) {
        tab.push(<Chanson nom={names[i]} key={i} />);
    }

    return Array.from({ length: 5 }, (_, index) => (
        <Chanson nom={index} key={index} />
    ));
};
```

On doit donner une **key** au élément de notre tableau, sinon il va nous retourner un avertissement.

-   **_Array.from({length:anInt}, (\_, index) => \<Item key={index}\>)_**: Est un raccourci pour créer un tableau.

##### Button

```jsx
<Button onPress={aFunction} title="Button Text" />
```

    Les boutons prennent deux paramètre principaux, soit une fonction qui sera exécuter quand il seront cliqué. Et leur seul paramètre obligatoire étant title, qui représente le texte que contiendra le bouton.

    Les boutons sont très limités dans les changements d'apparence qu'on peut leur faire. On va donc utiliser TouchableOpacity si on veut créer des boutons avec des apparences différentes.

```jsx
<TouchableOpacity onPress={this.changeHeartColor}>
    <Image
        source={this.heartImage}
        style={[this.state.color, styles.heart]}
    ></Image>
</TouchableOpacity>
```

    Les TouchableOpacity sont tel des view normal et n'ont aucun contenu par défaut. On peut donc placer ce que l'on veut à l'intérieur donner l'apparence qu'on souhaite à notre bouton.

##### Styles

```jsx
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    conteneur: {
        flex: 1, // Équivalent de faire width 100% et height 100%
        backgroundColor: "#44EE22",
        margin: 10, // Les valeurs numérique sont transformer en dp (density independent pixel) pour faire rouler l'application sur téléphone
        padding: 10,
        borderRadius: 7,
    },

    text: {
        textAlign: "center",
        fontStyle: "italic",
        fontWeight: "900",
        fontSize: 23, // Cette valeur est transformer en sp
    },
});
```

-   **_StyleSheet.create({})_**: Nous permet de définir des styles. Le nom des propriétés sont généralement les mêmes que ceux de css mais écrit en camelCase. Les valeurs sont automatiquement convertie selon l'interface de l'utilisateur.

```jsx
<View style={styles.conteneur}>
```

-   **_style={styles.styleName}_**: Nous permet d'appliquer un style à une vu.

-   **_style={\[styles.styleName, styles.otherStyle\]}_**: Permet d'appliquer plusieurs styles à un même élément.

###### Flex

Flex est le type de display par défaut des **\<View\>**. Il a des différences avec le flex du web.

-   Web: Flex-direction -> Row par défaut, Align-Items: Stretch par défaut

-   React Native: Flex-direction -> Column par défaut, Align-Items -> Flex-start par défaut

##### Images

```jsx
import { Image, ImageBackground } from "react-native";
const imgWeb = {uri:'https://www.unsite.com'};
const imgLocal = require('../assets/images/nomImage.png'); // Il faut absolument utilisé des '' et non des ""

<ImageBackground source={imgWeb}/>
<Image source={imgLocal}/>
```

-   **_{uri:'https://www.unsite.com'}_**: Permet d'obtenir une image à partir d'un site web.

-   **_require("../assets/images/nomImage.png")_**: Permet d'obtenir une image stocker localement sur notre machine/dans notre application.

-   **_<ImageBackground source=\{imgWeb\}/>_**: Est en soit une View avec une image de background. Elle n'a pas de taille par défaut, donc si elle n'a pas de contenu, il faut y assigner une taille.

-   **_<Image source=\{imgLocal\}/>_**: Permet d'avoir une image dans notre page.

##### Hook (state)

C'est une variable qui représente la mémoire de la composante. Sa valeur sera conservé même s'il y a des rafraichissement de l'affichage. Sont fonctionnement est différent dans une classe et dans une fonction.

```jsx
import React from "react"; // La classe doit absolument utilisé React.Component
// Hook dans une classe
export default class ButtonState extends React.Component {
    state = { valueA: 1, valueB: 3 };
    manageButton = () => {
        this.setState({
            valueA: this.state.valueA + 1,
            valueB: this.state.valueB * 3,
        });
    };
    render() {
        return (
            <View
                style={{
                    flex: 0.2,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Button onPress={this.manageButton} title="Click"></Button>
                <Text>
                    {this.state.valueA},{this.state.valueB}
                </Text>
            </View>
        );
    }
}
```

-   **_state={valueA: 1, valueB: 3}_**: Dans une classe, la variable dictionnaire state nous permet de conserver des valeurs en mémoire qui pourrait changer au courant de la vie de l'application.

```jsx
this.setState({
    valueA: this.state.valueA + 1,
    valueB: this.state.valueB * 3,
});
```

-   **_this.setState({})_**: La fonction **this.setState**, nous permet de changer les valeurs à l'intérieur de notre dictionnaire **state**. Il est important d'utiliser le **this** pour accéder non seulement à la fonction, mais aussi aux valeurs contenu dans **state**. On change les valeurs dans **state** en faisant **nomValeur: nouvelleValeur** à l'intérieur de **this.setState**.

    PS: Il est ensuite possible d'afficher ces valeurs dans le return de la fonction render de notre classe.

```jsx
import { useState } from "react";
// Hook dans une fonction
const nomBouton = "clic";
const [value, setValue] = useState(1); // Variable
const manageButton = () => {
    setValue(value + 1);
};

return (
    <View>
        <Button title={nomBouton} onPress={manageButton}></Button>
        <Text>{value}</Text>
    </View>
);
```

-   **_import { useState } from "react";_**: Il est important d'import cette fonction pour pouvoir utilisé des hooks dans une fonction.

-   **_const [value, setValueFunctionName] = useState(1)_**: On déclare entre **[]** le nom de notre variable hook qui sera **read only** et qui ne pourra être modifier qu'en utilisant la fonction/setter déclarer en deuxième paramètre. **useState()** nous permet de définir la valeur initiale qu'on aura notre variable hook.
