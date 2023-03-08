import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const GenderPredictor = () => {
	const [name, setName] = useState("");
	const [gender, setGender] = useState(null);

	useEffect(() => {
		if (name.trim() === "") {
			setGender(null);
			return;
		}

		fetch(`https://api.genderize.io/?name=${name}`)
			.then((response) => response.json())
			.then((data) => setGender(data.gender))
			.catch((error) => console.error(error));
	}, [name]);

	const color = gender === "male" ? "blue" : "pink";

	return (
		<View style={[styles.container, { backgroundColor: color }]}>
			<TextInput
				style={styles.input}
				placeholder="Ingrese un nombre"
				value={name}
				onChangeText={setName}
			/>
			<Text style={styles.text}>
				{gender
					? `La persona ${name} es de género ${gender}`
					: "Ingrese un nombre para predecir el género"}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		width: "80%",
		height: 50,
		borderWidth: 1,
		borderColor: "gray",
		padding: 10,
		marginBottom: 20,
		fontSize: 20,
		fontWeight: "bold",
		color: "gray",
		textAlign: "center",
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
		color: "white",
	},
});

export default GenderPredictor;
