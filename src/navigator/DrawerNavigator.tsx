import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { MiniDrawerNavigator } from './MiniDrawerNavigator';
import { TabNavigator } from './TabNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
			screenOptions={{
				headerTitleAlign: 'center',
				drawerStyle:{
					backgroundColor: '#272727'
				}
			}}
			
			drawerContent={ (props) => <MiniDrawerNavigator {...props} />}
		>
      <Drawer.Screen name="TabNavigator" options={{title: ""}} component={TabNavigator} />
    </Drawer.Navigator>
  );
}