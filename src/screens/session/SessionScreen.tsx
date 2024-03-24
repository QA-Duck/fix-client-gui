import Sidebar from "../../components/sidebar/Sidebar"
import SessionList from "../../components/session-list/SessionList";

import { useParams } from "react-router-dom";
import SessionWindow from "../../components/session-window/SessionWindow";


function SessionScreen() {

  const { id } = useParams();

  return (
  <>
    <Sidebar>
      <SessionList></SessionList>
    </Sidebar>

    <div id="session-screen">
      { 
        id && <SessionWindow 
          sessionID={id}
        >

        </SessionWindow>
      }
    </div>
  </>
  )
}

export default SessionScreen