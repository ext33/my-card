import { GetServerSideProps, NextPage } from "next"
import { useTranslation } from "next-i18next"
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

const Home: NextPage = () => {
  const { t } = useTranslation("about")

  return (
    <MainLayout>
      <div className="home">

      </div>
    </MainLayout>
  )
}

export default Home
