import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from './utils/colors';

import Games from "./screens/Games"
import Quiz from "./screens/Quiz"
import Chuck from "./screens/Chuck"
import AddImage from "./screens/AddImage"
import Formatter from "./screens/Formatter"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: Colors.primary200 },
          headerTintColor: Colors.gray700,
          contentStyle: { backgroundColor: Colors.primary800 }
        }}>
          <Stack.Screen 
            name="Games" 
            component={Games} 
            options={{ title: "Choose your Game!" }}
          />
          <Stack.Screen name="Quiz" component={Quiz} options={{title: "Quiz Game"}} />
          <Stack.Screen name="Chuck" component={Chuck} options={{title: "Chuck Norris Quotes Generator"}} />
          <Stack.Screen name="AddImage" component={AddImage} options={{title: "Add an Image"}} />
          <Stack.Screen name="Formatter" component={Formatter} options={{title: "Text Formatter"}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
