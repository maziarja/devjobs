import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-160px)] max-w-277.5 flex-col items-center justify-center px-6 text-center">
      <h1 className="text-preset-1 text-foreground">404</h1>

      <p className="text-preset-3 text-foreground mt-4">Page not found</p>

      <p className="text-preset-4 text-card-foreground mt-3 max-w-md">
        Sorry, the page you&#39;re looking for doesn&#39;t exist or has been
        moved.
      </p>

      <Link
        href="/"
        className="bg-primary text-primary-foreground text-preset-4-bold mt-8 inline-flex h-12 items-center justify-center rounded-md px-6 transition-opacity hover:opacity-90"
      >
        Back to Home
      </Link>
    </main>
  );
}
