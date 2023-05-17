import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { green4, green5, red } from "../utils/colors";
import Constants from "expo-constants";
import { useState } from "react";

export default function FollowingTab({ data, correctAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  return (
    <>
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>{data.question}</Text>
          <View style={{ marginTop: 40, marginTop: 130 }}>
            {data.options.map((item, index) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.selectOption,
                    item.id === correctAnswer.id
                      ? { backgroundColor: green5 }
                      : selectedAnswer?.id === item.id &&
                        selectedAnswer?.id !== correctAnswer.id
                      ? { backgroundColor: red }
                      : {},
                  ]}
                  key={index}
                  onPress={() => setSelectedAnswer(item)}
                >
                  <Text style={styles.textOption}>{item.answer}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginRight: 73,
    marginLeft: 17,
    marginTop: 205 - Constants.statusBarHeight,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  selectOption: {
    width: "100%",
    height: 52,
    backgroundColor: green4,
    borderRadius: 8,
    justifyContent: "center",
    paddingLeft: 12,
    marginBottom: 8,
  },
  textOption: {
    color: "white",
    fontSize: 17,
  },
});
