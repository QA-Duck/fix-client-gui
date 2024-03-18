import { useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar"

function SessionScreen() {

  const {id} = useParams();
  
  return (
  <>
    <Sidebar></Sidebar>
    <div id="session-screen">
      <p>{id}</p>
    </div>
  </>
  )
}

export default SessionScreen