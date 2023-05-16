import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import {
  dark3,
  green,
  green2,
  green3,
  grey,
  orange,
  orange1,
  yellow,
} from "../utils/colors";

export default function App() {
  const Tabs = {
    FOLLOWING: "Following",
    FOR_YOU: "For You",
  };
  const [selectedTab, setSelectedTab] = useState(Tabs.FOLLOWING);
  const [showAnswer, setShowAnswer] = useState(false);
  const options = [
    {
      color: orange,
      value: 1,
    },
    {
      color: orange1,
      value: 2,
    },
    {
      color: yellow,
      value: 3,
    },
    {
      color: green2,
      value: 4,
    },
    {
      color: green3,
      value: 5,
    },
  ];

  return (
    <>
      <View style={styles.container}>
        <View style={styles.tabs}>
          <TouchableOpacity
            style={styles.tabItems}
            onPress={() => setSelectedTab(Tabs.FOLLOWING)}
          >
            <Text style={styles.tabText}>{Tabs.FOLLOWING}</Text>
            {selectedTab === Tabs.FOLLOWING && (
              <View style={styles.bottomLine} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabItems}
            onPress={() => setSelectedTab(Tabs.FOR_YOU)}
          >
            <Text style={styles.tabText}>{Tabs.FOR_YOU}</Text>
            {selectedTab === Tabs.FOR_YOU && <View style={styles.bottomLine} />}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.content}
          onPress={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? (
            <ScrollView>
              <Text style={styles.title}>
                What was the name of the Act that created federal subsidies for
                the construction of a transcontinental railroad?
              </Text>
              <View style={styles.separator} />
              <Text style={{ color: green, fontWeight: 700 }}>Answer</Text>
              <Text
                style={{
                  color: grey,
                  fontWeight: 400,
                  fontSize: 20,
                  marginTop: 5,
                }}
              >
                With the rapid settlement in wester territories, Congress
                decided that an efficient railroad transport to the Pacific
                coast would be beneficial and passed the Pacific Railway Act of
                1862 during the Civil War to promote easier western
                transportation for the North.
              </Text>
              <View style={{ marginTop: 40 }}>
                <Text style={{ color: grey, fontSize: 14 }}>
                  How well did you know this?
                </Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginTop: 5,
                  }}
                >
                  {options.map((item, index) => {
                    return (
                      <View
                        key={index}
                        style={[
                          styles.numberOptions,
                          {
                            backgroundColor: item.color,
                          },
                        ]}
                      >
                        <Text style={{ color: "white", fontSize: 20 }}>
                          {item.value}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            </ScrollView>
          ) : (
            <View>
              <Text style={styles.title}>
                What was the name of the Act that created federal subsidies for
                the construction of a transcontinental railroad?
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <View style={styles.bottomDescription}>
          <Text style={{ color: "white", fontSize: 16 }}>AP US History</Text>
          <Text style={{ color: "white", fontSize: 14 }}>
            Topic 5.2: Manifest Destiny #apush5_1
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Playlist - Unit 5: Period 5: 1844-1877
          </Text>
          <Text style={styles.arrowRight}>{">"}</Text>
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
  separator: {
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 0.2,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  content: {
    flex: 1,
    width: "80%",
    marginLeft: 10,
    marginTop: 20,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
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
    marginBottom: 70,
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 30,
  },
  footerText: {
    marginTop: 5,
    marginLeft: 20,
    fontSize: 14,
    color: "white",
  },
  arrowRight: {
    marginTop: 5,
    fontSize: 14,
    color: "white",
    marginRight: 20,
  },
  numberOptions: {
    height: 60,
    width: 60,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
