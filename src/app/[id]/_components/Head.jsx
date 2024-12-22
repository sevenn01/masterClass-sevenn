import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import React from 'react'
import img2 from '../../../../public/img-2.jpg'

function Head({img}) {
  return (
    <div className='w-full relative h-[400px]  overflow-hidden  
    '>
      {
       //img ?
        //(
          <Image
            className='w-full object-cover '
            //src={!img ? img2 : img}
            src={img2}
            alt='heade-img'
            width={500}
            height={500}
          />
        //):
        //(
         // <Skeleton className='w-full h-full' ></Skeleton>
        //)
      }
      
    </div>
  )
}

export default Head 