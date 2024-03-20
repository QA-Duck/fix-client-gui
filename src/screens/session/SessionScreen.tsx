import Sidebar from "../../components/sidebar/Sidebar"
import SessionList from "../../components/session-list/SessionList";
import sessionMessageService from "../../store/services/SessionMessageService";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { sessionScreenSlice } from "../../store/reducers/SessionScreenSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";

function SessionScreen() {

  const dispatch = useAppDispatch()

  const { 
    openMessageStream,
    pushMessage 
  } = sessionScreenSlice.actions

  const { id } = useParams();
  const { messages } = useAppSelector(state => state.sessionLogWindowReducers)

  if (id != undefined) {
    sessionMessageService.connect(id, (message: MessageEvent<string>) => {
      dispatch(openMessageStream(id))
      dispatch(pushMessage({
        uuid: id,
        message: message.data
      }))
    })
  }

  useEffect(() => {
    console.log("Conponent was an update")
  }, [messages])

  return (
  <>
    <Sidebar>
      <SessionList></SessionList>
    </Sidebar>

    <div id="session-screen">
      { 
        <div>{id && messages[id].map((e, i) => <p key={i}>{e}</p>)}</div>
      }
    </div>
  </>
  )
}

export default SessionScreen