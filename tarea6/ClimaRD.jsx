import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Clima = () => {
  const [clima, setClima] = useState(null);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=18.5001200&lon=-69.9885700&appid=79e6c0db47325019e06e53c37922655f')
      .then(response => response.json())
      .then(data => setClima(data))
      .catch(error => console.log(error));
  }, []);

  if (!clima) {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Cargando...</Text>
      </View>
    );
  }

  const kelvin = clima.main.temp;
  const celsius = kelvin - 273.15;

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{clima.name}</Text>
      <Text style={styles.temperature}>{celsius.toFixed(1)} °C</Text>
      <Text style={styles.description}>{clima.weather[0].description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  loading: {
    fontSize: 20,
  },
  city: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 80,
  },
  description: {
    fontSize: 20,
  },
});

export default Clima;


