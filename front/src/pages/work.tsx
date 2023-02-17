import { GetServerSideProps, NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import MainLayout from "@/components/layout/MainLayout"
import ProjectItem from "@/components/projectItem/ProjectItem"
import { IWorkItems } from "@/types/work"


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

    const workData: IWorkItems[] = [
        {
            image: "/assets/img/work/ov.png",
            title: "Overvest",
            description: {
                en: "Website for the clothing brand Overvest, stack of technologies: Next JS, Redux, Typescript, Django, Docker.",
                ru: "Сайт для бренда одежды Overvest, стек технологий: Next JS, Redux, Typescript, Django, Docker."
            },
            links: [
                {
                    type: "web",
                    link: "https://takeovervest.com"
                },
            ]
        },
        {
            image: "/assets/img/work/ph.png",
            title: "PitaCash",
            description: {
                en: "A website for the Philippine loan company Pita Cash, a stack of technologies: Next JS, Redux, Typescript. I was engaged in refactoring, editing and writing the functionality of the application.",
                ru: "Сайт для филипинской компании займов Pita Cash, стек технологий: Next JS, Redux, Typescript. Я занимался рефакторингом, правками и написанием функционала приложения."
            },
            links: [
                {
                    type: "web",
                    link: "https://pitacash.ph/"
                },
            ]
        },
        {
            image: "/assets/img/work/bm.png",
            title: "Bomond",
            description: {
                en: "Ticket sales service for Russian, Ukrainian and European concerts and events in the USA and Canada. On this project, I was editing the page with the list of concerts and finalizing the ticket payment section.",
                ru: "Сервис продажи билетов на российские, украинские и европейские концерты и мероприятия в США и Канаде. На этом проекте я занимался правками страницы со списком концертов и доработкой раздела оплаты билетов."
            },
            links: [
                {
                    type: "web",
                    link: "https://bomond.com/"
                },
            ]
        },
        {
            image: "/assets/img/work/tm.png",
            title: "Techmotive",
            description: {
                en: "Website for home appliance service Techmotive, technology stack: HTML, CSS, JS, Django. I was engaged in the layout of the pages of the service and the subsequent integration pages in Django.",
                ru: "Сайт для сервиса бытовой техники ТехМотив, стек технологий: HTML, SASS, JS, Django. Я занимался версткой страниц сервиса и последующей интеграцией страниц в Django."
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
