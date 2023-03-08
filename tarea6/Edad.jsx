import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";

const AgeDetector = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState(null);
	const [ageGroup, setAgeGroup] = useState(null);
	const [image, setImage] = useState(null);

	useEffect(() => {
		if (name.trim() === "") {
			setAge(null);
			setAgeGroup(null);
			setImage(null);
			return;
		}

		fetch(`https://api.agify.io/?name=${name}`)
			.then((response) => response.json())
			.then((data) => {
				setAge(data.age);
				if (data.age <= 30) {
					setAgeGroup("joven");
					setImage(require("./assets/joven.png"));
				} else if (data.age <= 60) {
					setAgeGroup("adulto");
					setImage(require("./assets/adulto.png"));
				} else {
					setAgeGroup("anciano");
					setImage(require("./assets/anciano.png"));
				}
			})
			.catch((error) => console.error(error));
	}, [name]);

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Ingrese un nombre"
				value={name}
				onChangeText={setName}
			/>
			{age && (
				<View style={styles.resultContainer}>
					<Text style={styles.ageText}>Edad: {age}</Text>
					<Text style={styles.ageGroupText}>Grupo de edad: {ageGroup}</Text>
					<Image style={styles.image} source={image} />
				</View>
			)}
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
	resultContainer: {
		alignItems: "center",
	},
	ageText: {
		fontSize: 30,
		fontWeight: "bold",
		color: "black",
		marginBottom: 10,
	},
	ageGroupText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "black",
		marginBottom: 20,
	},
	image: {
		width: 200,
		height: 200,
		resizeMode: "contain",
	},
});

export default AgeDetector;
