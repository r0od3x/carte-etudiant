// Card data. Each value can be overridden with an EXPO_PUBLIC_* variable in a .env file
// (see .env.example), so the same app can be reused for any student.
export const student = {
  school: process.env.EXPO_PUBLIC_SCHOOL_NAME || "EMSI MAARIF",
  lastName: process.env.EXPO_PUBLIC_STUDENT_LAST_NAME || "GHALBI",
  firstName: process.env.EXPO_PUBLIC_STUDENT_FIRST_NAME || "MOHAMED REDA",
  academicYear: process.env.EXPO_PUBLIC_ACADEMIC_YEAR || "2025 / 2026",
  studentId: process.env.EXPO_PUBLIC_STUDENT_ID || "",
  program: process.env.EXPO_PUBLIC_STUDENT_PROGRAM || "",
};

export const schoolLogo = require("../assets/emsi.png");
