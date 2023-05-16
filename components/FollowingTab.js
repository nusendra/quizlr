import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";
import {
  green,
  green2,
  green3,
  grey,
  orange,
  orange1,
  yellow,
} from "../utils/colors";

export default function FollowingTab({ data }) {
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
      <TouchableOpacity
        style={styles.content}
        onPress={() => setShowAnswer(!showAnswer)}
      >
        {showAnswer ? (
          <ScrollView>
            <Text style={styles.title}>{data.flashcard_front}</Text>
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
              {data.flashcard_back}
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
            <Text style={styles.title}>{data.flashcard_front}</Text>
          </View>
        )}
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginRight: 73,
    marginLeft: 16,
    marginTop: 20,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  separator: {
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 0.2,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  numberOptions: {
    height: 60,
    width: 60,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
