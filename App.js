import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ola = "teror";

const App = () => (
    <View style={styles.container}>
        <Text>{`${ola} terror`}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default App;
