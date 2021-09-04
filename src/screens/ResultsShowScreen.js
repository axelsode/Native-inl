import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.h2}>{result.phone}</Text>
      <Text style={styles.h2}>
        {result.location.address1} {result.location.city}
      </Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    margin: 5,
  },
  name: {
    fontSize: 18,
    marginLeft: 5,
  },
  h2: {
    fontSize: 16,
    marginLeft: 5,
  },
});

export default ResultsShowScreen;
