import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
}