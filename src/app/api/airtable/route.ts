import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Airtable API configuration
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_ID = process.env.AIRTABLE_TABLE_ID;

    console.log('Environment variables check:', {
      hasApiKey: !!AIRTABLE_API_KEY,
      hasBaseId: !!AIRTABLE_BASE_ID,
      hasTableId: !!AIRTABLE_TABLE_ID,
      apiKeyPrefix: AIRTABLE_API_KEY?.substring(0, 7) + '...',
      baseId: AIRTABLE_BASE_ID,
      tableId: AIRTABLE_TABLE_ID
    });

    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_ID) {
      console.error('Missing Airtable configuration');
      return NextResponse.json(
        { error: 'Server configuration error - missing Airtable credentials' },
        { status: 500 }
      );
    }

    // Add record to Airtable
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                email: email
              }
            }
          ]
        })
      }
    );

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.json();
      console.error('Airtable API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to save to Airtable' },
        { status: 500 }
      );
    }

    const result = await airtableResponse.json();
    console.log('Successfully saved to Airtable:', result);

    return NextResponse.json(
      { success: true, message: 'RSVP submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
