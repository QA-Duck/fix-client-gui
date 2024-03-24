export interface IFixSessionConnection {
    sender: string,
    target: string,
    host: string,
    port: number
}

export default interface IFixSessionShortInfo {
    id: string,
    name: string,
    status: string,
    connection: IFixSessionConnection
}