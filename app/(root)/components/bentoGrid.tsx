import { motion } from 'framer-motion';
import React, { useState } from 'react';
type GridItem<T> ={
    data:T;
    rowSpan?:number;
    colSpan?:number;
}
type BentoGridProps<T> = {
    items: GridItem<T>[];
    itemsPerPage: number;
    renderItem: (item: T) => React.ReactNode;
};
const BentoGrid = <T,>({ items, itemsPerPage, renderItem }: BentoGridProps<T>) => {
    const [currentPage,setCurrentPage] = useState(0);
    const startIndex = currentPage *itemsPerPage;
    const paginatedItems = items.slice(startIndex,startIndex+itemsPerPage);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const [hoveredItem,setHoveredItem] = useState<number | null>(null);
    
    const handleNext = ()=>{
        if(currentPage < totalPages - 1) setCurrentPage(currentPage+1);
    }
    const handlePrev=() =>{
        if(currentPage > 0) setCurrentPage(currentPage-1);
    }
    return (
        <div className=''>
            <div className='grid grid-cols-6 gap-4 w-full' style={{gridAutoRows:"200px"}}>
                {paginatedItems.map((item,index)=>(
                    <motion.div key={index} onMouseEnter={()=>setHoveredItem(index)} onMouseLeave={()=>setHoveredItem(null)}  style={{gridColumn:`span ${item.colSpan ||1}/ span ${item.colSpan ||1}`, gridRow:`span ${item.rowSpan || 1} / span ${item.rowSpan || 1}`}} >
                        {renderItem(item.data)}
                    </motion.div>
                ))}
            </div>
            {/*Pagination controls*/}
            <div className='flex items-center gap-4 mt-20'>
                <button onClick={handlePrev} disabled={currentPage===0} className={`px-4 py-2 rounded-md ${currentPage===0? "bg-gray-300 text-gray-500 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`}>
                    Previous
                </button>
                <span className='text-gray-700'>
                    Page {currentPage +1} of {totalPages}
                </span>
                <button onClick={handleNext} className={`px-4 py-2 rounded-md ${currentPage === totalPages-1 ? "bg-gray-300 text-gray-500 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default BentoGrid