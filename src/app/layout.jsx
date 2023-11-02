import { Inter, Montserrat, Chivo_Mono } from 'next/font/google';
import Navbar from '@/components/navbar/navbar';
import '@styles/globals.scss';
import '@styles/github-dark.scss';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const chivo = Chivo_Mono({
  subsets: ['latin'],
  variable: '--font-chivo',
});

export const metadata = {
  title: 'Frontend Workshop',
  description: 'React.js workshop using Next.js framework!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ marginTop: 'var(--navbar-height)' }}
        className={`${inter.variable} ${montserrat.variable} ${chivo.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
