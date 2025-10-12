"use client";

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="flex items-center text-primary hover:text-primary-hover"
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      Back to Portfolio
    </button>
  );
}