import sessionMessageService from "../../store/services/SessionMessageService";

import { useEffect } from "react";
import { sessionScreenSlice } from "../../store/reducers/SessionScreenSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { subscriptionsApi } from "../../store/services/SubscriptionService";
import { sessionApi } from "../../store/services/SessionService";
import SessionInfo from "./SessionInfo";

type SessionWindowProps = {
  sessionID: string;
};

function SessionWindow({ sessionID }: SessionWindowProps) {
  const dispatch = useAppDispatch();

  const { openMessageStream, pushMessage } = sessionScreenSlice.actions;
  const { messages } = useAppSelector((state) => state.sessionLogWindowReducers);
  const sessionQuery = sessionApi.useFetchSessionStatusByIDQuery(sessionID)
  const subscriptionQuery = subscriptionsApi.useFetchSessionSubscriptionsQuery(sessionID);
  const successRequests = sessionQuery.isSuccess && subscriptionQuery.isSuccess

  useEffect(() => {
    console.log("Conponent was an update");
    console.log(messages)
  }, [messages]);

  return (
    <div id="session__window">
        {
            successRequests && <SessionInfo
                session={sessionQuery.data}
                subscriptions={subscriptionQuery.data}
            >
            </SessionInfo>
        }
        {
            successRequests && <button
                className="subscription__btn"
                onClick={() => {
                  sessionMessageService.connect(
                      subscriptionQuery.data[0].subscriptionID, (message: MessageEvent<string>) => {
                        const messageData = {
                            uuid: subscriptionQuery.data[0].subscriptionID,
                            message: message.data,
                        };
                        dispatch(openMessageStream(subscriptionQuery.data[0].subscriptionID));
                        dispatch(pushMessage(messageData));
                      }
                  );
                }}
            >
            Start listen
            </button>
        }
    </div>
  );
}

export default SessionWindow;
