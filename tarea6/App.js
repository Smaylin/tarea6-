import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

import BoxSm from "./BoxSm.jsx";
import Genero from "./Genero.jsx";
import Edad from "./Edad.jsx";
import UniversidadesLista from "./UniversidadesLista.jsx";
import ClimaRD from "./ClimaRD.jsx";
import Contratame from "./Contratame.jsx";

const App = () => {
	const [activeScreen, setActiveScreen] = useState("Portada");

	const handleScreenChange = (screenName) => {
		setActiveScreen(screenName);
	};

	const renderScreen = () => {
		switch (activeScreen) {
			case "Caja":
				return <BoxSm />;
			case "Genero":
				return <Genero />;
			case "Edad":
				return <Edad />;
			case "UniversidadesLista":
				return <UniversidadesLista />;
			case "ClimaRD":
				return <ClimaRD />;
			case "Contratame":
				return <Contratame />;
			default:
				return <BoxSm />;
		}
	};

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			{renderScreen()}
			<Button title="Caja" onPress={() => handleScreenChange("Caja")} />
			<Button title="Genero" onPress={() => handleScreenChange("Genero")} />
			<Button title="Edad" onPress={() => handleScreenChange("Edad")} />
			<Button
				title="UniversidadesLista"
				onPress={() => handleScreenChange("UniversidadesLista")}
			/>
			<Button title="ClimaRD" onPress={() => handleScreenChange("ClimaRD")} />
			<Button
				title="Contratame"
				onPress={() => handleScreenChange("Contratame")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	bottomNavigationBar: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
		gridGap: 40,
		height: 64,
		backgroundColor: "#F5F5F5",
		paddingHorizontal: 16,
		borderTopWidth: 1,
		borderTopColor: "#EFEFEF",
	},
	button: {
		flex: 1,
		marginHorizontal: 10,
		width: 50,
	},
});

export default App;
