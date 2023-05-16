import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { green4 } from "../utils/colors";
import Constants from "expo-constants";

export default function FollowingTab() {
  return (
    <>
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>
            What was the name of the Act that created federal subsidies for the
            construction of a transcontinental railroad?
          </Text>
          <View style={{ marginTop: 40, marginTop: 130 }}>
            <TouchableOpacity style={styles.selectOption}>
              <Text style={styles.textOption}>Pacific Railway Act</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectOption}>
              <Text style={styles.textOption}>Interstate Commerce Act</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectOption}>
              <Text style={styles.textOption}>Homestead Act</Text>
            </TouchableOpacity>
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
