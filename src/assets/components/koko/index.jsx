import React from 'react'
import one from '../../../assets/1chi.svg'
import two from '../../../assets/2chi.svg'
import thre from '../../../assets/3chi.svg'
import forr from '../../../assets/4chi.svg'

const Koko = () => {
  return (
    <div className="flex justify-between w-[80%] m-auto mt-[40px] flex-wrap gap-4 mb-[30px]">
      <img src={one} alt="logo1" className="max-w-[280px] w-full object-contain" />
      <img src={two} alt="logo2" className="max-w-[280px] w-full object-contain" />
      <img src={thre} alt="logo3" className="max-w-[280px] w-full object-contain" />
      <img src={forr} alt="logo4" className="max-w-[280px] w-full object-contain" />
    </div>
  )
}

export default Koko
