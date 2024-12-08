"use client"
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import React, { useEffect } from 'react'
import BentoGrid from '../../components/bentoGrid'
import ItemsList from '../../components/items/itemsList'
const HomePage = () => {
    const items = ItemsList;
    const {scrollYProgress} = useScroll()
    const scale = useTransform(scrollYProgress,[0,1],[0.5,0.05]);
   
    return (
        <>
            <div className='h-[100vh] w-full justify-center'>
                <AnimatePresence>

                    <motion.div className='flex justify-center w-full h-full  ' style={{scale, transformOrigin: 'center center' }}>
                        <img src='Logo.png'></img>
                    </motion.div>
                </AnimatePresence>

            </div>

            <div className='p-12'>
                <motion.div
                    initial={{ opacity: 0, marginLeft: "-40rem" }}
                    whileInView={{ opacity: 1, marginLeft: "0" }}
                    animate
                    className='text-white font-thin'
                >
                    <h1 className='text-5xl'>Projects</h1>
                </motion.div>
                <BentoGrid items={items} itemsPerPage={3} renderItem={(item) => (
                    <>
                        {item}
                    </>
                )}></BentoGrid>
            </div>


        </>
    )
}

export default HomePage