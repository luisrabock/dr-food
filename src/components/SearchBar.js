import React from "react";
import PropTypes from "prop-types";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => (
  <View style={styles.container}>
    <Feather name="search" size={30} style={styles.iconStyle} />
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.inputStyle}
      placeholder="Search"
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

SearchBar.propTypes = {
  term: PropTypes.string.isRequired,
  onTermChange: PropTypes.func.isRequired,
  onTermSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
