import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Manrope } from 'next/font/google';
import GradientBackground from '@/components/GradientBackground';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const manrope = Manrope({ subsets: ['latin','cyrillic'], weight: ['300','400','500','600','700'], variable: '--font-sans' });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={manrope.variable + ' font-sans min-h-screen flex flex-col'}>
      <GradientBackground />
      <Header />
      <main className="flex-1 py-8">{<Component {...pageProps} />}</main>
      <Footer />
    </div>
  );
}
