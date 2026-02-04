import { GetServerSideProps, NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import MainLayout from "@/components/layout/MainLayout"
import ProjectItem from "@/components/projectItem/ProjectItem"
import { IProjectItems } from "@/types/project"


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
  const workData: IProjectItems[] = [
    {
      title: "GreenifAI Marketing",
      description: {
        en: "Automated marketing platform for sustainable businesses. Low-carbon future marketing automation. React, Next.js, NestJS, Docker.",
        ru: "Платформа автоматизированного маркетинга для устойчивого бизнеса. Автоматизация маркетинга для low-carbon будущего. React, Next.js, NestJS, Docker."
      },
      links: [
        {
          type: "web",
          link: "https://greenifai.marketing"
        },
      ]
    },
    {
      title: "GreenifAI Shopping",
      description: {
        en: "AI-powered sustainability platform for e-commerce. Carbon emissions tracking, analytics and Shopify integration. React, Next.js, Express, Docker.",
        ru: "AI-платформа устойчивого развития для e-commerce. Отслеживание выбросов CO2, аналитика и интеграция с Shopify. React, Next.js, Express, Docker."
      },
      links: [
        {
          type: "web",
          link: "https://greenifai.shopping"
        },
      ]
    },
    {
      title: "TransparenTerra",
      description: {
        en: "Social platform for transparent business communication. Frontend development and blockchain integrations. React, Next.js, NestJS, Docker.",
        ru: "Социальная платформа для прозрачной бизнес-коммуникации. Разработка фронтенда и блокчейн интеграции. React, Next.js, NestJS, Docker."
      },
      links: [
        {
          type: "web",
          link: "https://transparenterra.com"
        },
      ]
    },
    {
      title: "SCAN Analytics",
      description: {
        en: "Web application for online school analytics. Design, development and integration of application modules. Typescript, React, Next.js, Redux Toolkit, Jest, Ant Design.",
        ru: "Веб-приложение аналитики онлайн школы. Проектирование, разработка и интеграция модулей приложения. Typescript, React, Next.js, Redux Toolkit, Jest, Ant Design."
      },
      links: []
    },
    {
      title: "Overvest",
      description: {
        en: "E-commerce platform for a clothing brand. Full development cycle from design to deployment. React + Next.js + Redux on frontend, Django REST API + PostgreSQL + Docker on backend.",
        ru: "E-commerce платформа для бренда одежды. Полный цикл разработки от дизайна до деплоя. React + Next.js + Redux на фронтенде, Django REST API + PostgreSQL + Docker на бэкенде."
      },
      links: []
    },
    {
      title: "Techmotive",
      description: {
        en: "Website for home appliance service. HTML, SASS, JS, Django. Layout and Django integration.",
        ru: "Сайт для сервиса бытовой техники. HTML, SASS, JS, Django. Вёрстка и интеграция в Django."
      },
      links: [
        {
          type: "web",
          link: "https://www.techmotive.ru/"
        },
      ]
    }
  ]

  return (
    <MainLayout>
      <div className="work-page">
        {
          workData.map((item, index) => (
            <ProjectItem
              key={index}
              item={item}
              index={index}
            />
          ))
        }
      </div>
    </MainLayout>
  )
}

export default Work
