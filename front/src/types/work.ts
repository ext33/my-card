export interface TWorkLinks {
    type: "git" | "web",
    link: string
}

export interface IWorkItems {
    image: string,
    title: string,
    description: {
        en: string,
        ru: string
    }
    links: TWorkLinks[]
}
