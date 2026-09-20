import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PRODUCTS, getProductBySlug, getRelatedProducts } from '@/data/products';
import { FACTORY_INFO } from '@/data/factory';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ProductDetailClient from '@/components/products/ProductDetailClient';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | Apex Garments',
    };
  }

  const title = `${product.name} (Wholesale / MOQ ${product.moq}) | Apex Garments`;
  const description = `${product.tagline}. Direct manufacturer pricing for wholesalers & retail brands. Fabric: ${product.fabric}, GSM: ${product.gsm}. Custom private labeling available.`;

  return {
    title,
    description,
    keywords: [
      product.name,
      `${product.categoryLabel} manufacturer`,
      `wholesale ${product.categoryLabel.toLowerCase()}`,
      `bulk ${product.name.toLowerCase()}`,
      `${product.fabric} manufacturer`,
      'garment manufacturer India',
    ],
    openGraph: {
      title,
      description,
      url: `https://apexgarments.com/products/${product.slug}`,
      siteName: FACTORY_INFO.companyName,
      images: [
        {
          url: product.images[0] || '/images/hero-factory.jpg',
          width: 1200,
          height: 900,
          alt: product.name,
        },
      ],
      type: 'website',
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, product.category, 3);

  // Schema.org Product structured data
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images.map((img) => `https://apexgarments.com${img}`),
    description: product.description,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: FACTORY_INFO.companyName,
    },
    manufacturer: {
      '@type': 'Organization',
      name: FACTORY_INFO.companyName,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceType: 'WholesalePrice',
        eligibleQuantity: {
          '@type': 'QuantitativeValue',
          minValue: product.moq,
          unitText: 'PCS',
        },
      },
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: FACTORY_INFO.companyName,
      },
    },
  };

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      {/* Schema.org Product JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: 'Wholesale Catalogue', href: '/products' },
          { name: product.categoryLabel, href: `/products?category=${product.category}` },
          { name: product.name, href: `/products/${product.slug}` },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <ProductDetailClient
          product={product}
          relatedProducts={relatedProducts}
        />
      </div>
    </div>
  );
}
