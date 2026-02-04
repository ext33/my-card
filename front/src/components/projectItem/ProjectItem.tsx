import { FC } from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslation } from "next-i18next"

import { IProjectItems } from "@/types/project"

import ItemLink from "./Link"

interface IProps {
  item: IProjectItems
  index: number
}

const ProjectItem: FC<IProps> = ({ item, index }) => {

  const { i18n } = useTranslation()

  const variants = {
    visible: {
      opacity: 1,
      transition: { duration: .4, delay: (index + 1) * .2 }
    },
    hidden: {
      opacity: 0,
    },
  }

  return (
    <motion.div
      className="project-item"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      {item.image && (
        <Image
          src={item.image}
          alt={item.title}
          width={1000}
          height={800}
        />
      )}

      <div className="project-item__info">
        <div className="project-item__title">
          <h3>{item.title}</h3>
          {
            item.links.map((linkItem, linkIndex) => (
              <ItemLink key={linkIndex} type={linkItem.type} link={linkItem.link} />
            ))
          }
        </div>

        <p>{item.description[`${i18n.language}`]}</p>
      </div>
    </motion.div>
  )
}

export default ProjectItem
