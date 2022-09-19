import React, { useContext } from 'react'
import { View, Text, FlatList } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';

import { SolicitudesContext } from '../context/SolicitudesContext';

import { ErrorMessage } from '../components/ErrorMessage';
import { Solicitudes } from '../components/Solicitudes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/theme';

import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any>{};

export const SolicitudesScreen = ({route}: Props) => {

	const { top } = useSafeAreaInsets();

	const { solicitudes } = useContext(SolicitudesContext);

	const renderEmptySolicitudes = () => (<Text>No hay solicitudes</Text>)

	const renderHeader = () => (
		<View style={{
			flexDirection: 'row',
			alignItems:'center',
			marginBottom: 30,
			marginTop: top + 20,
		}}>
			<Text style={{
				fontSize: 26,
				textAlign:'center',
				color: 'black',
				fontWeight: '600',
				marginRight: 20
			}}>Listado de solicitudes</Text>
			<Icon name="layers-outline" size={50} color="black" />
		</View>
	)

	const renderSeparator = () => (
		<View style={{ marginVertical: 10, borderBottomWidth: 2, opacity: 0.5, borderColor: 'black' }}></View>
	)

	return (
		<View style={[styles.mainMargin, styles.centerMain]}>
			{
				solicitudes.length === 0 
				? <ErrorMessage message='No hay solicitudes, debe crear una solicitud' />
				: <FlatList 
						data={ solicitudes }
						keyExtractor={ (item) => item.id }
						renderItem={ ({item}) => <Solicitudes item={item} /> }
						ListEmptyComponent={() => renderEmptySolicitudes()}
						ListHeaderComponent={() => renderHeader()}
						ItemSeparatorComponent={ () => renderSeparator()  }
					/>
			}
		</View>
	)
}
