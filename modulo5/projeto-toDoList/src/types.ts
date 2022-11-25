export type Usuario = {
    id: number,
    name: string,
    nickname: string,
    email: string
}

export type Task = {
    id: number,
    title: string,
    description: string,
    status: string,
    limitDate: string,
    creatorUserId: number
}