import { GetServerSideProps, NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import MainLayout from "@/components/layout/MainLayout"

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || "en", [
                "common",
                "about"
            ])),
        },
    }
}

const Work: NextPage = () => {
    return (
        <MainLayout>
            <div>

            </div>
        </MainLayout>
    )
}

export default Work
