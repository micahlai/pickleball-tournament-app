import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="main-content" className="page-shell prose-page" tabIndex={-1}>
      <h1>Page not found</h1>
      <p className="page-lead">This address doesn’t lead to a Courtwave page.</p>
      <p>Check the link, or return to the home page.</p>
      <Button asChild className="mt-6 min-h-12 px-4"><Link href="/">Back to home</Link></Button>
    </main>
  );
}
