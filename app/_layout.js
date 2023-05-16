import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { dark1, dark2, dark4 } from "../utils/colors";
import Constants from "expo-constants";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[dark1, dark2]}
        style={{
          flex: 1,
        }}
      >
        <Slot />
        <View style={styles.footer}>
          <Text style={styles.bottomText}>Home</Text>
          <Text style={styles.bottomText}>Leaderboard</Text>
          <Text style={styles.bottomText}>Activity</Text>
          <Text style={styles.bottomText}>Bookmarks</Text>
          <Text style={styles.bottomText}>Profile</Text>
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: dark4,
    position: "absolute",
    bottom: 0,
    height: 50,
    paddingRight: 20,
    paddingLeft: 20,
  },
  bottomText: {
    marginTop: 15,
    color: "white",
    fontSize: 10,
  },
});
