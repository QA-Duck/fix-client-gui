import Sidebar from "../../components/sidebar/Sidebar"
import SessionList from "../../components/session-list/SessionList";

import { useParams } from "react-router-dom";
import SessionWindow from "../../components/session-window/SessionWindow";

import './SessionScreen.sass'
import { sessionApi } from "../../store/services/SessionService";


function SessionScreen() {

  const { id } = useParams();
  const {data: sessions} = sessionApi.useFetchSessionStatusQuery(null)

  return (
  <>
    <Sidebar>
      <SessionList></SessionList>
    </Sidebar>

    <div id="session-screen">
      { 
        id && <SessionWindow sessionID={id}>
        </SessionWindow>
      }
    </div>
  </>
  )
}

export default SessionScreen