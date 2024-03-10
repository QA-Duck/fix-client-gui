import IFixSessionGroup from '../../../models/IFixSessionGroup'
import { sessionSlice } from '../../../store/reducers/SessionSlice'
import './SessionItem.sass'


function SessionItem ({
    name,
    isOpen,
    connections,
}: IFixSessionGroup) {

    const {toggleSideBar} = sessionSlice.actions

    return (
        <div className="session-list__group">
            <div className='session-list__title' onClick={() => { toggleSideBar(name) }} >
                <i className={`arrow ${isOpen ? "arrow-down" : "arrow-right"}`}></i>
                <p>{name}</p> 
            </div>
            <div className={`session-list__slider ${isOpen ? "show" : "hide"}`}>
            <ul className="">
            {
                connections.map(connection => 
                    <li key={connection.id}>
                        <div className="circle green"></div>
                        <p>{connection.name}</p>
                    </li>
                )
            }
            </ul>
            </div>
        </div>
    )
}

export default SessionItem