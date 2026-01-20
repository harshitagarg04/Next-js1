import { NextResponse } from 'next/server';

export async function GET() {
  const envVars = {
    hasApiKey: !!process.env.AIRTABLE_API_KEY,
    hasBaseId: !!process.env.AIRTABLE_BASE_ID,
    hasTableId: !!process.env.AIRTABLE_TABLE_ID,
    apiKeyLength: process.env.AIRTABLE_API_KEY?.length || 0,
    baseIdLength: process.env.AIRTABLE_BASE_ID?.length || 0,
    tableIdLength: process.env.AIRTABLE_TABLE_ID?.length || 0,
  };

  console.log('Environment variables test:', envVars);

  return NextResponse.json(envVars);
}
