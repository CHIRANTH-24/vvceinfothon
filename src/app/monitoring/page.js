import { CategoryWiseDialog } from '@/components/monitoring/CategoryWiseDialog'
import { WaterComsumption } from '@/components/monitoring/WaterConsumption'
import { WaterLevel } from '@/components/monitoring/WaterLevel'
import { WaterLevelDialog } from '@/components/monitoring/WaterLevelDialog'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-primary">
        📡 Monitoring
      </h1>

      {/* Water Consumption Chart */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <WaterComsumption />
      </div>

      {/* Grid for Additional Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CategoryWiseDialog />
        <WaterLevelDialog />
      </div>
    </div>
  );
}

export default page
