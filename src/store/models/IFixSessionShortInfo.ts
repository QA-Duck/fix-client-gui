import IConnectionStatus from "./ConnectionStatus";

export default interface IFixSessionShortInfo {
    connection_uuid: string,
    connection_name: string,
    connection_status: IConnectionStatus
}