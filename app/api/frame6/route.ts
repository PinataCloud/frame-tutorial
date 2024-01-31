import { FrameRequest, getFrameAccountAddress, getFrameMessage } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {

  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 6</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://dweb.mypinata.cloud/ipfs/Qme4FXhoxHHfyzTfRxSpASbMF8kajLEPkRQWhwWu9pkUjm/6.png" />
    <meta property="fc:frame:button:1" content="Next Page" />
    <meta property="fc:frame:post_url" content="https://frame-tutorial.vercel.app/api/frame7" />
  </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';

