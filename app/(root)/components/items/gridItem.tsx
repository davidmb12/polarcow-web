import { image } from 'framer-motion/client';
import React from 'react'
type ItemProps ={
  title:string;
  info:string;
  imageSrc:string;
}
const Item:React.FC<ItemProps> = ({title,info,imageSrc=null}) => {
  return (
    <div className='w-full h-full rounded-lg'>
      <div className='bg-cover bg-center overflow-hidden h-[80%] justify-center text-center' style={{ backgroundImage: `url(${imageSrc})` }}>
        {title}
      </div>
      <div className='p-8'>
        {info}
      </div>
    </div>
    
  )
}

export default Item