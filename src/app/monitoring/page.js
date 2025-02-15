import { CategoryWiseDialog } from '@/components/monitoring/CategoryWiseDialog'
import { WaterComsumption } from '@/components/monitoring/WaterConsumption'
import { WaterLevel } from '@/components/monitoring/WaterLevel'
import { WaterLevelDialog } from '@/components/monitoring/WaterLevelDialog'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div>
      Monitoring
      <WaterComsumption />
      <div className="mt-2 flex gap-4">
        <CategoryWiseDialog />
        <WaterLevelDialog />
      </div>
    </div>
  );
}

export default page
