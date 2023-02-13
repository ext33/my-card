import React, { FC } from "react"

import Head from "next/head"

import Header from "../header/Header"

interface IMainLayoutProps {
    children: React.ReactElement,
    title?: string,
    description?: string
    withNav?: boolean,
}

const MainLayout: FC<IMainLayoutProps> = ({ children, withNav = true, title, description }) => {

    return (
        <>
            <Head>
                <title>{title || "ext33"}</title>
                <meta name="description" content={description || "ext33 card site"} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            { withNav ? <Header/> : null }
            <div>
                {children}
            </div>
        </>
    )
}

export default MainLayout
