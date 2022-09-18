import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/Home.screen';
import { DetailsScreen } from '../screens/Details.screen';

export type RootStackParams = {
	HomeScreen: undefined,
	DetailScreen: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
			initialRouteName="HomeScreen"
			screenOptions={{
				headerStyle:{
					elevation: 0,
				},
				cardStyle:{
					backgroundColor: 'white'
				}
			}}
		>
      <Stack.Screen name="HomeScreen" options={{ title:"Inicio" }} component={ HomeScreen } />
      <Stack.Screen name="DetailScreen" options={{ title:"Detalle" }} component={ DetailsScreen } />
    </Stack.Navigator>
  );
}