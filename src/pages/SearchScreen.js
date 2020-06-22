import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "../components/SearchBar";
import Restaurantlist from "../components/Restaurantlist";

import useRestaurants from "../hooks/useRestaurants";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filtersByPrice = (price) => {
    return restaurants.filter((el) => el.price === price);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <Restaurantlist data={filtersByPrice("$")} title="Cost Effective" />
        <Restaurantlist data={filtersByPrice("$$")} title="Bit Pricier" />
        <Restaurantlist data={filtersByPrice("$$$")} title="Big Spender" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
});

export default SearchScreen;
