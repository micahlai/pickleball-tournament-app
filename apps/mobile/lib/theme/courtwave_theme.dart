import 'package:flutter/material.dart';

/// Mirrors the confirmed palette and proposed sizing in assets/design-tokens.json.
/// Keep these values aligned when the shared design specification changes.
abstract final class CourtwaveTokens {
  static const earth = Color(0xFF81745E);
  static const slate = Color(0xFF5F6582);
  static const teal = Color(0xFF5F7B82);
  static const sand = Color(0xFFFFD791);
  static const periwinkle = Color(0xFF91A4FF);
  static const white = Color(0xFFFFFFFF);
  static const ink = Color(0xFF202431);

  static const space4 = 4.0;
  static const space8 = 8.0;
  static const space12 = 12.0;
  static const space16 = 16.0;
  static const space24 = 24.0;
  static const space32 = 32.0;
  static const radiusSmall = 8.0;
  static const radiusMedium = 12.0;
  static const touchMinimum = 48.0;
}

final courtwaveTheme = ThemeData(
  useMaterial3: true,
  colorScheme: const ColorScheme.light(
    primary: CourtwaveTokens.slate,
    onPrimary: CourtwaveTokens.white,
    secondary: CourtwaveTokens.teal,
    onSecondary: CourtwaveTokens.white,
    tertiary: CourtwaveTokens.periwinkle,
    onTertiary: CourtwaveTokens.ink,
    surface: CourtwaveTokens.white,
    onSurface: CourtwaveTokens.ink,
    outline: CourtwaveTokens.slate,
  ),
  scaffoldBackgroundColor: CourtwaveTokens.white,
  textTheme: const TextTheme(
    headlineMedium: TextStyle(
      fontSize: 32,
      height: 1.2,
      fontWeight: FontWeight.w700,
      color: CourtwaveTokens.ink,
    ),
    titleLarge: TextStyle(
      fontSize: 24,
      fontWeight: FontWeight.w600,
      color: CourtwaveTokens.ink,
    ),
    titleMedium: TextStyle(
      fontSize: 16,
      fontWeight: FontWeight.w600,
      color: CourtwaveTokens.ink,
    ),
    bodyLarge: TextStyle(fontSize: 16, height: 1.5, color: CourtwaveTokens.ink),
    bodyMedium: TextStyle(
      fontSize: 16,
      height: 1.5,
      color: CourtwaveTokens.ink,
    ),
    bodySmall: TextStyle(fontSize: 14, color: CourtwaveTokens.ink),
  ),
  filledButtonTheme: FilledButtonThemeData(
    style: FilledButton.styleFrom(
      minimumSize: const Size(
        CourtwaveTokens.touchMinimum,
        CourtwaveTokens.touchMinimum,
      ),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(CourtwaveTokens.radiusSmall),
      ),
    ),
  ),
  inputDecorationTheme: const InputDecorationTheme(
    border: OutlineInputBorder(
      borderRadius: BorderRadius.all(
        Radius.circular(CourtwaveTokens.radiusSmall),
      ),
      borderSide: BorderSide(color: CourtwaveTokens.slate),
    ),
    filled: true,
    fillColor: CourtwaveTokens.white,
  ),
);
