
import sessionMessageService from "../../store/services/SessionMessageService";

import { useEffect } from "react";
import { sessionScreenSlice } from "../../store/reducers/SessionScreenSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { subscriptionsApi } from "../../store/services/SubscriptionService";


type SessionWindowProps = {
    sessionID: string
}


function SessionWindow({sessionID}: SessionWindowProps) {

    const dispatch = useAppDispatch()

    const { data } = subscriptionsApi.useFetchSessionSubscriptionsQuery(sessionID ? sessionID : "")
    const subscriptionID = data ? data[0].subscriptionID : ""

    console.log(subscriptionID)
    console.log(sessionID)
  

    const { openMessageStream, pushMessage } = sessionScreenSlice.actions
    
    const { messages } = useAppSelector(state => state.sessionLogWindowReducers)

  
    useEffect(() => {
      console.log("Conponent was an update")
    }, [messages])

    return (
        <>
            <p>SubscriptionID {sessionID}</p>
            <p>SessionID {subscriptionID}</p>
            <button onClick={() => {
                sessionMessageService.connect(subscriptionID, (message: MessageEvent<string>) => {
                    const messageData = {
                        uuid: subscriptionID,
                        message: message.data
                    }
                    dispatch(openMessageStream(subscriptionID))
                    dispatch(pushMessage(messageData))
                })
            }}
            >Start listen</button>        
            <div>{subscriptionID && messages[subscriptionID].map((e, i) => <p key={i}>{e}</p>)}</div>
        </>
    );
}


export default SessionWindow