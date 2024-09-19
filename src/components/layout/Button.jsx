import React from 'react'

function Button({label, iconUrl}) {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full bg-coral-red  text-white'>{label}
    {iconUrl}
    </button>
  )
}

export default Button