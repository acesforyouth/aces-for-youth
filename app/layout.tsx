import type { Metadata } from 'next';
import { Bebas_Neue, DM_Sans } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/components/Toast';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aces for Youth | Youth Tennis Tournament Series',
  description:
    'Competitive tennis tournaments for kids, raising money for ACEing Autism. 18 competitors, 2 matches, 6-game sets. Give back to the community.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} font-dm bg-[#FAF9F6] text-[#1a1a1a] overflow-x-hidden`}
      >
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
