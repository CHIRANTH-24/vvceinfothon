"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { category: "Drinking", usage: 50, fill: "var(--color-drinking)" },
    { category: "Cooking", usage: 80, fill: "var(--color-cooking)" },
    { category: "Bathing", usage: 200, fill: "var(--color-bathing)" },
    { category: "Laundry", usage: 150, fill: "var(--color-laundry)" },
    { category: "Cleaning", usage: 120, fill: "var(--color-cleaning)" },
    { category: "Gardening", usage: 100, fill: "var(--color-gardening)" },
    { category: "Toilet", usage: 250, fill: "var(--color-toilet)" },
]

const chartConfig = {
    usage: {
        label: "Usage (L)"
    },
    drinking: {
        label: "Drinking",
        color: "hsl(var(--chart-1))",
    },
    cooking: {
        label: "Cooking",
        color: "hsl(var(--chart-2))",
    },
    bathing: {
        label: "Bathing",
        color: "hsl(var(--chart-3))",
    },
    laundry: {
        label: "Laundry",
        color: "hsl(var(--chart-4))",
    },
    cleaning: {
        label: "Cleaning",
        color: "hsl(var(--chart-5))",
    },
    gardening: {
        label: "Gardening",
        color: "hsl(var(--chart-6))",
    },
    toilet: {
        label: "Toilet",
        color: "hsl(var(--chart-7))",
    },
}

export function CategoryPie() {
    const totalUsage = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.usage, 0)
    }, [])

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Pie Chart - Water Usage</CardTitle>
                <CardDescription>Household Water Consumption</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="usage"
                            nameKey="category"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalUsage.toLocaleString()} L
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Total Usage
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total water usage for household activities
                </div>
            </CardFooter>
        </Card>
    )
}