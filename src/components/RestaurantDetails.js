import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet } from "react-native";

const RestaurantDetails = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image_url }} />
      <Text style={styles.name}>{data.name}</Text>
      <Text>{`${data.rating} Stars, ${data.review_count} Reviews`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

RestaurantDetails.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default RestaurantDetails;
