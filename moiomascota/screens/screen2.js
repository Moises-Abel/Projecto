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

export default class Screen2Screen extends Component{
  render(){
    return(
      <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/Dogo.jpg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Alimentos prohibidos</Text>
                    </View>
                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('screen1')}>
                      <Text style={styles.titleText}>-Alcohol</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('screen1')}>
                      <Text style={styles.titleText}>-Chocolate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('screen1')}>
                      <Text style={styles.titleText}>-Uvas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('screen1')}>
                      <Text style={styles.titleText}>-Nueces de la india</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('screen1')}>
                      <Text style={styles.titleText}>-Aguacate</Text>
                    </TouchableOpacity>
                      
                    
                </ImageBackground>
            </View>
    )
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
        height: 30, 
        marginBottom: 25, 
        color:'black',
    },
    button: {
      flex: 0.25,
      marginLeft: 50,
      marginRight: 50,
      marginTop: 50,
     
    }
   
});