import React, { useContext } from 'react'
import { View, Text, Modal, Alert, SafeAreaView, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SolicitudesContext } from '../context/SolicitudesContext';

import { useForm } from '../hooks/useForm';
import DatePicker from 'react-native-date-picker';
import SwitchRender from './SwitchRender';

import { styles as myStyle } from '../theme/theme';

export type Clientes = {
	cliente: string;
	email: string;
	date: Date;
	isSupport?: boolean;
	isRetiro?: boolean;
	isOther?: boolean;
	description: string;
}

type Props = {
	isShowModal: boolean;
	setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Formulario = ({isShowModal, setIsShowModal}: Props) => {

	//const [solicitudes, setSolicitudes] = useState<Clientes[]>([]);

	const { getSolicitudes } = useContext(SolicitudesContext)

	const { cliente, email, date, 
		isSupport, isRetiro, isOther, description,
		onChange, resetForm } = useForm({
		cliente: '',
		email: '',
		date: new Date(),
		isSupport: false,
		isRetiro: false,
		isOther: false,
		description: ''
	});

	const handleCrearSolicitud = () => {

		if(!cliente || !email || !date || !description){
			Alert.alert(
				'Error',
				'Campos obligatorios'
			)
			return;
		}

		const nuevaSolicitud = {
			cliente,
			email,
			date,
			isSupport,
			isRetiro,
			isOther,
			description
		}

		//setSolicitudes([...solicitudes, nuevaSolicitud]);
		getSolicitudes(nuevaSolicitud as Clientes);
		resetForm();
		setIsShowModal(!isShowModal);
	}

	return (
		<Modal 
			animationType='fade'
			visible={isShowModal}	
		>
			<SafeAreaView style={{ flex: 1 }}>
				<Text style={styles.titleForm}>Nueva solicitud</Text>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<TouchableOpacity onPress={ () => setIsShowModal(!isShowModal)}>
						<Text style={{
							...myStyle.textProfile, 
							...myStyle.btnDefault,
							marginHorizontal: 20
							}}
						>
							Cerrar
						</Text>
					</TouchableOpacity>
					<View style={styles.containerForm}>
						<Text style={styles.label}>Nombre</Text>
						<TextInput
							style={styles.input}
							placeholder='Nombre cliente'
							placeholderTextColor={'gray'}
							value={ cliente }
							onChangeText={ (e) => onChange(e, 'cliente') }
						/>
					</View>

					<View style={styles.containerForm}>
						<Text style={styles.label}>Correo</Text>
						<TextInput
							style={styles.input}
							keyboardType='email-address'
							placeholder='correo@tudominio.cl'
							placeholderTextColor={'gray'}
							value={ email }
							onChangeText={ (e) => onChange(e, 'email') }
						/>
					</View>
					<View style={styles.containerForm}>
						<Text style={styles.label}>Fecha ingreso</Text>
						<View style={styles.fecha}>
							<DatePicker 
								date={date}
								locale='es'
								mode='date'
								onDateChange={(e) => onChange(e, 'date')}
							/>
						</View>
					</View>
					
					<View style={styles.containerForm}>
						<Text style={styles.label}>Tipo de solicitud</Text>
						<SwitchRender name='Soporte' valueRD={isSupport} onChange={ (e:any) => onChange(e, 'isSupport') }/>
						<SwitchRender name='Retiro de equipos' valueRD={isRetiro} onChange={ (e:any) => onChange(e, 'isRetiro') }/>
						<SwitchRender name='Otros' valueRD={isOther} onChange={ (e:any) => onChange(e, 'isOther') }/>
					</View>

					<View style={styles.containerForm}>
						<Text style={styles.label}>Descripción</Text>
						<TextInput
							style={styles.input}
							placeholder='Descripción'
							placeholderTextColor={'gray'}
							multiline
							numberOfLines={4}
							editable
							value={ description }
							onChangeText={ (e) => onChange(e, 'description') }
						/>
					</View>

					<TouchableOpacity onPress={handleCrearSolicitud}>
						<Text style={{
							...myStyle.textProfile, 
							...myStyle.btnDefault,
							marginHorizontal: 20,
							marginBottom: 30,
							backgroundColor: 'green'
						}}
						>
							Crear solicitud
						</Text>
					</TouchableOpacity>
				</ScrollView>

			</SafeAreaView>
		</Modal>	
	)
}

const styles = StyleSheet.create({
	titleForm:{
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 15,
		color: 'black'
	},
	containerForm: {
		marginTop: 20,
		marginHorizontal: 30
	},
	label:{
		color: 'black',
		fontSize: 20,
		fontWeight: 'bold',
		marginVertical: 10
	},
	input:{
		backgroundColor: 'cyan',
		borderRadius: 10,
		paddingHorizontal: 15
	},
	switch:{
		justifyContent:'space-between', 
		flexDirection:'row', 
		alignItems: 'center'
	},
	fecha:{
		backgroundColor: 'cyan'
	}
})