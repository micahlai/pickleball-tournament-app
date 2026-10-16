import 'package:courtwave/main.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('shows an honest empty shell without requiring sign-in', (
    tester,
  ) async {
    await tester.pumpWidget(const CourtwaveApp());
    await tester.pumpAndSettle();

    expect(find.bySemanticsLabel('Courtwave'), findsOneWidget);
    expect(find.text('No tournament selected'), findsOneWidget);
    expect(find.byType(TextField), findsNothing);
    expect(tester.takeException(), isNull);
  });

  testWidgets('content remains reachable on a small phone at 200% text size', (
    tester,
  ) async {
    tester.view.physicalSize = const Size(320, 568);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);

    tester.platformDispatcher.textScaleFactorTestValue = 2;
    addTearDown(tester.platformDispatcher.clearTextScaleFactorTestValue);

    await tester.pumpWidget(const CourtwaveApp());
    await tester.pumpAndSettle();

    final futureTools = find.text(
      'Tournament viewing and manager tools are coming soon.',
    );
    await tester.ensureVisible(futureTools);
    await tester.pumpAndSettle();

    expect(futureTools.hitTestable(), findsOneWidget);
    expect(tester.takeException(), isNull);
  });
}
