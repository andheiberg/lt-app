import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LanguageSelector from './LanguageSelector/LanguageSelector.react';
import ListenScreen from './ListenScreen/ListenScreen.react';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor('white');
    StatusBar.setBarStyle('dark-content', true);
    changeNavigationBarColor('transparent', true);
  }, []);

  return (
    <NavigationContainer>
      {/* todo: initial route based on whether it's OOBE */}
      <Stack.Navigator initialRouteName="Language Selector">
        <Stack.Screen
          name="Language Selector"
          component={LanguageSelector}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Listen"
          component={ListenScreen}
          options={{
            headerShown: false,
            // headerTitle: 'Spanish',
            // headerStatusBarHeight: 16,
            // headerStyle: {
            //   elevation: 0,
            // },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;