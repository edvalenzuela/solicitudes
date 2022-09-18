import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SolicitudesScreen } from '../screens/Solicitudes.screen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" options={{title: "Inicio"}} component={StackNavigator} />
      <Drawer.Screen name="SolicitudesScreen" options={{title: "Solicitudes"}} component={SolicitudesScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator