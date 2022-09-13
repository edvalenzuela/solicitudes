import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../config/RootStackNavigation';
import {Text, View} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
export const HomeScreen: React.FC<Props> = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};
