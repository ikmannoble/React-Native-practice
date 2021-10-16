import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.container}>
				<Image source={require('./assets/image/plate1.png')} />
			</View>
			<View style={{ flex: 0.45, marginTop: '10%', width: '90%' }}>
				<Text style={{ fontSize: 36, color: 'green', textAlign: 'center', fontWeight: 'bold' }}>
					<Text style={{ fontStyle: 'italic' }}>f</Text>oo
					<Text style={{ color: 'orange' }}>die</Text>
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'flex-end',
		flex: 0.45,
		width: '90%',
	},
});
