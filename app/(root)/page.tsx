"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Grid from './components/grid'
import BentoGrid from './components/bentoGrid'
import ItemsList from './components/items/itemsList'
import Item from './components/items/item'

const HomePage = () => {
    const items =ItemsList;
    const { scrollYProgress } = useScroll()
    console.log(scrollYProgress["current"])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5])
    
    return (
        <>

            <motion.div className="bg-fixed bg-center bg-no-repeat h-screen background-image bg-white">

            </motion.div>
            


            <div className='bg-black w-full h-screen'>
                <div className='flex flex-col align-text-top text-center h-full'>
                    <motion.div
                        initial={{ opacity: 0, marginLeft: "-20rem" }}
                        whileInView={{ opacity: 1, marginLeft: "0" }}
                        className='text-white text-6xl font-thin p-11'
                    >
                        <h1>Projects</h1>
                        <BentoGrid items={items} itemsPerPage={1} renderItem={(item)=>(
                            <div className='text-center text-lg font-medium text-gray-500'>
                                {item}
                            </div>
                        )}></BentoGrid>
                    </motion.div>
                </div>
            </div>

        </>
    )
}

export default HomePage