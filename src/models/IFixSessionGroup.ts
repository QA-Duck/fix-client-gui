import IFixSessionShortInfo from "./IFixSessionShortInfo"

export default interface IFixSessionGroup {
    name: string
    isOpen: boolean
    connections: Array<IFixSessionShortInfo>
}