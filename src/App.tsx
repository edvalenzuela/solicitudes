/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Stack} from './config/navigation';
import {HomeScreen} from './screens/Home.screen';
import {DetailsScreen} from './screens/Details.screen';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
