"use client";

import { useEffect, useState } from 'react';
import { validatePageContrast, getAccessibilityIssues, prefersReducedMotion, prefersHighContrast } from '@/lib/accessibility-utils';

interface AccessibilityReport {
  contrastIssues: number;
  totalElements: number;
  otherIssues: string[];
  userPreferences: {
    reducedMotion: boolean;
    highContrast: boolean;
  };
}

export default function AccessibilityChecker() {
  const [report, setReport] = useState<AccessibilityReport | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const checkAccessibility = () => {
      const contrastResults = validatePageContrast();
      const failedContrast = contrastResults.filter(result => !result.passes);
      
      const allElements = document.querySelectorAll('*');
      const otherIssues: string[] = [];
      
      allElements.forEach(element => {
        const issues = getAccessibilityIssues(element);
        otherIssues.push(...issues);
      });

      setReport({
        contrastIssues: failedContrast.length,
        totalElements: contrastResults.length,
        otherIssues: [...new Set(otherIssues)], // Remove duplicates
        userPreferences: {
          reducedMotion: prefersReducedMotion(),
          highContrast: prefersHighContrast()
        }
      });
    };

    // Check accessibility after page load
    setTimeout(checkAccessibility, 1000);
  }, []);

  if (process.env.NODE_ENV !== 'development' || !report) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-purple-600 text-white px-3 py-2 rounded-full shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        aria-label="Toggle accessibility report"
      >
        A11y
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 w-80 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-lg shadow-xl p-4 max-h-96 overflow-y-auto">
          <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">
            Accessibility Report
          </h3>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                Color Contrast
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {report.contrastIssues} of {report.totalElements} elements fail WCAG AA
              </p>
              {report.contrastIssues > 0 && (
                <div className="text-xs text-red-600 dark:text-red-400 mt-1">
                  ⚠️ Some elements may not meet contrast requirements
                </div>
              )}
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                User Preferences
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>
                  Reduced Motion: {report.userPreferences.reducedMotion ? '✅ Yes' : '❌ No'}
                </li>
                <li>
                  High Contrast: {report.userPreferences.highContrast ? '✅ Yes' : '❌ No'}
                </li>
              </ul>
            </div>
            
            {report.otherIssues.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                  Other Issues
                </h4>
                <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  {report.otherIssues.slice(0, 5).map((issue, index) => (
                    <li key={index}>• {issue}</li>
                  ))}
                  {report.otherIssues.length > 5 && (
                    <li>... and {report.otherIssues.length - 5} more</li>
                  )}
                </ul>
              </div>
            )}
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="mt-3 text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}