'use client';

import { useState } from 'react';

interface GitHubStatsProps {
  username: string;
}

export default function GitHubStats({ username }: GitHubStatsProps) {
  const [statsError, setStatsError] = useState(false);
  const [languagesError, setLanguagesError] = useState(false);

  const encodedUsername = encodeURIComponent(username);
  const statsUrl = `https://github-readme-stats-eight-rho-46.vercel.app/api?username=${encodedUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=2563eb&icon_color=2563eb&text_color=374151&bg_color=00000000`;
  const languagesUrl = `https://github-readme-stats-eight-rho-46.vercel.app/api/top-langs/?username=${encodedUsername}&layout=compact&theme=transparent&hide_border=true&title_color=2563eb&text_color=374151&bg_color=00000000`;

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 sm:p-8">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">
          Our Open Source Work
        </h2>
        <p className="text-foreground-secondary">
          Explore our projects and contributions on GitHub
        </p>
      </div>

      {/* GitHub Stats */}
      <div className="space-y-6">
        {/* Stats Card */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-4">
          {!statsError ? (
            <img
              src={statsUrl}
              alt="Three Rivers Tech GitHub Stats"
              className="w-full"
              loading="lazy"
              onError={() => setStatsError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="text-foreground-secondary text-sm">
                GitHub stats temporarily unavailable
              </p>
              <a
                href={`https://github.com/${username}`}
                className="text-primary hover:text-primary-hover text-sm mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          )}
        </div>

        {/* Languages Card */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-4">
          {!languagesError ? (
            <img
              src={languagesUrl}
              alt="Three Rivers Tech Top Languages"
              className="w-full"
              loading="lazy"
              onError={() => setLanguagesError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <p className="text-foreground-secondary text-sm">
                Language stats temporarily unavailable
              </p>
            </div>
          )}
        </div>

        {/* GitHub Link Button */}
        <div className="pt-4">
          <a
            href={`https://github.com/${username}`}
            className="inline-flex items-center gap-2 px-6 py-3 w-full justify-center bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors transform hover:scale-105 duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
            View Our Projects on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
