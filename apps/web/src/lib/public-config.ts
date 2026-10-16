type PublicBackendConfig = Readonly<{
  url: string;
  publishableKey: string;
}>;

/** Reserve a public-only configuration boundary; M1 makes no backend requests. */
export function readPublicBackendConfig(): PublicBackendConfig | undefined {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim();

  if (!url && !publishableKey) return undefined;

  if (!url || !publishableKey) {
    throw new Error("Set both public Supabase variables, or leave both unset.");
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(url);
  } catch {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL must be a valid project URL.");
  }

  const isLocal = ["localhost", "127.0.0.1", "[::1]"].includes(parsedUrl.hostname);
  if (
    (parsedUrl.protocol !== "https:" && !(isLocal && parsedUrl.protocol === "http:")) ||
    parsedUrl.username ||
    parsedUrl.password ||
    parsedUrl.search ||
    parsedUrl.hash ||
    parsedUrl.pathname !== "/"
  ) {
    throw new Error("Use an HTTPS Supabase project URL without credentials, path, or query.");
  }

  if (!/^sb_publishable_[A-Za-z0-9_-]+$/.test(publishableKey)) {
    throw new Error("Use a Supabase publishable key, never a secret or service-role key.");
  }

  return { url: parsedUrl.origin, publishableKey };
}
