import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";

import RestaurantDetails from "./RestaurantDetails";

const Restaurantlist = ({ title, data, navigation }) => {
  if (!data.length) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(el) => el.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantsShow", { id: item.id })
              }
            >
              <RestaurantDetails data={item} />
            </TouchableOpacity>
          );
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
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(Restaurantlist);
