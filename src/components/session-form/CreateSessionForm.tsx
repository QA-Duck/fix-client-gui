import { useAppDispatch } from "../../store/hooks/redux"
import { createSessionModalSlice } from "../../store/reducers/CreateSessionModalSlice"
import "./CreateSessionForm.sass"

function CreateSessionForm() {

    const {closeModal} = createSessionModalSlice.actions
    const dispatcher = useAppDispatch()

    return (
        <div id="create-session-window">
            <button onClick={()=> dispatcher(closeModal())} className="window-close">x</button>
            <h1 className="screen-title">Create session</h1>
            <form id="create-session-form" action="">
                <label>Sender</label>
                <input type="text" name="senderCompId" />
                <label>Target</label>
                <input type="text" name="targetCompId" />
                <label>Host</label>
                <input type="text" name="socketConnectionHost" />
                <label>Port</label>
                <input type="number" name="socketConnectionPort" />
                <button> Submit </button>
            </form>
        </div>
    )
}

export default CreateSessionForm