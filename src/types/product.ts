export type ProductCategory =
  | 'track-pants'
  | 'lowers-joggers'
  | 'track-suits'
  | 't-shirts'
  | 'activewear';

export interface ProductColor {
  name: string;
  hex: string;
  inStock?: boolean;
}

export interface SizeMeasurement {
  size: string;
  waist: string;
  length: string;
  hip: string;
  thigh: string;
}

export interface Product {
  id: string;
  slug: string;
  sku: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  featured: boolean;
  isNew?: boolean;
  moq: number;
  moqUnit: string;
  priceNote: string; // e.g. "Wholesale Pricing Tier Available"
  fabric: string;
  fabricComposition: string;
  gsm: number;
  availableSizes: string[];
  availableColors: ProductColor[];
  fitType: string;
  pockets: string;
  waistband: string;
  stitching: string;
  packaging: string;
  leadTime: string;
  customizationOptions: string[];
  images: string[];
  keyHighlights: string[];
  sizeChart: SizeMeasurement[];
}

export type BuyerType =
  | 'Wholesaler'
  | 'Retail Store / Chain'
  | 'Regional Distributor'
  | 'Apparel Brand / Private Label'
  | 'Corporate / Institutional'
  | 'Other';

export interface WholesaleEnquiry {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  whatsapp: string;
  cityState: string;
  buyerType: BuyerType;
  productSku?: string;
  productName?: string;
  categoryInterested: string;
  quantityRequired: string;
  customBrandingRequired: 'Yes' | 'No' | 'Undecided';
  targetDeliveryDate?: string;
  message: string;
}
