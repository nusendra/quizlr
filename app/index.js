import { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { dark3, grey2 } from "../utils/colors";
import FollowingTab from "../components/FollowingTab";
import ForYouTab from "../components/ForYouTab";
import Constants from "expo-constants";
import { useFollowingStore, useForYouStore, useTabStore } from "../stores";
import { tabOptions } from "../utils/constants";

export default function App() {
  const Tabs = tabOptions;

  const fetchFollowing = useFollowingStore((state) => state.fetch);
  const following = useFollowingStore((state) => state.following);
  const fetchForYou = useForYouStore((state) => state.fetch);
  const forYou = useForYouStore((state) => state.forYou);
  const correctAnswer = useForYouStore((state) => state.correctAnswer);
  const activeTab = useTabStore((state) => state.activeTab);
  const setActiveTab = useTabStore((state) => state.setActiveTab);
  const resetFollowingAnswer = useFollowingStore((state) => state.resetAnswer);
  const resetForYouAnswer = useForYouStore((state) => state.resetAnswer);

  const setTab = (tab) => {
    setActiveTab(tab);
    resetFollowingAnswer();
    resetForYouAnswer();
  };

  useEffect(() => {
    fetchFollowing();
    fetchForYou();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.tabs}>
          <View style={styles.readingTime}>
            <Image source={require("../assets/images/timer.png")} />
            <Text style={{ color: grey2, marginLeft: 4 }}>10m</Text>
          </View>
          <TouchableOpacity
            style={styles.tabItems}
            onPress={() => setTab(Tabs.FOLLOWING)}
          >
            <Text style={styles.tabText}>{Tabs.FOLLOWING}</Text>
            {activeTab === Tabs.FOLLOWING && <View style={styles.bottomLine} />}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabItems}
            onPress={() => setTab(Tabs.FOR_YOU)}
          >
            <Text style={styles.tabText}>{Tabs.FOR_YOU}</Text>
            {activeTab === Tabs.FOR_YOU && <View style={styles.bottomLine} />}
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <Image source={require("../assets/images/search.png")} />
          </TouchableOpacity>
        </View>
        {activeTab === Tabs.FOLLOWING ? (
          <FollowingTab data={following} />
        ) : (
          <ForYouTab
            data={forYou}
            correctAnswer={correctAnswer?.correct_options[0]}
          />
        )}
        <View style={styles.bottomDescription}>
          <Text style={{ color: "white", fontSize: 16 }}>
            {following?.user?.name}
          </Text>
          <Text style={{ color: "white", fontSize: 14 }}>
            {following?.description}
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/images/play.png")}
              style={styles.play}
            />
            <Text style={styles.footerText}>{following?.playlist}</Text>
          </View>
          <Image
            source={require("../assets/images/arrow-right.png")}
            style={styles.arrowRight}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    marginTop: Constants.statusBarHeight,
  },
  readingTime: {
    position: "absolute",
    left: 16,
    marginTop: 5,
    flexDirection: "row",
  },
  searchButton: {
    position: "absolute",
    right: 16,
    marginTop: 5,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "center",
  },
  tabItems: {
    marginRight: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    color: "white",
    fontSize: 20,
    marginBottom: 5,
  },
  bottomLine: {
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 2,
    width: 40,
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  bottomDescription: {
    marginLeft: 20,
    width: "80%",
    bottom: 0,
    marginBottom: 20,
  },
  footer: {
    backgroundColor: dark3,
    width: "100%",
    bottom: 0,
    marginBottom: 80,
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 30,
  },
  footerText: {
    marginTop: 5,
    marginLeft: 4,
    fontSize: 14,
    color: "white",
  },
  play: {
    marginTop: 10,
    marginLeft: 16,
  },
  arrowRight: {
    marginTop: 10,
    marginRight: 16,
  },
});
