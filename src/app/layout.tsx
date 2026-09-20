import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import { FACTORY_INFO } from '@/data/factory';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://apexgarments.com'),
  title: {
    default: 'Apex Garments | Direct Manufacturer of Track Pants, Lowers & Sportswear',
    template: '%s | Apex Garments',
  },
  description:
    'Apex Garment Industries: Direct B2B manufacturer and exporter of heavyweight French terry track pants, 4-way lycra lowers, athletic track suits, and combed cotton t-shirts for wholesalers, distributors, and retail brands.',
  keywords: [
    'garment manufacturer',
    'garment manufacturer India',
    'track pant manufacturer',
    'lower manufacturer',
    'wholesale track pants',
    'wholesale garments',
    'garment supplier',
    'clothing manufacturer',
    'B2B garment supplier',
    'wholesale clothing supplier',
    'private label track pants',
    'OEM sportswear factory',
  ],
  authors: [{ name: FACTORY_INFO.companyName }],
  creator: FACTORY_INFO.companyName,
  publisher: FACTORY_INFO.companyName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://apexgarments.com',
    siteName: FACTORY_INFO.companyName,
    title: 'Apex Garments | Direct Manufacturer of Track Pants & Lowers',
    description:
      'Direct factory pricing, low starting MOQ (200 pcs), 85-machine facility, 35,000+ monthly capacity. High-margin supply for wholesalers and retail chains.',
    images: [
      {
        url: '/images/hero-factory.jpg',
        width: 1200,
        height: 630,
        alt: 'Apex Garment Manufacturing Factory Floor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Garments | Garment Manufacturer for Wholesalers & Brands',
    description:
      'Direct manufacturer of track pants, lowers, and knitwear. 35,000+ monthly capacity, low starting MOQ, PAN-India dispatch.',
    images: ['/images/hero-factory.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: FACTORY_INFO.companyName,
    url: 'https://apexgarments.com',
    logo: 'https://apexgarments.com/images/hero-factory.jpg',
    description: FACTORY_INFO.tagline,
    telephone: FACTORY_INFO.contact.primaryPhone,
    email: FACTORY_INFO.contact.salesEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${FACTORY_INFO.contact.factoryAddress.plot}, ${FACTORY_INFO.contact.factoryAddress.industrialArea}`,
      addressLocality: FACTORY_INFO.contact.factoryAddress.city,
      addressRegion: FACTORY_INFO.contact.factoryAddress.state,
      postalCode: FACTORY_INFO.contact.factoryAddress.pincode,
      addressCountry: 'IN',
    },
    sameAs: [
      `https://wa.me/${FACTORY_INFO.contact.whatsappUrlNumber}`,
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-amber-100 selection:text-amber-900">
        <TopBar />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
