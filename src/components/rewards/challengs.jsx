"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const challengesData = {
    daily: [
        { id: 1, title: "Limit Shower Time", description: "Take showers under 5 minutes to save water.", points: 10 },
        { id: 2, title: "Turn Off the Tap", description: "Turn off the tap while brushing teeth.", points: 10 },
        { id: 3, title: "Reduce Water Usage", description: "Use at least 5% less water than yesterday.", points: 20 },
    ],
    weekly: [
        { id: 4, title: "Fix Leaks", description: "Inspect and fix any leaking taps or pipes.", points: 30 },
        { id: 5, title: "Use Rainwater", description: "Collect and use rainwater for gardening.", points: 30 },
        {
            id: 6,
            title: "Reduce Weekly Water Consumption",
            description: "Use at least 10% less water than last week.",
            points: 50,
        },
    ],
}

const Challenge = ({ challenge, onComplete, isClaimed }) => {
    return (
        <Card
            className={`my-2 cursor-pointer transition duration-300 ${isClaimed ? "bg-gray-100" : "hover:bg-blue-50"}`}
            onClick={() => !isClaimed && onComplete(challenge.id)}
        >
            <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{challenge.title}</h3>
                <p className="text-sm text-gray-600">{challenge.description}</p>
                <Badge variant={isClaimed ? "secondary" : "default"} className="mt-2">
                    {isClaimed ? "CLAIMED" : `💧 ${challenge.points} Points`}
                </Badge>
            </CardContent>
        </Card>
    )
}

const Challenges = () => {
    const [claimedChallenges, setClaimedChallenges] = useState([])

    const handleComplete = (id) => {
        setClaimedChallenges([...claimedChallenges, id])
    }

    return (
        <div className="container mx-auto p-4">
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Smart Water Management Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-center mb-2">🌟 Daily Challenges</h2>
                        {challengesData.daily.map((challenge) => (
                            <Challenge
                                key={challenge.id}
                                challenge={challenge}
                                onComplete={handleComplete}
                                isClaimed={claimedChallenges.includes(challenge.id)}
                            />
                        ))}
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-center mb-2">📅 Weekly Challenges</h2>
                        {challengesData.weekly.map((challenge) => (
                            <Challenge
                                key={challenge.id}
                                challenge={challenge}
                                onComplete={handleComplete}
                                isClaimed={claimedChallenges.includes(challenge.id)}
                            />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Challenges

