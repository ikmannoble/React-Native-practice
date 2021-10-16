import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import List from './components/List';
export default function App() {
	const data = [
		{ id: '1', name: 'plate 1' },
		{ id: '2', name: 'plate 2' },
		{ id: '3', name: 'plate 3' },
		{ id: '4', name: 'plate 3' },
		{ id: '5', name: 'plate 3' },
		{ id: '6', name: 'plate 3' },
		{ id: '7', name: 'plate 3' },
	];
	return (
		<View style={{ flexDirection: 'column', flex: 1 }}>
			<List />
		</View>
	);
}
