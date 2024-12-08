import { motion } from 'framer-motion';
import React from 'react'

type NavigationGridBarProps = {
  pagesNumber: number;
  currentPage: number;
  changePage: (page: number) => void;
}
const NavigationGridBar: React.FC<NavigationGridBarProps> = ({ pagesNumber, currentPage, changePage }) => {
  return (
    <div className='flex justify-center mt-10 '>
      <div className='w-9 flex justify-around'>
        {Array.from({ length: pagesNumber }, (_, i) =>
        (
          <motion.div whileHover={{scale:1.1}}>
            <button className={`${currentPage == i ? 'bg-white':'bg-gray-400'} w-3 h-3 rounded-full`} style={{scale:currentPage ===i?1:0.5}}key={i} onClick={() => changePage(i)}></button>
 
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default NavigationGridBar