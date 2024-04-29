import IFixSessionShortInfo from "../../store/models/IFixSessionShortInfo";
import IFixSubscription from "../../store/models/IFixSubscription";
import './SessionInfo.sass'


type SessionInfoProps = {
    session: IFixSessionShortInfo,
    subscriptions: IFixSubscription[]
};

function SessionInfo({ session, subscriptions }: SessionInfoProps) {
    return (
        <div className="session__info">
            <div className="session__info_connection">
                <p className="session__info_id">
                    {session.id}
                </p>
                <p className="session__info_addres">
                    fix://{session.connection.host} : {session.connection.port}
                </p>
                <p className="session__info_sender">
                    {session.connection.sender}
                </p>
                <p>{">"}</p>
                <p className="session__info_target">
                    {session.connection.target}
                </p>
            </div>
            <div className="subscription">

            </div>
            {
                subscriptions.map(subscription => <p key={subscription.subscriptionID}>{subscription.subscriptionID}</p>)
            }
        </div>
    )
}


export default SessionInfo