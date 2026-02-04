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

const About: NextPage = () => {
  const { t } = useTranslation("about")

  const hardSkills = [
    "Typescript",
    "React",
    "Next",
    "Redux",
    "SCSS",
    "Node.js",
    "Express",
    "NestJS",
    "Python",
    "Django",
    "SQL",
    "Git",
    "Docker"
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
      title: "Fullstack Engineer",
      company: "FCE GROUP AG",
      time: "Full time",
      period: "04.2023 - Present",
      skills: [
        "Typescript",
        "React",
        "Next",
        "Express",
        "NestJS",
        "Blockchain",
        "Docker"
      ]
    },
    {
      title: "Frontend Engineer",
      company: "SCAN Analytics",
      time: "Full time",
      period: "05.2022 - 03.2023",
      skills: [
        "Typescript",
        "React",
        "Next",
        "Redux Toolkit",
        "Jest",
        "Ant Design"
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
        "Redux",
        "MobX",
        "Ant Design",
        "Material UI"
      ]
    },
    {
      title: "Frontend Engineer",
      company: "Overvest",
      time: "Full time",
      period: "02.2021 - 10.2021",
      skills: [
        "Typescript",
        "React",
        "Next",
        "Redux",
        "Django",
        "PostgreSQL",
        "Docker"
      ]
    },
  ]

  return (
    <MainLayout>
      <div className="about">

        <div className="about__head">
          <div className="about__head_start" />

          <Image
            src="/assets/img/MyPhoto.jpeg"
            alt=""
            className="about__head_photo"
            width={320}
            height={350}
          >

          </Image>

          <div className="about__head_block">
            <h3>
              {t("nameText")}
            </h3>
            <p>Email: redwoodx3@gmail.com</p>
            <p>Telegram: @xdxd3xd</p>
            <a href="https://hh.ru/applicant/resumes/view?resume=bb5fa208ff088712c00039ed1f57487159675a" target="_blank">HeadHunter</a>, <a href="https://www.linkedin.com/in/ext33/" target="_blank">Linkedin</a>, <a href="https://www.instagram.com/ext3ws/" target="_blank">Instagram</a>
            <p>
              {t("birthdayText")}
            </p>
          </div>
        </div>

        <div className="about__data">

          <div className="about__section">
            <div className="about__section_block">
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
            <div className="about__section_block">
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
            <div className="about__section_block">
              <h2>
                {t("languagesTitle")}
              </h2>
              <div>
                <p>
                  Russian - Native
                </p>
                <p>
                  English - B1
                </p>
                <p>
                  Serbian - A1
                </p>
              </div>
            </div>

            <div className="about__section_block">
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

          <div className="about__section">
            <div className="about__section_block">
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

export default About
