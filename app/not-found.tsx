import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="section flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-ash-900 dark:text-ash-100">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-3 max-w-sm text-sm text-ash-500 dark:text-ash-400">
        The page you&apos;re looking for may have moved. Head back home to
        keep exploring.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to home
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
