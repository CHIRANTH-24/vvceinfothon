import { NextResponse } from "next/server";


import { iotOutline } from "../../../../configs/ai";
import db from "../../../../configs/db";
import { IOT_TABLE } from "../../../../configs/schema";

export async function POST(req) {
  const PROMPT =
    '## Gemini API Prompt for Smart Water Management Data and Recommendations (JSON Output Only)\n\n**Instructions:**\n\nYou are a helpful assistant that generates JSON data for a smart water management dashboard.  You will receive a request specifying the type of data needed (monitoring, alerts, recommendations, or leaderboard).  Based on the request, you will generate a realistic JSON dataset in the appropriate format.  For recommendation requests, you will also perform basic analysis and generate personalized recommendations.\n\n**Input:**\n\nA JSON object with the following structure:\n\n```json\n{\n  "dataType": "monitoring" | "alerts" | "recommendations" | "leaderboard",\n  "dataRequirements": { // (Optional) Additional requirements for the data\n    "startDate": "YYYY-MM-DD", // (For monitoring) Start date for data\n    "endDate": "YYYY-MM-DD",   // (For monitoring) End date for data\n    "deviceIds": ["id1", "id2"], // (For monitoring) Array of device IDs\n    "alertTypes": ["leak", "flow"], // (For alerts) Array of alert types\n    "numLeaderboardEntries": 10,   // (For leaderboard) Number of leaderboard entries\n    "userId": "user123" // (For recommendations) User ID for personalized recommendations\n    // ... other data requirements as needed\n  },\n  "userData": { // (For recommendations) User-specific data (e.g., usage history)\n      "usageHistory": [\n        {"date": "2024-07-25", "totalUsage": 150},\n        {"date": "2024-07-26", "totalUsage": 200},\n        {"date": "2024-07-27", "totalUsage": 250},\n        {"date": "2024-07-28", "totalUsage": 180},\n        {"date": "2024-07-29", "totalUsage": 310}\n      ],\n      "categoryUsage": {\n        "Gardening": 50,\n        "Toilet": 80,\n        "Shower": 120,\n        "Kitchen": 70,\n        "Laundry": 90\n      }\n      // ... other user data as needed\n    }\n}';
  const aiResp = await iotOutline.sendMessage(PROMPT);
  const aiResult = JSON.parse(aiResp.response.text());
  console.log("Here is the error");

  //Save to DB
  const dbResult = await db
    .insert(IOT_TABLE)
    .values({
      iotLayout: aiResult,
    })
    .returning({ resp: IOT_TABLE });

  console.log(dbResult);

  return NextResponse.json({ result: dbResult[0] });
}
