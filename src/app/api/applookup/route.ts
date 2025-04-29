import { NextRequest } from "next/server";
import { fetchAppData } from "./utils";

export async function GET(req: NextRequest) {
  const searchParams = new URL(req.url).searchParams;
  const id: string = searchParams.get("id") || "";
  return fetchAppData(id);
}
