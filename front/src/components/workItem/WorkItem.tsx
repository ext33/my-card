import React, { FC } from "react"

interface IWorkItemProps {
  title: string
  company: string
  time: string
  period: string
  skills: string[]
}

const WorkItem: FC<IWorkItemProps> = ({ title, company, period, time, skills }) => {
  return (
    <div>
      <h3>
        {title}
      </h3>
      <p>
        {company}
      </p>
      <p>
        {time}
      </p>
      <p>
        {period}
      </p>
      <div>
        {
          skills.map((item, index) => (
            <span className="tag" key={index}>
              {item}
            </span>
          ))
        }
      </div>
    </div>
  )
}

export default WorkItem
