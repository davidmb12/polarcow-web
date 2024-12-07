import { image } from 'framer-motion/client';
import React from 'react'
type ItemProps ={
  title:string;
  info:string;
  imageSrc:string;
  thumbnailStyles:string;
  descriptionStyles:string;
  
}
const Item:React.FC<ItemProps> = ({title,info,imageSrc=null,thumbnailStyles='',descriptionStyles=''}) => {
  return (
    <div className='w-full h-full'>
      <div className={`${thumbnailStyles} bg-cover bg-center overflow-hidden h-[80%]  mt-4 rounded-t-lg p-8 `} style={{ backgroundImage: `url(${imageSrc})` }}>
        {title}
      </div>
      <div className={`${descriptionStyles} p-8 rounded-b-lg`}>
        {info}
      </div>
    </div>
    
  )
}

export default Item