export interface FactoryData {
  companyName: string;
  tagline: string;
  establishedYear: number;
  monthlyProductionCapacity: string;
  factoryArea: string;
  stitchingMachinesCount: number;
  workforceCount: string;
  onTimeDeliveryRate: string;
  qcStandard: string;
  contact: {
    primaryPhone: string;
    secondaryPhone: string;
    whatsappNumber: string;
    whatsappUrlNumber: string; // no spaces or symbols
    salesEmail: string;
    supportEmail: string;
    factoryAddress: {
      plot: string;
      industrialArea: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
      landmark: string;
    };
    workingHours: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
  };
  specialties: string[];
  machinery: {
    category: string;
    models: string[];
    capabilities: string;
  }[];
  qualityCheckpoints: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const FACTORY_INFO: FactoryData = {
  companyName: 'Apex Garment Industries',
  tagline: 'Precision Garment Manufacturers for Wholesalers & Retail Brands',
  establishedYear: 2012,
  monthlyProductionCapacity: '35,000+ Pieces / Month',
  factoryArea: '18,500 Sq. Ft. Integrated Facility',
  stitchingMachinesCount: 85,
  workforceCount: '120+ Skilled Craftsmen & Operators',
  onTimeDeliveryRate: '99.4%',
  qcStandard: '100% In-Line & End-Line AQL 2.5 Inspection',
  contact: {
    primaryPhone: '+91 98765 43210',
    secondaryPhone: '+91 98765 43211',
    whatsappNumber: '+91 98765 43210',
    whatsappUrlNumber: '919876543210',
    salesEmail: 'wholesale@apexgarments.com',
    supportEmail: 'orders@apexgarments.com',
    factoryAddress: {
      plot: 'Plot No. 48 & 49, Sector 24',
      industrialArea: 'Phase 2 Apparel Park & Hosiery Hub',
      city: 'Ludhiana / Tiruppur Hub',
      state: 'Punjab / Tamil Nadu Corridor',
      pincode: '141010',
      country: 'India',
      landmark: 'Adjacent to National Logistics Terminal',
    },
    workingHours: {
      weekdays: '9:00 AM – 7:30 PM (IST)',
      saturday: '9:00 AM – 6:00 PM (IST)',
      sunday: 'Closed (Dispatches Scheduled)',
    },
  },
  specialties: [
    'Heavyweight Cotton French Terry & Loopknit Track Pants',
    '4-Way Lycra Performance Stretch Lowers & Joggers',
    'Customized Teamwear & Athletic Poly Track Suits',
    'Bio-Washed 200–240 GSM Combed Cotton B2B T-Shirts',
    'Private Labeling, Custom Jacquard Elastic & High-Density Branding',
  ],
  machinery: [
    {
      category: 'Cutting & Marker Planning',
      models: ['Bullmer / Eastman CNC Automated Spreader', 'Gerber CAD Grading System'],
      capabilities: 'Zero-tolerance laser-guided ply cutting with computerized nested marker yield.',
    },
    {
      category: 'Stitching & Assembly',
      models: ['Juki DDL-9000C Direct-Drive Lockstitch', 'Yamato & Siruba 4-Thread Overlock', 'Pegasus Flatlock Seamers'],
      capabilities: 'High-tension athletic seaming, anti-burst gusset stitching, and clean finish edge hems.',
    },
    {
      category: 'Branding & Embellishment',
      models: ['Tajima 12-Head Multi-Color Embroidery', 'Pneumatic Dual-Bed Silicon Heat Transfer Presses'],
      capabilities: 'Precision rubberized logo application, reflective heat seals, and metallic eyelet punch.',
    },
    {
      category: 'Finishing & Packaging',
      models: ['Veit Vacuum Steam Ironing Tables', 'Automated Poly-Wrapper & Carton Strapping Units'],
      capabilities: 'Wrinkle-free dimensional pressing, barcode tagging, moisture-barrier bulk export packaging.',
    },
  ],
  qualityCheckpoints: [
    {
      title: 'Raw Fabric & Yarn Lab Testing',
      description: 'GSM verification, wash shrinkage tolerance (<3%), and 4-grade color fastness rub test prior to cutting.',
    },
    {
      title: 'Precision CAD Pattern & Cut Audit',
      description: 'Strict tolerance inspection of size grading, symmetry, and grain-line alignment across fabric plies.',
    },
    {
      title: 'In-Line Seam Strength & Stitch Inspection',
      description: 'Continuous monitoring of SPI (Stitches Per Inch), elastic tension, pocket zipper alignment, and tension.',
    },
    {
      title: '100% Pre-Pack Finishing & Needle Detection',
      description: 'Thread trimming, steam sanitization, automated metal/broken needle sensor scan, and polybag sealing.',
    },
  ],
  faqs: [
    {
      question: 'What is your Minimum Order Quantity (MOQ) for wholesale orders?',
      answer: 'Our standard production MOQ is 200 to 300 pieces per style/colorway depending on fabric customization. For existing ready running fabrics, we can accommodate trial sample batches of 100 pieces for registered retailers and distributors.',
    },
    {
      question: 'Do you offer custom private labeling and brand customization?',
      answer: 'Yes, we are a full OEM/ODM partner. We offer custom woven brand labels, heat-transfer neck tags, branded jacquard waistband elastics, custom drawcords with logo aglets, barcode stickers, and custom printed master polybags.',
    },
    {
      question: 'What is your typical production turnaround time?',
      answer: 'Pre-production approval samples take 5 to 7 working days. Bulk production runs typically require 15 to 21 working days after sample sign-off and fabric release, depending on order volume.',
    },
    {
      question: 'Can you provide physical samples before we place a bulk order?',
      answer: 'Yes! We provide fit and fabric quality samples to verified wholesalers, retail chains, and garment brands. Sample development charges are fully credited back against the finalized commercial bulk order.',
    },
    {
      question: 'How do you handle shipping, freight, and PAN-India delivery?',
      answer: 'We have corporate partnerships with top national logistics carriers (V-Trans, Safexpress, TCI Freight, Delhivery B2B) and transport nagar booking agencies. We coordinate door delivery or transport godown delivery across all states in India and export FOB/CIF ports.',
    },
  ],
};
