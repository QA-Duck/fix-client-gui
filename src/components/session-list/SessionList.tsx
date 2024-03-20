import './SessionList.sass'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'
import { useEffect } from 'react'
import { sessionApi } from '../../store/services/SessionService'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { createSessionModalSlice } from '../../store/reducers/CreateSessionModalSlice'
import ModalWindow from '../modal-window/ModalWindow'
import CreateSessionForm from '../session-form/CreateSessionForm'

function SessionList() {

  const {data: sessions} = sessionApi.useFetchSessionStatusQuery(null)
  const {createSessionModalIsOpen} = useAppSelector(state => state.createSessionModalReducers)
  const {openModal} = createSessionModalSlice.actions
  const dispatcher = useAppDispatch()
  const navigate: NavigateFunction = useNavigate()

  useEffect(() => {}, [createSessionModalIsOpen, sessions])

  return (
    <div className="session-list">
      {
        createSessionModalIsOpen &&
        <ModalWindow>
          <CreateSessionForm></CreateSessionForm>
        </ModalWindow>
      }

      <div className='session-list__tools'>
        <button>import</button>
        <button onClick={() => dispatcher(openModal())}>add</button>
      </div>
          <ul className='session-list__container'>
            { 
              sessions && sessions.map(item => 
                <li 
                key={item.connection_uuid} 
                className='session-list__item'
                onClick={() => navigate("/session/" + item.connection_uuid)}>
                    <p>{item.connection_name}</p>
                    <div className={`circle ${item.connection_status.status == "BROKEN" ? "green" : ""}`}></div>
                </li>
              )
            }
          </ul>
    </div>
  )
}

export default SessionList