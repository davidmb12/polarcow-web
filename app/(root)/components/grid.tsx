import { motion } from 'framer-motion'
import React from 'react'

type GridProps = {
    children:React.ReactNode,
    width:string,
    height:string,
    rows:number,
    cols:number,
}
const Grid:React.FC<GridProps> = ({children,width,height,rows,cols}) => {
  return (
    <>
         <motion.div className='bg-white w-full h-full '>
            {children}
         </motion.div>
    </>
  )
}

export default Grid