import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Salut din API-ul Next.js!' });
}
