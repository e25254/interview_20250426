import axios from "axios";
import { NextResponse } from "next/server";

export async function fetchAppData(id: string) {
  try {
    const response = await axios.get(
      `https://itunes.apple.com/tw/lookup?id=${id}`
    );
    return NextResponse.json(response?.data);
  } catch (error) {
    console.error("Error fetching iTunes data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from iTunes API" },
      { status: 500 }
    );
  }
}

export async function getAppDetails(id: string) {
  return fetchAppData(id);
}
