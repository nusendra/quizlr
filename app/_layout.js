import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { dark1, dark2, dark4 } from "../utils/colors";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useFollowingStore } from "../stores";
import { shallow } from "zustand/shallow";

export default function App() {
  const { following, setAnswer } = useFollowingStore(
    (state) => ({
      following: state.following,
      setAnswer: state.setAnswer,
    }),
    shallow
  );

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
          <View style={styles.footerItem}>
            <Image source={require("../assets/images/home.png")} />
            <Text style={styles.bottomText}>Home</Text>
          </View>
          <View style={styles.footerItem}>
            <Image source={require("../assets/images/compas.png")} />
            <Text style={styles.bottomText}>Leaderboard</Text>
          </View>
          <View style={styles.footerItem}>
            <Image source={require("../assets/images/timer.png")} />
            <Text style={styles.bottomText}>Activity</Text>
          </View>
          <View style={styles.footerItem}>
            <Image source={require("../assets/images/bookmark.png")} />
            <Text style={styles.bottomText}>Bookmarks</Text>
          </View>
          <View style={styles.footerItem}>
            <Image source={require("../assets/images/profile.png")} />
            <Text style={styles.bottomText}>Profile</Text>
          </View>
        </View>
        <View style={styles.rightButton}>
          <View style={[styles.rightButtonItem, { marginBottom: 10 }]}>
            <Image
              source={{ uri: following?.user?.avatar }}
              style={{ height: 45, width: 45 }}
            />
          </View>
          <View style={styles.rightButtonItem}>
            <Image source={require("../assets/images/Like.png")} />
            <Text style={styles.textRightButton}>87</Text>
          </View>
          <View style={styles.rightButtonItem}>
            <Image source={require("../assets/images/Comments.png")} />
            <Text style={styles.textRightButton}>2</Text>
          </View>
          <View style={styles.rightButtonItem}>
            <Image source={require("../assets/images/Share.png")} />
            <Text style={styles.textRightButton}>17</Text>
          </View>
          <View style={styles.rightButtonItem}>
            <Image source={require("../assets/images/Bookmark-white.png")} />
            <Text style={styles.textRightButton}>203</Text>
          </View>
          <TouchableOpacity style={styles.rightButtonItem} onPress={setAnswer}>
            <Image source={require("../assets/images/Flip.png")} />
            <Text style={styles.textRightButton}>Flip</Text>
          </TouchableOpacity>
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
    height: 60,
    paddingRight: 20,
    paddingLeft: 20,
  },
  bottomText: {
    color: "white",
    fontSize: 10,
    marginTop: 7,
  },
  footerItem: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rightButton: {
    position: "absolute",
    right: 16,
    bottom: 110,
  },
  rightButtonItem: {
    alignItems: "center",
    marginTop: 17,
  },
  textRightButton: {
    color: "white",
    marginTop: 10,
  },
});
