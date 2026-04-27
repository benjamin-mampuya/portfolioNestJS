import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import './animations.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';

config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata = {
  title: 'Ben Mampuya | Portfolio',
  description: 'Portfolio professionnel de Ben Mampuya, développeur front-end, designer UI/UX, data analyst et administrateur systèmes et réseaux.',
  keywords: ['Ben Mampuya', 'Ben Mampuya portfolio', 'Portfolio', 'UI/UX Designer', 'Front-End Developer', 'Développeur Web RDC', 'Goma', 'Mampuya', 'Ben Pulukutu'],
  authors: [{ name: 'Ben Mampuya' }],
  creator: 'Ben Mampuya',
  metadataBase: new URL('https://benmampuya.netlify.app'), // Adapté pour Netlify
  openGraph: {
    title: 'Ben Mampuya | UI/UX Designer & Développeur',
    description: "Bienvenue sur le portfolio de Ben Mampuya. Découvrez mes projets, compétences et services numériques.",
    url: '/',
    siteName: 'Ben Mampuya Portfolio',
    images: [
      {
        url: '/portofolio.png',
        width: 1200,
        height: 630,
        alt: 'Ben Mampuya Portfolio',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ben Mampuya | UI/UX Designer & Développeur',
    description: "Bienvenue sur le portfolio de Ben Mampuya. Découvrez mes projets, compétences et services numériques.",
    images: ['/portofolio.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable} scroll-smooth overflow-x-hidden`}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RFRJ8KG6R0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-RFRJ8KG6R0');
            `,
          }}
        />
      </head>
      <GoogleTagManager gtmId="GTM-KQGQ5W2K" />
      <body className="antialiased min-h-screen bg-background text-textMain transition-colors duration-300 overflow-x-hidden">
        <CustomCursor />
        <ScrollProgress />
        <AppRouterCacheProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
