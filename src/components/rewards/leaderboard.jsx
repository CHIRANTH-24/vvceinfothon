import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Leaderboard = () => {
    const leaderboardData = [
        { name: "Alex", position: "1st", width: "w-[90%]" },
        { name: "Bella", position: "2nd", width: "w-[70%]" },
        { name: "Chris", position: "3rd", width: "w-[50%]" },
        { name: "David", position: "4th", width: "w-[30%]" },
        { name: "Emma", position: "5th", width: "w-[20%]" },
    ]

    return (
        <div className="container mx-auto p-4">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Leaderboard</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-center text-xl font-bold mb-4">🏆 Top Conservers</h2>
                        {leaderboardData.map((entry, index) => (
                            <div
                                key={index}
                                className={`bg-green-500 text-white font-bold rounded-md py-2 my-2 text-right px-4 ${entry.width}`}
                            >
                                {entry.position} - {entry.name}
                            </div>
                        ))}
                    </div>
                    <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
                        <h2 className="text-xl font-bold mb-4">💧 Honor & Water Scores</h2>
                        <div className="bg-blue-100 text-center font-bold py-3 px-5 rounded-md w-3/4 my-2">Honor Score: 2500</div>
                        <div className="bg-blue-100 text-center font-bold py-3 px-5 rounded-md w-3/4 my-2">
                            Water Conservation Score: 1800
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Leaderboard

