export interface IProjectLinks {
  type: "git" | "web"
  link: string
}

export interface IProjectItems {
  image?: string
  title: string
  description: {
    en: string
    ru: string
    [key: string]: string
  }
  links: IProjectLinks[]
}
