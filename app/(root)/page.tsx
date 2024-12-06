"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect } from 'react'
import BentoGrid from './components/bentoGrid'
import ItemsList from './components/items/itemsList'
import Item from './components/items/gridItem'

const HomePage = () => {
    const items = ItemsList;


    return (
        <>

            <motion.div className="-z-0 bg-fixed bg-center bg-no-repeat h-screen background-image bg-white ">

            </motion.div>



            <motion.div
                initial={{ opacity: 0, marginLeft: "-40rem" }}
                whileInView={{ opacity: 1, marginLeft: "0" }}
                animate
                className='text-white font-thin p-9 h-[100vh]'
            >
                <h1 className='text-5xl'>Projects</h1>
                <BentoGrid items={items} itemsPerPage={3} renderItem={(item) => (
                    <>
                        {item}
                    </>

                )}></BentoGrid>

            </motion.div>

        </>
    )
}

export default HomePage