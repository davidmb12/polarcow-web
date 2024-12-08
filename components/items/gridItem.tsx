import { image } from 'framer-motion/client';
import React from 'react'
type ItemProps ={
  title:string;
  info:string;
  imageSrc:string;
  thumbnailStyles:string;
  descriptionStyles:string;
  generalStyles:string;
  
}
const Item:React.FC<ItemProps> = ({title,info,imageSrc=null,thumbnailStyles='',descriptionStyles='',generalStyles=''}) => {
  return (
    <div className={`${generalStyles} flex flex-col w-full h-full overflow-hidden rounded-lg mt-6`}>
      <div className={`${thumbnailStyles} bg-contain bg-no-repeat bg-center overflow-hidden flex-grow p-8 `} style={{ backgroundImage: `url(${imageSrc})` }}>
        {title}
      </div>
      <div className={`${descriptionStyles} p-8  flex-shrink`}>
        {info}
      </div>
    </div>
    
  )
}

export default Item