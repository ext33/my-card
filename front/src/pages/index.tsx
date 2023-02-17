import { GetServerSideProps, NextPage } from "next"
import Image from "next/image"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import MainLayout from "@/components/layout/MainLayout"
import WorkItem from "@/components/workItem/WorkItem"

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

    const hardSkills = [
        "Typescript",
        "React",
        "Next",
        "Redux",
        "SCSS",
        "Node.js",
        "Python",
        "Django",
        "FastAPI",
        "SQL",
        "Git"
    ]

    const softSkills = [
        `${t("softSkillResp")}`,
        `${t("softSkillFlex")}`,
        `${t("softSkillOpt")}`,
        `${t("softSkillMind")}`,
        `${t("softSkillPunctuality")}`,
        `${t("softSkillCommunicate")}`
    ]

    const workExp = [
        {
            title: "Frontend Engineer",
            company: "SCAN Analytics",
            time: "Full time",
            period: "05.2022 - P.T.",
            skills: [
                "Typescript",
                "React",
                "Next",
                "Redux",
                "SCSS",
                "SEO Optimization"
            ]
        },
        {
            title: "Software Engineer",
            company: "Rest App",
            time: "Part time",
            period: "12.2022 - P.T.",
            skills: [
                "Typescript",
                "React",
                "Next",
                "Python",
                "FastAPI",
                "SQL",
            ]
        },
        {
            title: "Frontend Engineer",
            company: "Amigoweb",
            time: "Full time",
            period: "10.2021 - 05.2022",
            skills: [
                "Typescript",
                "React",
                "Next",
            ]
        },
        {
            title: "Frontend Engineer",
            company: "Overvest",
            time: "Freelance",
            period: "02.2021 - 10.2021",
            skills: [
                "Typescript",
                "React",
                "Next",
                "Python",
                "Django"
            ]
        },
    ]

    return (
        <MainLayout>
            <div className="home">

                <div className="home__head">
                    <div className="home__head_start">
                        {/*<span>*/}
                        {/*    {t("helloText")},*/}
                        {/*</span>*/}
                    </div>

                    <Image
                        src="/assets/img/MyPhoto.png"
                        alt=""
                        className="home__head_photo"
                        width={320}
                        height={350}
                    >

                    </Image>

                    <div className="home__head_block">
                        <h3>
                            {t("nameText")}
                        </h3>
                        <p>Email: redwoodx3@gmail.com</p>
                        <p>Telegram: @xdxd3xd</p>
                        <a href="https://hh.ru/applicant/resumes/view?resume=bb5fa208ff088712c00039ed1f57487159675a" target="_blank">HeadHunter</a>, <a href="https://www.linkedin.com/in/egor-bekker-1343b121b/" target="_blank">Linkedin</a>, <a href="https://www.instagram.com/ext3ws/" target="_blank">Instagram</a>
                        <p>
                            {t("currentLocationText")}
                        </p>
                        <p>
                            {t("birthdayText")}
                        </p>
                    </div>
                </div>

                <div className="home__data">

                    <div className="home__section">
                        <div className="home__section_block">
                            <h2>
                                {t("hardSkillsTitle")}
                            </h2>
                            <div className="flex-wrapper">
                                {
                                    hardSkills.map((item, index) => (
                                        <span className="column" key={index}>
                                            {item}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="home__section_block">
                            <h2>
                                {t("softSkillsTitle")}
                            </h2>
                            <div className="flex-wrapper">
                                {
                                    softSkills.map((item, index) => (
                                        <span className="column" key={index}>
                                            {item}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="home__section_block">
                            <h2>
                                {t("languagesTitle")}
                            </h2>
                            <div>
                                <p>
                                    Russian - Native
                                </p>
                                <p>
                                    English - A2
                                </p>
                                <p>
                                    Turkish - A1
                                </p>
                            </div>
                        </div>

                        <div className="home__section_block">
                            <h2>
                                {t("educationTitle")}
                            </h2>
                            <div>
                                <div>
                                    <h4>{t("educationCollegeTitle")}</h4>
                                    <p>{t("educationCollegeText")}</p>
                                </div>

                                <div>
                                    <h4>{t("educationExtraTitle")}</h4>
                                    <p>edX - Mobile App Development with React Native, 2023</p>
                                    <p>Udemy - Next & SSR, 2021</p>
                                    <p>Udemy - React Course, 2021</p>
                                    <p>Specialist - OOP in Python, 2020</p>
                                    <p>edX - Introduction to Programming with Python, 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="home__section">
                        <div className="home__section_block">
                            <h2>
                                {t("workTitle")}
                            </h2>
                            <div>
                                {
                                    workExp.map((item, index) => (
                                        <WorkItem
                                            key={index}
                                            title={item.title}
                                            company={item.company}
                                            time={item.time}
                                            period={item.period}
                                            skills={item.skills}
                                        />
                                    ))
                                }
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </MainLayout>
    )
}

export default Home
