"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative" role="search" aria-label="Site search">
      <label htmlFor="search-input" className="sr-only">
        Search the website
      </label>
      <input
        id="search-input"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full md:w-64 px-4 py-2 pr-10 rounded-full bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[44px]"
        aria-describedby="search-description"
        autoComplete="off"
      />
      <div id="search-description" className="sr-only">
        Enter search terms to find content on our website
      </div>
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-1 min-h-[44px] min-w-[44px] flex items-center justify-center"
        aria-label="Submit search"
        disabled={!query.trim()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM2 8a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 2 8z" clipRule="evenodd" />
        </svg>
      </button>
    </form>
  );
}
