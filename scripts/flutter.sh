#!/usr/bin/env bash
set -euo pipefail

# Prefer an explicitly selected SDK, then PATH, then the local project toolchain.
courtwave_tools="${COURTWAVE_TOOLCHAINS:-$HOME/.local/share/courtwave-toolchains}"
if [[ -n "${FLUTTER_ROOT:-}" ]]; then
  courtwave_flutter="$FLUTTER_ROOT/bin/flutter"
elif command -v flutter >/dev/null 2>&1; then
  courtwave_flutter="$(command -v flutter)"
else
  courtwave_flutter="$courtwave_tools/flutter/bin/flutter"
fi

if [[ ! -x "$courtwave_flutter" ]]; then
  echo 'Flutter SDK not found. Follow docs/development.md or set FLUTTER_ROOT.' >&2
  exit 1
fi

# Also expose its bundled Dart and Flutter commands to platform subprocesses.
export PATH="$(dirname "$courtwave_flutter"):$PATH"

if [[ -z "${ANDROID_HOME:-}" && -d "$courtwave_tools/android-sdk" ]]; then
  export ANDROID_HOME="$courtwave_tools/android-sdk"
fi
if [[ -n "${ANDROID_HOME:-}" ]]; then
  export PATH="$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator:$PATH"
fi
if [[ -z "${ANDROID_AVD_HOME:-}" && -d "$courtwave_tools/android-avd" ]]; then
  export ANDROID_AVD_HOME="$courtwave_tools/android-avd"
fi
if [[ -z "${JAVA_HOME:-}" && -d "$courtwave_tools/jdk-17/Contents/Home" ]]; then
  export JAVA_HOME="$courtwave_tools/jdk-17/Contents/Home"
  export PATH="$JAVA_HOME/bin:$PATH"
fi

exec "$courtwave_flutter" "$@"
