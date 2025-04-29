import axios from "axios";
import { NextResponse } from "next/server";

import type {
  TopFreeAppResponseType,
  TopFreeAppListType,
} from "@/types/topFreeApp";

export async function GET() {
  try {
    const response = await axios.get(
      "https://itunes.apple.com/tw/rss/topfreeapplications/limit=100/json"
    );
    const data: TopFreeAppResponseType[] = response?.data?.feed?.entry || [];
    const result: TopFreeAppListType[] = data.map(
      (item: TopFreeAppResponseType) => {
        return {
          id: item.id.attributes["im:id"],
          name: item["im:name"]?.label || "",
          summary: item["summary"]?.label || "",
          title: item["title"]?.label || "",
          image: item["im:image"]?.[item["im:image"].length - 1]?.label || "",
          category: item["category"]?.attributes?.label || "",
        };
      }
    );
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching iTunes data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from iTunes API" },
      { status: 500 }
    );
  }
}
