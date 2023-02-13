import { GetServerSideProps, NextPage } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import MainLayout from "@/components/layout/MainLayout"

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || "en", [
                "common",
            ])),
        },
    }
}

const Home: NextPage = () => {
    return (
        <MainLayout>
            <div className="home">

                <div className="home__head">
                    <div className="home__head_start">
                        <span>
                            Hello,
                        </span>
                    </div>

                    <div className="home__head_photo">

                    </div>

                    <div className="home__head_block">
                        <h3>
                            Egor Bekker
                        </h3>
                        <p>Email: redwoodx3@gmail.com</p>
                        <p>Telegram: @xdxd3xd</p>
                        <a href="https://hh.ru/applicant/resumes/view?resume=bb5fa208ff088712c00039ed1f57487159675a" target="_blank">HeadHunter</a>, <a href="https://www.linkedin.com/in/egor-bekker-1343b121b/" target="_blank">Linkedin</a>, <a href="https://www.instagram.com/ext3ws/" target="_blank">Instagram</a>
                        <p>
                            Currently in Antalya, Turkey
                        </p>
                        <p>
                            Born in 02 February 2001
                        </p>
                    </div>
                </div>

                <div className="home__data">

                    <div className="home__section">
                        <div className="home__section_block">
                            <h2>
                                Hard skills
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores, consectetur dicta ea eius error est excepturi facilis, iusto labore necessitatibus nemo nesciunt officiis quaerat quos sed vitae, voluptate voluptates?
                            </p>
                        </div>
                        <div className="home__section_block">
                            <h2>
                                Soft skills
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores, consectetur dicta ea eius error est excepturi facilis, iusto labore necessitatibus nemo nesciunt officiis quaerat quos sed vitae, voluptate voluptates?
                            </p>
                        </div>
                        <div className="home__section_block">
                            <h2>
                                Languages
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores, consectetur dicta ea eius error est excepturi facilis, iusto labore necessitatibus nemo nesciunt officiis quaerat quos sed vitae, voluptate voluptates?
                            </p>
                        </div>
                    </div>

                    <div className="home__section">
                        <div className="home__section_block">
                            <h2>
                                Work
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores, consectetur dicta ea eius error est excepturi facilis, iusto labore necessitatibus nemo nesciunt officiis quaerat quos sed vitae, voluptate voluptates?
                            </p>
                        </div>
                        <div className="home__section_block">
                            <h2>
                                Education
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores, consectetur dicta ea eius error est excepturi facilis, iusto labore necessitatibus nemo nesciunt officiis quaerat quos sed vitae, voluptate voluptates?
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </MainLayout>
    )
}

export default Home
