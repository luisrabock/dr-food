import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import yelpService from "../services/yelpService";

const RestaurantsShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const id = navigation.getParam("id");

  console.log("restaurant..", restaurant);

  const getSingleRestaurant = async (restaurantId) => {
    const response = await yelpService.get(`/${restaurantId}`);
    setRestaurant(response.data);
  };

  useEffect(() => {
    getSingleRestaurant(id);
  }, []);

  if (!restaurant) return null;

  return (
    <View>
      <Text>{restaurant.name}</Text>
      <FlatList
        data={restaurant.photos}
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
  },
});

RestaurantsShowScreen.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default RestaurantsShowScreen;
