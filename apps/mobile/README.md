# Courtwave mobile

Flutter foundation for iOS and Android. This milestone provides a branded welcome/empty screen and theme; tournament viewing, manager login, scheduling, and storage are subsequent milestones. No backend credentials are required to run it.

## Run and check

See [shared development setup](../../docs/development.md) for tool installation and root workspace commands. From the repository root:

```sh
pnpm mobile:analyze
pnpm mobile:test
pnpm mobile:build:android
pnpm mobile:build:ios
```

For an interactive run, start an iOS simulator or Android emulator, then:

```sh
cd apps/mobile
../../scripts/flutter.sh pub get
../../scripts/flutter.sh devices
../../scripts/flutter.sh run -d <device-id>
```

The root wrapper resolves an installed Flutter SDK or the local Courtwave toolchain. On other computers, install the pinned SDK plus native platform tools; do not commit `android/local.properties`, signing configuration, or Flutter-generated caches.

## Toolchain baseline

- Flutter **3.47.7**, stable, with Dart **3.13.5**, pinned in `.flutter-version`.
- Android SDK platform/target **36**, minimum Android API **24**, build tools **36.0.0**, NDK **28.2.13676358**, and JDK **17**. Flutter's generated Gradle configuration supplies platform defaults.
- iOS deployment target **15.0**. Simulator builds require Xcode and an installed iOS runtime. Physical device and release signing require a separately selected Apple development team.

The Apple Silicon SDK installed during setup came from the [official Flutter release manifest](https://storage.googleapis.com/flutter_infra_release/releases/releases_macos.json), release revision `abaf9c523780a608bd46686fd5e53740a07077f8`. Archive `stable/macos/flutter_macos_arm64_3.47.7-stable.zip` was verified against SHA-256 `dd9da574c3168460550117eb0e8dd0313ae934fabf64a82a6d557fff5fd1422e`. The local installation lives outside the repository at `~/.local/share/courtwave-toolchains/flutter`; it is not an application dependency to commit.

## Foundation boundaries

`com.example.courtwave` is a temporary Android application ID and iOS bundle identifier, with `com.example.courtwave.RunnerTests` for the iOS test target. Replace these before distribution when the permanent identity is decided. The generated Android release configuration uses debug signing and is not a release setup. Launcher icons are scaffold placeholders; the supplied Courtwave logo is used only within the welcome screen.

The palette in `lib/theme/courtwave_theme.dart` mirrors the shared [design token specification](../../assets/design-tokens.json). The copied [logo](assets/brand/courtwave-logo.png) is the same replaceable concept as the root brand asset. Update both copies when replacing the brand.

Widget checks cover the signed-out empty screen and content reachability at 200% text size on a small phone. Platform build checks do not verify authentication, database access, public links, score entry, or scheduling, which are not implemented in M1.
