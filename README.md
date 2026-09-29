# Carte Étudiant — Digital Student ID Card

A small **React Native / Expo** app that displays a digital student ID card:
school logo and name, student last/first name, and academic year, laid out as a card.

Built as an introductory React Native exercise (layout with Flexbox, images, `StyleSheet`, safe areas).

## Tech stack

- Expo SDK 54
- React Native 0.81 / React 19

## Getting started

```bash
npm install
npm start          # then scan the QR code with Expo Go, or press a / i / w
```

## Customising the card

The data shown on the card lives in [`config/student.js`](config/student.js).
Every field can be overridden without touching the code by creating a `.env` file:

```bash
cp .env.example .env
```

| Variable | Field |
|---|---|
| `EXPO_PUBLIC_SCHOOL_NAME` | School name |
| `EXPO_PUBLIC_STUDENT_LAST_NAME` | Last name |
| `EXPO_PUBLIC_STUDENT_FIRST_NAME` | First name |
| `EXPO_PUBLIC_ACADEMIC_YEAR` | Academic year |
| `EXPO_PUBLIC_STUDENT_ID` | Student number (hidden when empty) |
| `EXPO_PUBLIC_STUDENT_PROGRAM` | Program / major (hidden when empty) |

To change the logo, replace `assets/emsi.png` (or update the path in `config/student.js`).

## Project structure

```
carte-etudiant/
├── App.js              # Card UI
├── config/student.js   # Card data (with env overrides)
├── assets/             # Logo, icons, splash
└── app.json            # Expo configuration
```
