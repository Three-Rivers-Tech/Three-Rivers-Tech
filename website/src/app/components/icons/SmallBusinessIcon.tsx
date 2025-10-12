export default function SmallBusinessIcon({ className = "w-12 h-12 text-primary" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" suppressHydrationWarning={true}>
      {/* Storefront with friendly elements */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      {/* Network/connection lines */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3l2 2m-2-2l-2 2m2-2v4" />
    </svg>
  );
}