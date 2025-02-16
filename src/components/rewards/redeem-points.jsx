"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const RedeemPoints = () => {
    const [points, setPoints] = useState(200)
    const discount = 5 // Static discount for now

    return (
        <div className="container mx-auto p-4">
            <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">🎁 Redeem Points</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-lg mb-4">
                        You have{" "}
                        <Badge variant="secondary" className="text-lg">
                            {points}
                        </Badge>{" "}
                        points available.
                    </p>
                    <Card className="bg-purple-100">
                        <CardContent className="p-4">
                            <p className="text-purple-900 font-bold text-lg">
                                🎉 Get <span className="text-purple-800">{discount}%</span> off on your next water bill!
                            </p>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </div>
    )
}

export default RedeemPoints

