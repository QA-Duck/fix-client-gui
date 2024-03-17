import './SessionList.sass'
import './session-item/SessionItem.sass'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { groupListSelector, sessionSlice } from '../../store/reducers/SessionSlice'
import { useEffect } from 'react'

function SessionList() {

  const { toggleSideBar } = sessionSlice.actions
  const fixSessionGroups = useAppSelector(groupListSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {}, [fixSessionGroups])

  return (
    <div className="session-list">
      <div className='session-list__tools'>
        <button>New</button>
        <button>Import</button>
      </div>
      {
        fixSessionGroups.map(item =>  
          <div key={item.name} className="session-list__group">
            <div className='session-list__title' onClick={() => { dispatch(toggleSideBar(item.name)) }} >
                <i className={`arrow ${item.isOpen ? "arrow-down" : "arrow-right"}`}></i>
                <p>{item.name}</p> 
            </div>
            <div className={`session-list__slider ${item.isOpen ? "show" : "hide"}`}>
            <ul>
            {
                item.connections.map(connection => 
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
    </div>
  )
}

export default SessionList