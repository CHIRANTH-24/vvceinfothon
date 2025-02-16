"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const recommendations = [
  "Reduce shower time by 3 minutes to save 10L per day.",
  "Fix leaking taps to prevent 15L of daily water loss.",
  "Use a full load in washing machines to save water.",
  "Collect rainwater for gardening and outdoor cleaning.",
  "Turn off taps while brushing teeth to save 5L per minute.",
];

export default function RecommendationPage() {
  const [waterUsage, setWaterUsage] = useState(120);
  const [goal, setGoal] = useState(100);
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
    const getIot = async () => {
      try {
        const result = await axios.get("/api/iot");
        setRecipe(result.data.result);
        console.log(result.data.result);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col items-center px-6 py-10">
      <motion.h1
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        💡 Smart Water Recommendations
      </motion.h1>

      <Card className="w-full max-w-3xl p-6 bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-lg font-semibold">💧 Personalized Insights</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Your average water consumption: <strong>{waterUsage}L/day</strong>
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Suggested goal: <strong>{goal}L/day</strong>
        </p>
        <Progress value={(waterUsage / goal) * 100} className="mt-4" />
      </Card>

      <motion.div
        className="w-full max-w-3xl mt-6 p-6 bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-lg font-semibold"> Today's Water-Saving Tip</h3>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {recommendations[tipIndex]}
        </p>
      </motion.div>
    </div>
  );
}
