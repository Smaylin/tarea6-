import React from "react";
import { View, Image, StyleSheet } from "react-native";

const BoxSm = () => {
	return (
		<View style={styles.container}>
			<Image source={require("./assets/BoxSm.png")} style={styles.image} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: '#f6f4f0',
	},
	image: {
		width: "200px",
		height: "100%",
		resizeMode: "contain",
	},
});

export default BoxSm;
