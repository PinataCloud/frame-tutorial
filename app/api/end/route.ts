import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<Response> {
  const data = await req.json();
  console.log(data);
  const buttonId = data.untrustedData.buttonIndex;

  let path: string;
  if (buttonId === 1) {
    path = "cosmiccowboys";
  } else if (buttonId === 2) {
    path = "pinatacloud";
  } else if (buttonId === 3) {
    path = "video";
  } else {
    path = "";
  }
  const headers = new Headers();
  headers.set("Location", `${process.env.NEXT_PUBLIC_BASE_URL}/`);
  const response = NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${path}`,
    {
      headers: headers,
      status: 302,
    },
  );
  return response;
}

export const dynamic = "force-dynamic";
