import { NextResponse } from 'next/server';
import { WholesaleEnquiry } from '@/types/product';

export async function POST(request: Request) {
  try {
    const body: WholesaleEnquiry = await request.json();

    // Basic server-side validation
    if (!body.fullName || !body.companyName || (!body.phone && !body.whatsapp)) {
      return NextResponse.json(
        { error: 'Name, company name, and a valid phone or WhatsApp number are required.' },
        { status: 400 }
      );
    }

    const leadId = `LEAD-${Date.now().toString(36).toUpperCase()}`;

    // In production, this can forward to CRM, SendGrid/Resend, WhatsApp Business API, or database
    console.log('[B2B Wholesale Lead Received]:', {
      leadId,
      timestamp: new Date().toISOString(),
      ...body,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your wholesale enquiry has been registered with our factory sales desk.',
        leadId,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error handling wholesale enquiry:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your enquiry.' },
      { status: 500 }
    );
  }
}
