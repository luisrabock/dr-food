import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultsList = ({ title, data }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(el) => el.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

ResultsList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
};

export default ResultsList;
