import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { readPublicBackendConfig } from "../src/lib/public-config.ts";

const initialUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const initialKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

afterEach(() => {
  if (initialUrl === undefined) delete process.env.NEXT_PUBLIC_SUPABASE_URL;
  else process.env.NEXT_PUBLIC_SUPABASE_URL = initialUrl;
  if (initialKey === undefined) delete process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  else process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = initialKey;
});

test("foundation runs with no backend configured", () => {
  delete process.env.NEXT_PUBLIC_SUPABASE_URL;
  delete process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  assert.equal(readPublicBackendConfig(), undefined);
});

test("accepts a paired HTTPS URL and public publishable key", () => {
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co/";
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_test_public_value";
  assert.equal(readPublicBackendConfig()?.url, "https://example.supabase.co");
});

test("rejects either half of an incomplete configuration", () => {
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
  delete process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  assert.throws(readPublicBackendConfig, /Set both public Supabase variables/);
  delete process.env.NEXT_PUBLIC_SUPABASE_URL;
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_test_public_value";
  assert.throws(readPublicBackendConfig, /Set both public Supabase variables/);
});

test("rejects secret keys without repeating their values", () => {
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
  const syntheticSecret = "sb_secret_rejected_test_value";
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = syntheticSecret;
  assert.throws(readPublicBackendConfig, (error) => {
    return error instanceof Error &&
      error.message.includes("never a secret or service-role key") &&
      !error.message.includes(syntheticSecret);
  });
});

test("rejects insecure remote URLs and URL-embedded credentials", () => {
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_test_public_value";
  for (const url of ["http://example.supabase.co", "https://name:password@example.supabase.co"]) {
    process.env.NEXT_PUBLIC_SUPABASE_URL = url;
    assert.throws(readPublicBackendConfig, /HTTPS Supabase project URL/);
  }
});
