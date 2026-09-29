import React from "react";
import { Image, StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { student, schoolLogo } from "./config/student";

function Field({ label, value }) {
  if (!value) return null;
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Image source={schoolLogo} style={styles.logo} resizeMode="contain" />
            <View style={styles.headerText}>
              <Text style={styles.schoolName}>{student.school}</Text>
              <Text style={styles.cardTitle}>CARTE D'ÉTUDIANT</Text>
            </View>
          </View>

          <View style={styles.cardBody}>
            <Field label="Nom" value={student.lastName} />
            <Field label="Prénom" value={student.firstName} />
            <Field label="N° étudiant" value={student.studentId} />
            <Field label="Filière" value={student.program} />
            <Field label="Année universitaire" value={student.academicYear} />
          </View>

          <View style={styles.cardFooter} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const COLORS = {
  background: "#f6f7fb",
  card: "#ffffff",
  primary: "#0b6e4f",
  text: "#111827",
  muted: "#6b7280",
  border: "#e5e7eb",
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  logo: {
    width: 72,
    height: 72,
    marginRight: 16,
  },
  headerText: {
    flex: 1,
  },
  schoolName: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.text,
    letterSpacing: 1,
  },
  cardTitle: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.primary,
    letterSpacing: 2,
  },
  cardBody: {
    padding: 20,
  },
  field: {
    marginBottom: 14,
  },
  label: {
    fontSize: 12,
    color: COLORS.muted,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  value: {
    marginTop: 2,
    fontSize: 17,
    color: COLORS.text,
    fontWeight: "bold",
  },
  cardFooter: {
    height: 8,
    backgroundColor: COLORS.primary,
  },
});
