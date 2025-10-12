import { contactMetadata } from './metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = contactMetadata;

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
