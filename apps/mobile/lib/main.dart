import 'package:flutter/material.dart';

import 'theme/courtwave_theme.dart';

void main() => runApp(const CourtwaveApp());

class CourtwaveApp extends StatelessWidget {
  const CourtwaveApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Courtwave',
      debugShowCheckedModeBanner: false,
      theme: courtwaveTheme,
      home: const WelcomeScreen(),
    );
  }
}

class WelcomeScreen extends StatelessWidget {
  const WelcomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;

    return Scaffold(
      body: SafeArea(
        child: LayoutBuilder(
          builder: (context, constraints) => SingleChildScrollView(
            child: ConstrainedBox(
              constraints: BoxConstraints(minHeight: constraints.maxHeight),
              child: Center(
                child: ConstrainedBox(
                  constraints: const BoxConstraints(maxWidth: 560),
                  child: Padding(
                    padding: const EdgeInsets.all(CourtwaveTokens.space32),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Image.asset(
                          'assets/brand/courtwave-logo.png',
                          width: 280,
                          semanticLabel: 'Courtwave',
                        ),
                        const SizedBox(height: CourtwaveTokens.space32),
                        Semantics(
                          header: true,
                          child: Text(
                            'Tournament day,\nin one place.',
                            style: textTheme.headlineMedium,
                          ),
                        ),
                        const SizedBox(height: CourtwaveTokens.space16),
                        Text(
                          'A home for your courts, schedule and scores.',
                          style: textTheme.bodyLarge,
                        ),
                        const SizedBox(height: CourtwaveTokens.space32),
                        Container(
                          width: double.infinity,
                          padding: const EdgeInsets.all(
                            CourtwaveTokens.space24,
                          ),
                          decoration: BoxDecoration(
                            color: CourtwaveTokens.sand,
                            borderRadius: BorderRadius.circular(
                              CourtwaveTokens.radiusMedium,
                            ),
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Icon(
                                Icons.sports_tennis_outlined,
                                color: CourtwaveTokens.ink,
                                size: 32,
                              ),
                              const SizedBox(height: CourtwaveTokens.space16),
                              Text(
                                'No tournament selected',
                                style: textTheme.titleMedium,
                              ),
                              const SizedBox(height: CourtwaveTokens.space8),
                              Text(
                                'Tournament viewing and manager tools '
                                'are coming soon.',
                                style: textTheme.bodyMedium,
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
