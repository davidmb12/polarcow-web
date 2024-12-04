import React, { useState } from 'react'
type BentoGridProps<T> = {
    items: T[];
    itemsPerPage: number;
    renderItem: (item: T) => React.ReactNode;
};
const BentoGrid = <T,>({ items, itemsPerPage, renderItem }: BentoGridProps<T>) => {
    const [currentPage,setCurrentPage] = useState(0);
    const startIndex = currentPage *itemsPerPage;
    const paginatedItems = items.slice(startIndex,startIndex+itemsPerPage);
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const handleNext = ()=>{
        if(currentPage < totalPages - 1) setCurrentPage(currentPage+1);
    }
    const handlePrev=() =>{
        if(currentPage > 0) setCurrentPage(currentPage-1);
    }
    return (
        <div className='flex flex-col items-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full'>
                {paginatedItems.map((item,index)=>(
                    <div key={index} className='bg-gray-200 rounded-lg p-4 shadow-md flex items-center justify-center'>
                        {renderItem(item)}
                    </div>
                ))}
            </div>
            {/*Pagination controls*/}
            <div className='flex items-center gap-4 mt-4'>
                <button onClick={handlePrev} disabled={currentPage===0} className={`px-4 py-2 rounded-md ${currentPage===0? "bg-gray-300 text-gray-500 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`}>
                    Previous
                </button>
                <span className='text-gray-700'>
                    Page {currentPage +1} of {totalPages}
                </span>
                <button className={`px-4 py-2 rounded-md ${currentPage === totalPages-1 ? "bg-gray-300 text-gray-500 cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default BentoGrid