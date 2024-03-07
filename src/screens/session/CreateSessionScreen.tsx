import Sidebar from "../../components/sidebar/Sidebar"
import './CreateSessionScreen.sass'

function CreateSessionScreen() {

  return (
  <>
    <Sidebar></Sidebar>
    <div id="create-session-screen">
      <h1 className="screen-title">Create session</h1>

      <form id="create-session-form" action="">
        <input type="text" name="senderCompId" />
        <input type="text" name="targetCompId" />
        <input type="text" name="socketConnectionHost" />
        <input type="number" name="socketConnectionPort" />
        <button>
          Submit
        </button>
      </form>


    </div>
  </>
  )
}

export default CreateSessionScreen