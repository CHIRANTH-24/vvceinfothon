"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Achievements = () => {
    const [achievements, setAchievements] = useState([
        {
            id: 1,
            title: "Reduced Water Consumption by 20%",
            description: "Track and reduce your daily water usage.",
            unlocked: false,
        },
        {
            id: 2,
            title: "Installed Water-Efficient Appliances",
            description: "Use water-efficient washing machines, faucets, and showers.",
            unlocked: false,
        },
        {
            id: 3,
            title: "Rainwater Harvesting",
            description: "Implement rainwater collection for household use.",
            unlocked: false,
        },
    ])

    const toggleAchievement = (id) => {
        setAchievements((prev) => prev.map((ach) => (ach.id === id ? { ...ach, unlocked: !ach.unlocked } : ach)))
    }

    return (
        <div className="container mx-auto p-4">
            <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">🏆 Smart Water Management Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                    {achievements.map((ach) => (
                        <Card
                            key={ach.id}
                            className={`mb-4 cursor-pointer transition-colors ${ach.unlocked ? "bg-teal-50" : "hover:bg-cyan-50"}`}
                            onClick={() => toggleAchievement(ach.id)}
                        >
                            <CardContent className="p-4">
                                <h2 className="text-lg font-semibold">{ach.title}</h2>
                                <p className="text-gray-600">{ach.description}</p>
                                <Badge variant={ach.unlocked ? "success" : "secondary"} className="mt-2">
                                    {ach.unlocked ? "Unlocked" : "Locked"}
                                </Badge>
                            </CardContent>
                        </Card>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}

export default Achievements

