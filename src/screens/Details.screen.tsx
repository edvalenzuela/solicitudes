import React from 'react';
import {RootStackParamList} from '../config/RootStackNavigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;
export const DetailsScreen: React.FC<Props> = () => {
  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};
