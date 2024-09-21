import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs";


function Button({label, iconUrl, backgroundColor, fullWidth}) {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${backgroundColor || "bg-coral-red  text-white"} ${fullWidth === "w-full"} `}>{label}
    {iconUrl ? <BsArrowRightCircle className='ml-2 w-5 h-5 bg-white rounded-full text-coral-red border-none'/> : null}
    </button>
  )
}

export default Button

