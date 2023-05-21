/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapScreen from './src/screens/MapScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
        <SafeAreaProvider>
            <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS==="ios" ? "padding": "height"}
             keyboardVerticalOffset={Platform.OS==="ios" ? -64 : 0}
            >
              <NavigationContainer>
                <StatusBar
                  barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                  backgroundColor={backgroundStyle.backgroundColor}
                />
                <Stack.Navigator>
                  <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen
                    name="MapScreen"
                    component={MapScreen}
                    options={{
                      headerShown: false,
                    }}
                  />
                </Stack.Navigator>
            </NavigationContainer>
            </KeyboardAvoidingView>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
