import { GetServerSideProps, NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import MainScene from "@/components/3d/mainScene/MainScene"
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
  return (
    <MainLayout>
      <div className="home">
        <MainScene />
      </div>
    </MainLayout>
  )
}

export default Home
