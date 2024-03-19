import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar"
import SessionList from "../../components/session-list/SessionList";
import LogWindow from "../../components/log-window/LogWindow";
import { sessionLogWindowSlice } from "../../store/reducers/LogMessageSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { useEffect } from "react";

function SessionScreen() {

  const {id} = useParams();
  const {clients} = useAppSelector(state => state.sessionLogWindowReducers)
  const {pushMessage} = sessionLogWindowSlice.actions
  const dispatch = useAppDispatch()

  if (id != undefined) {
    let eventSource = new EventSource("http://localhost:8080/sessions/"+id+"/stream-flux");

    eventSource.onmessage = function(event: MessageEvent<string>) {
        console.log(event.data)
        dispatch(pushMessage({client_uuid: id, message: event.data}))
    };

    eventSource.onerror = function(error) {
      console.log(error)
    }
  }

  const messages =  clients.find(client => client.client_uuid == id)?.messages

  useEffect(() => {
    console.log("ID: " + id)

  }, [messages])

  const elements = messages && messages.map(e => <p>{e}</p>)

  const logs = () => {
    if (elements != undefined) {
      return <LogWindow>{elements}</LogWindow>
    }
  }
  
  return (
  <>
    <Sidebar>
      <SessionList></SessionList>
    </Sidebar>
    <div id="session-screen">
      { 
        logs()
      }
    </div>
  </>
  )
}

export default SessionScreen