export class SessionMessageService {

    address: string = "http://localhost:8080/subscriptions/subscribe/"
    sources: Map<string, EventSource> = new Map()

    public connect(
        client_uuid: string,
        onMessage: (ev: MessageEvent<string>) => void
    ): void {
        if (!this.sources.has(client_uuid)) {
            const source = new EventSource(this.address + client_uuid)
            this.sources.set(client_uuid, source)
            source.onmessage = onMessage
        } 
    }

    public disconnect(
        client_uuid: string
    ): void {
        if (!this.sources.has(client_uuid)) {
            this.sources.get(client_uuid)?.close()
            this.sources.delete(client_uuid);
        }
    }
}

const sessionMessageService = new SessionMessageService()

export default sessionMessageService