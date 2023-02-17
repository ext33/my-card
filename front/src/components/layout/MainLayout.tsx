import React, { FC } from "react"

import { motion } from "framer-motion"
import Head from "next/head"

import Header from "../header/Header"

interface IMainLayoutProps {
    children: React.ReactElement,
    title?: string,
    description?: string
    withNav?: boolean,
    animateExitDuration?: number
    animateDuration?: number
}

const MainLayout: FC<IMainLayoutProps> = ({ children, withNav = true, title, description, animateExitDuration = 0.4, animateDuration = 0.4 }) => {

    return (
        <>
            <Head>
                <title>{title || "ext33"}</title>
                <meta name="description" content={description || "ext33 card site"} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            { withNav ? <Header/> : null }

            <motion.div
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: animateExitDuration } }}
                transition={{
                    type: "tween",
                    duration: animateDuration
                }}
            >
                {children}
            </motion.div>
        </>
    )
}

export default MainLayout
