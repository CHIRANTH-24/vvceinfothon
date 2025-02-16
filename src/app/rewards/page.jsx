import Achievements from '@/components/rewards/achievements'
import Challenges from '@/components/rewards/challengs'
import Leaderboard from '@/components/rewards/leaderboard'
import RedeemPoints from '@/components/rewards/redeem-points'
import WaterConservationDashboard from '@/components/rewards/water-conservation-dashboard'
import React from 'react'

const page = () => {
  return (
      <div className='grid grid-cols-2 gap-2'>
          <WaterConservationDashboard />
          <Leaderboard />
          <Challenges />
          
          
    </div>
  )
}

export default page
