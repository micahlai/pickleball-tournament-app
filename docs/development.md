# Development setup

M1 contains independent Flutter and Next.js foundations. Neither app requires a database account or credentials to start. Authentication and tournament behavior are later milestones.

## Versions

| Tool | Pin | Location of pin |
| --- | --- | --- |
| Node.js LTS | 24.22.0 | `.node-version` |
| pnpm | 11.25.0 | root `package.json` |
| Flutter stable | 3.47.7 | `.flutter-version` |
| Dart | Supplied with Flutter | Flutter SDK |
| Java | Temurin 17 | Local setup / CI |
| CocoaPods | 1.17.0 on this workstation | Homebrew installation; needed for plugins that use Pods |

Dependency lockfiles belong in Git. SDKs, machine paths, generated output, and credentials do not.

## Web

Install the pinned Node and pnpm versions with your preferred version manager, then run from the repository root:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000`. Validate with `pnpm check`; serve the production build with `pnpm start` after `pnpm build`.

The website is a foundation shell. A working server is not evidence that login, tournament links, scoring, or persistence are implemented.

## Mobile

Install [Flutter](https://docs.flutter.dev/install/manual), Xcode and [CocoaPods](https://guides.cocoapods.org/using/getting-started.html) for iOS, and the [Android SDK](https://developer.android.com/studio) with Java 17 for Android. Accept the Android SDK licenses through `flutter doctor --android-licenses` after reviewing them. Android Studio is optional for command-line builds.

From the root:

```sh
pnpm mobile:doctor
pnpm mobile:get
pnpm mobile:analyze
pnpm mobile:test
pnpm mobile:run
pnpm mobile:build:android
pnpm mobile:build:ios
```

Choose a device in `flutter run` or invoke `../../scripts/flutter.sh run -d DEVICE_ID` from `apps/mobile`. The iOS command builds for a simulator without signing. Physical-device and store distribution require separate signing setup and permanent identifiers.

`scripts/flutter.sh` uses `FLUTTER_ROOT`, then a Flutter binary on PATH, then `$HOME/.local/share/courtwave-toolchains/flutter`. When local toolchains exist it also supplies Android SDK and Java defaults, while preserving explicit `ANDROID_HOME`/`JAVA_HOME`. Set `COURTWAVE_TOOLCHAINS` to use another local tools directory. SDK files stay outside Git.

For this workstation, tools were installed under `$HOME/.local/share/courtwave-toolchains`: Flutter, `android-sdk`, `jdk-17/Contents/Home`, and `node-v24.22.0-darwin-arm64`. This does not modify your global shell profile. To use the local Node LTS for a terminal:

```sh
export PATH="$HOME/.local/share/courtwave-toolchains/node-v24.22.0-darwin-arm64/bin:$PATH"
```

Temporary mobile application identifiers are `com.example.courtwave`. Replace them before distribution. They are unrelated to the domain that Vercel serves.

This workstation also has the `Courtwave_API_36` Android emulator. The wrapper discovers its AVD directory automatically. To launch it from the repository root:

```sh
./scripts/flutter.sh emulators
./scripts/flutter.sh emulators --launch Courtwave_API_36
pnpm mobile:run
```

For direct Android tools in one terminal, source `$HOME/.local/share/courtwave-toolchains/android-env.sh`; this helper sets the SDK/JDK/AVD paths without changing your shell profile. For iOS, select an installed simulator in Xcode/Simulator and use `pnpm mobile:run`.

## Configuration boundary

No live Supabase configuration is needed in M1. Future public client URL/publishable-key examples must remain placeholders. A public client key does not authorize privileged operations; database permissions belong in M2. Never place service-role keys, database passwords, signing files, or email credentials in browser/mobile code or committed configuration.

## Checks and CI

The GitHub workflow runs web lint/configuration-tests/types/build, Flutter format/analyze/tests, Android debug APK compilation, and an unsigned iOS simulator build. CI executes after the user pushes to GitHub; local results are recorded in [project status](project-status.md). CI configuration is not a claim of an already successful hosted run.

## Vercel GitHub integration

When ready, push the repository to your GitHub repository, import it in Vercel, and select **Next.js** with **Root Directory `apps/web`** and Node.js **24.x**. Keep access to files outside the Root Directory enabled for the workspace. Enable `ENABLE_EXPERIMENTAL_COREPACK=1` in Vercel so it honors the repository's exact pnpm version, rather than selecting a different pnpm from the lockfile format. Keep the default install command; the app's build script is `pnpm build`, with no custom output directory. See [Vercel package managers](https://vercel.com/docs/package-managers) and [Corepack configuration](https://vercel.com/docs/builds/configure-a-build#corepack).

Add your domain in the Vercel project's Domains settings, then apply the DNS records it provides at your domain provider. No domain, repository remote, hosting project, or deployment is created by M1. Before enabling production hosting, confirm the [Vercel plan's use restrictions](https://vercel.com/docs/plans/hobby) and any cost with the user.
