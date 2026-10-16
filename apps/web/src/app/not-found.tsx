import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="page-shell prose-page" tabIndex={-1}>
      <h1>Page not found</h1>
      <p className="page-lead">This address doesn’t lead to a Courtwave page.</p>
      <p>Check the link, or return to the home page.</p>
      <Link href="/" className="text-link">Back to home</Link>
    </main>
  );
}
