import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';

export default function List() {
	const recipe = [
		{ id: '1', name: 'plate 1' },
		{ id: '2', name: 'plate 2' },
		{ id: '3', name: 'plate 3' },
		{ id: '4', name: 'plate 4' },
		{ id: '5', name: 'plate 5' },
		{ id: '6', name: 'plate 6' },
		{ id: '7', name: 'plate 7' },
		{ id: '8', name: 'plate 8' },
	];
	return (
		<FlatList
			horizontal={true}
			data={recipe}
			renderItem={({ list }) => {
				return (
					<View style={{}}>
						{/* list 1 */}
						<View
							style={{
								borderColor: 'grey',

								width: '100%',
								shadowColor: '#000',
								shadowOffset: {
									width: 0,
									height: 2,
								},
								shadowOpacity: 0.25,
								shadowRadius: 3.84,

								elevation: 5,
								alignItems: 'center',
							}}
						>
							<Image
								source={require('../assets/image/plate2.png')}
								style={{ width: '80%', resizeMode: 'contain' }}
							/>
							<View style={{ width: '80%', paddingBottom: '10%' }}>
								<Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Recipe</Text>
								<Text style={{ fontSize: 16, textAlign: 'center' }}>
									{' '}
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
								</Text>
							</View>
						</View>
						{/* ==list 2=== */}
						<View
							style={{
								borderColor: 'grey',

								width: '100%',
								shadowColor: '#000',
								shadowOffset: {
									width: 0,
									height: 2,
								},
								shadowOpacity: 0.25,
								shadowRadius: 3.84,

								elevation: 5,
								alignItems: 'center',
							}}
						>
							<Image
								source={require('../assets/image/plate1.png')}
								style={{ width: '80%', resizeMode: 'contain' }}
							/>
							<View style={{ width: '80%', paddingBottom: '10%' }}>
								<Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Recipe</Text>
								<Text style={{ fontSize: 16, textAlign: 'center' }}>
									{' '}
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
								</Text>
							</View>
						</View>
					</View>
				);
			}}
		/>
	);
}
