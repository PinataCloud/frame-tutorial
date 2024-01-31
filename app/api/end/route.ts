import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<Response> {
  const data = await req.json();
  const buttonId = data.untrustedData.buttonIndex;

  let path: string;
  if (buttonId === 1) {
    path = 'cosmiccowboys';
  } else if (buttonId === 2) {
    path = 'pinatacloud';
  } else {
    path = '';
  }
  const headers = new Headers();
  headers.set('Location', 'https://frame-tutorial.vercel.app/');
  const response = NextResponse.redirect(`https://frame-tutorial.vercel.app/${path}`, {
    headers: headers,
    status: 302,
  });
  return response;
}

export const dynamic = 'force-dynamic';
