import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { useState, useRef, useEffect, memo } from "react";
import {
  green,
  green2,
  green3,
  grey,
  orange,
  orange1,
  yellow,
} from "../utils/colors";
import { useFollowingStore } from "../stores";
import { shallow } from "zustand/shallow";

const FollowingTab = () => {
  const {
    showAnswer,
    setAnswer,
    following,
    fetch,
    setActiveIndex,
    activeItemIndex,
  } = useFollowingStore(
    (state) => ({
      showAnswer: state.showAnswer,
      setAnswer: state.setAnswer,
      following: state.following,
      fetch: state.fetch,
      setActiveIndex: state.setActiveIndex,
      activeItemIndex: state.activeItemIndex,
    }),
    shallow
  );
  const [contentHeight, setContentHeight] = useState(0);
  const flatList = useRef();

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

  const fetchMore = () => {
    fetch();
  };

  const onViewableItemsChanged = ({ viewableItems }) => {
    try {
      setActiveIndex(viewableItems[0]?.index);
    } catch (err) {
      console.log(err);
    }
  };

  const OptionItem = ({ color, value }) => {
    return (
      <View
        style={[
          styles.numberOptions,
          {
            backgroundColor: color,
          },
        ]}
      >
        <Text style={{ color: "white", fontSize: 20 }}>{value}</Text>
      </View>
    );
  };

  const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);

  const itemLayout = (data, index) => ({
    index,
    length: contentHeight,
    offset: contentHeight * index,
  });

  return (
    <>
      {showAnswer ? (
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>
            {following[activeItemIndex]?.flashcard_front}
          </Text>
          <View style={styles.separator} />
          <Text style={{ color: green, fontWeight: 700 }}>Answer</Text>
          <Text style={styles.answerTitle}>
            {following[activeItemIndex]?.flashcard_back}
          </Text>
          <View style={{ marginTop: 40 }}>
            <Text style={{ color: grey, fontSize: 14 }}>
              How well did you know this?
            </Text>
            <View style={styles.optionContainer}>
              {options.map((item, index) => (
                <OptionItem key={index} color={item.color} value={item.value} />
              ))}
            </View>
          </View>
        </ScrollView>
      ) : (
        <View
          style={styles.content}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout;
            setContentHeight(height);
          }}
        >
          <FlatList
            ref={flatList}
            contentContainerStyle={{
              alignSelf: "center",
              flexDirection: "column",
            }}
            data={following}
            onEndReached={fetchMore}
            onEndReachedThreshold={0.1}
            renderItem={({ item, index }) => (
              <View
                style={{
                  height: contentHeight,
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 30 }}>
                  {item?.flashcard_front}
                </Text>
              </View>
            )}
            pagingEnabled
            centerContent={true}
            contentInsetAdjustmentBehavior="automatic"
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            viewabilityConfigCallbackPairs={
              viewabilityConfigCallbackPairs.current
            }
            keyExtractor={(item, index) => String(index)}
            initialScrollIndex={activeItemIndex}
            getItemLayout={itemLayout}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginRight: 73,
    marginLeft: 16,
    marginTop: 20,
    justifyContent: "center",
    flexDirection: "column",
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
  scrollView: {
    marginRight: 73,
    marginLeft: 16,
    marginTop: 20,
  },
  answerTitle: {
    color: grey,
    fontWeight: 400,
    fontSize: 20,
    marginTop: 5,
  },
  optionContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 5,
  },
});

export default memo(FollowingTab);
