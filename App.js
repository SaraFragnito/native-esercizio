import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { useFonts } from "expo-font"
//import AppLoading from "expo-app-loading"

import { Colors } from './utils/colors';
import AppList from "./screens/AppList"
import Quiz from "./screens/Quiz"
import Chuck from "./screens/Chuck"
import AddImage from "./screens/AddImage"
import Formatter from "./screens/Formatter"
import Crypto from "./screens/Crypto"

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    "smooch": require("./assets/fonts/Smooch-Regular.ttf"),
    "macondo": require("./assets/fonts/Macondo-Regular.ttf")
  })

  //if(!fontsLoaded) return <AppLoading />

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
            name="AppList" 
            component={AppList} 
            options={{ title: "Choose your App!" }}
          />
          <Stack.Screen name="Quiz" component={Quiz} options={{title: "Quiz Game"}} />
          <Stack.Screen name="Chuck" component={Chuck} options={{title: "Chuck Norris Quotes Generator"}} />
          <Stack.Screen name="AddImage" component={AddImage} options={{title: "Add an Image"}} />
          <Stack.Screen name="Formatter" component={Formatter} options={{title: "Text Formatter"}} />
          <Stack.Screen name="Crypto" component={Crypto} options={{title: "Crypto"}} />
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
