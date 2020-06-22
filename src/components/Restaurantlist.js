import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, FlatList } from "react-native";

import RestaurantDetails from "./RestaurantDetails";

const Restaurantlist = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(el) => el.id}
        renderItem={({ item }) => {
          return <RestaurantDetails data={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  titleStyle: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
});

Restaurantlist.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
};

export default Restaurantlist;
