"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("q") || "";

  const linkCardClass = "flex flex-col items-center p-6 bg-background-secondary rounded-xl hover:shadow-lg transition-all border border-border hover:border-primary";

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
          Search
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          Search Results
        </h1>

        {query && (
          <p className="text-lg text-foreground-secondary mb-8">
            Searching for: <strong className="text-foreground">&quot;{query}&quot;</strong>
          </p>
        )}

        <div className="bg-background-secondary rounded-2xl shadow-lg p-8 sm:p-10 mb-8">
          <div className="flex flex-col items-center">
            <svg className="w-16 h-16 text-foreground-secondary/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h2 className="text-2xl font-bold mb-3 text-foreground">
              Site Search Coming Soon
            </h2>
            <p className="text-foreground-secondary max-w-md">
              We&apos;re working on building a comprehensive search feature. In the meantime, you can explore our services and credentials below.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/services"
            className={linkCardClass}
          >
            <svg className="w-8 h-8 text-primary mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="font-bold text-foreground">Our Services</h3>
            <p className="text-sm text-foreground-secondary mt-2">Explore what we offer</p>
          </Link>

          <Link
            href="/portfolio"
            className={linkCardClass}
          >
            <svg className="w-8 h-8 text-primary mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <h3 className="font-bold text-foreground">Our Credentials</h3>
            <p className="text-sm text-foreground-secondary mt-2">See our work & reviews</p>
          </Link>

          <Link
            href="/contact"
            className={linkCardClass}
          >
            <svg className="w-8 h-8 text-primary mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="font-bold text-foreground">Contact Us</h3>
            <p className="text-sm text-foreground-secondary mt-2">Get in touch today</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-20 text-center">Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
