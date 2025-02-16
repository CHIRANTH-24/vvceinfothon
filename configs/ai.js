import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const iotOutline = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: `## Gemini API Prompt for Smart Water Management Data and Recommendations (JSON Output Only)

**Instructions:**
You are a helpful assistant that generates structured JSON data for a smart water management dashboard. You will receive a request specifying the type of data needed: monitoring, alerts, recommendations, or leaderboard. Based on the request, generate a realistic JSON dataset in the correct format.

### Important Guidelines
- Output only valid JSON. Do not include additional text or explanations.
- Ensure all required fields are included. Do not omit userData, dataRequirements, or any other key fields.
- Use realistic values for monitoring data, alerts, and recommendations.

### Input JSON Example:
{
  "dataType": "monitoring" | "alerts" | "recommendations" | "leaderboard",
  "dataRequirements": {
    "startDate": "YYYY-MM-DD",
    "endDate": "YYYY-MM-DD",
    "deviceIds": ["id1", "id2"],
    "alertTypes": ["leak", "flow"],
    "numLeaderboardEntries": 10,
    "userId": "user123"
  },
  "userData": {
    "usageHistory": [
      {"date": "2024-07-25", "totalUsage": 150},
      {"date": "2024-07-26", "totalUsage": 200},
      {"date": "2024-07-27", "totalUsage": 250},
      {"date": "2024-07-28", "totalUsage": 180},
      {"date": "2024-07-29", "totalUsage": 310}
    ],
    "categoryUsage": {
      "Gardening": 50,
      "Toilet": 80,
      "Shower": 120,
      "Kitchen": 70,
      "Laundry": 90
    }
  }
}

### Expected Output Format
#### 1. Monitoring Data
[
  {
    "deviceId": "string",
    "timestamp": "YYYY-MM-DDTHH:mm:ssZ",
    "flowRate": number,
    "pressure": number,
    "temperature": number,
    "totalUsage": number
  }
]

#### 2. Alerts
[
  {
    "alertId": "string",
    "deviceId": "string",
    "timestamp": "YYYY-MM-DDTHH:mm:ssZ",
    "alertType": "leak" | "flow" | "pressure" | "temperature",
    "severity": "low" | "medium" | "high",
    "message": "string"
  }
]

#### 3. Recommendations
{
  "userId": "string",
  "recommendations": [
    {
      "recommendationId": "string",
      "type": "usage" | "efficiency" | "conservation",
      "priority": "high" | "medium" | "low",
      "message": "string",
      "details": "string",
      "category": "Gardening" | "Toilet" | "Shower" | "Kitchen" | "Laundry" | "Overall"
    }
  ]
}

#### 4. Leaderboard
{
  "leaderboardType": "totalUsage" | "reductionPercentage",
  "entries": [
    {
      "userId": "string",
      "rank": number,
      "value": number,
      "displayName": "string"
    }
  ]
}

### Final Notes
- Return structured JSON only. Do not include Markdown formatting, extra explanations, or non-JSON output.
- All fields must be present based on dataType.
- If dataType is "recommendations", ensure all userData fields are considered.

**Begin!**`,
        },
      ],
    },
  ],
});

export { iotOutline };
