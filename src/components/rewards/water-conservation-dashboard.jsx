"use client"
import { Line } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

Chart.register(...registerables)

const WaterConservationDashboard = () => {
    const waterUsageData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Water Used (Liters)",
                data: [50, 45, 42, 38, 35, 30, 28],
                borderColor: "#4A90E2",
                backgroundColor: "rgba(74, 144, 226, 0.2)",
                borderWidth: 2,
                tension: 0.3,
            },
        ],
    }

    return (
        <div className="container mx-auto p-4">
            <Card className="w-full max-w-3xl mx-auto">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-2xl font-bold">Water Conservation Dashboard</CardTitle>
                    <div className="flex space-x-2">
                        <Badge variant="secondary" className="text-lg">
                            🌊 Score: <span id="waterScore">500</span>
                        </Badge>
                        <Badge variant="secondary" className="text-lg">
                            Points: <span id="redeemPoints">200</span>
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row justify-between w-full mt-4">
                        <div className="flex flex-col items-center flex-1">
                            <h2 className="text-xl font-bold mb-4">📊 Weekly Water Consumption</h2>
                            <div className="w-full h-64">
                                <Line
                                    data={waterUsageData}
                                    options={{
                                        responsive: true,
                                        plugins: { legend: { display: false } },
                                        scales: { y: { beginAtZero: true } },
                                    }}
                                />
                            </div>
                            <div className="text-lg font-bold mt-4">
                                Average Water Consumption: <span id="averageUsage">35L</span> per day
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-8">
                        <Button variant="outline" asChild>
                            <a href="/achievements">Achievements</a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="/leaderboard">Leaderboard</a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="/challenges">Challenges</a>
                        </Button>
                        <Button variant="outline" asChild>
                            <a href="/redeem">Redeem</a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default WaterConservationDashboard

