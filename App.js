import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import Screen1Screen from "./screens/screen1";
import Screen2Screen from "./screens/screen2";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="screen1" component={Screen1Screen} />
       <Stack.Screen name="screen2" component={Screen2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;