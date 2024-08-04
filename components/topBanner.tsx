import React from 'react'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
const TopBanner = () => {
  return (
      <div className='flex justify-center items-center w-full bg-[#191919] py-4'>
          <div className='flex gap-1 items-center justify-center'>
              <span className='text-white 2xl:font-medium 2xl:text-lg font-medium text-sm'>Subscribe to our Newsletter For Latest Collections.</span>
              <ArrowUpRightIcon className='text-white h-4 2xl:h-5 ' />
          </div>
    </div>
  )
}

export default TopBanner