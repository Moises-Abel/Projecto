import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image,
    Dimensions
} from "react-native";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() { 
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/Dogo.jpg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Mascotas</Text>
                    </View>
                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('screen1')}>
                      <Text style={styles.titleText}>Alimentos recomendados</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('screen2')}>
                      <Text style={styles.titleText}>Alimentos prohibidos</Text>
                    </TouchableOpacity>    
                    
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1, 
        resizeMode: 'cover', 
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height
    },
   
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "Black"
    },
    button: {
      flex: 0.25,
      marginLeft: 50,
      marginRight: 50,
      marginTop: 50,
      backgroundColor: '#959c97',
      borderRadius: 15 ,
    }
   
});
