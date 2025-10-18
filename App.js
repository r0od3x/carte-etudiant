import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#f6f7fb" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("./assets/emsi.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.schoolName}>EMSI MAARIF</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.label}>
            Nom : <Text style={styles.value}>GHALBI</Text>
          </Text>
          <Text style={styles.label}>
            Prénom : <Text style={styles.value}>MOHAMED REDA</Text>
          </Text>
          <Text style={styles.label}>
            Année universitaire : <Text style={styles.value}>2025 / 2026</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f6f7fb",
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 40,
  },
  logo: {
    width: 140,
    height: 140,
  },
  schoolName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1f2937",
    marginTop: 4,
    letterSpacing: 1,
  },
  info: {
    marginTop: 36,
    alignItems: "center",
    gap: 8, // gap works on modern RN; if error, replace with marginBottom on labels
  },
  label: {
    fontSize: 16,
    color: "#6b7280",
    fontWeight: "500",
  },
  value: {
    fontSize: 17,
    color: "#111827",
    fontWeight: "bold",
  },
});
