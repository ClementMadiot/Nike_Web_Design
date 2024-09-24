import React from 'react'
import { star } from '../../assets/icons'

function ProductCard({ imgURL, name, price }) {
  return (
    <div className='flex flex-1 flex-col items-center sm:items-start w-full max-sm:w-full '>
      <img src={imgURL} alt={name} className='w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] hover:scale-105 duration-150' />
      <div className="mt-8 flex justify-start gap-2.5 ">
        <img src={star} alt="rating" width={24} height={24}  />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
      </div>
      <h3 className='mt-2 text-2xl leading-mormal font-semibold font-palanquin'>{name}</h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-lg  leading-normal'>{price}</p>
    </div>
  )
}

export default ProductCard