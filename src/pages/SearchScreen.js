import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "../components/SearchBar";
import ResultsList from "../components/Resultslist";

import useRestaurants from "../hooks/useRestaurants";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filtersByPrice = (price) => {
    return restaurants.filter((el) => el.price === price);
  };

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>
        We found
        {restaurants.length}
      </Text>
      <ResultsList data={filtersByPrice("$")} title="Cost Effective" />
      <ResultsList data={filtersByPrice("$$")} title="Bit Pricier" />
      <ResultsList data={filtersByPrice("$$$")} title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFFFFF",
  },
});

export default SearchScreen;
