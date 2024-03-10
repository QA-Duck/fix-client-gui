import './SessionList.sass'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import SessionItem from './session-item/SessionItem'
import { sessionSlice } from '../../store/reducers/SessionSlice'
import { useEffect } from 'react'

function SessionList() {

  const fixSessionGroups = useAppSelector(state => state.sessionReducers)
  const {put} = sessionSlice.actions
  const dispatch = useAppDispatch()

  dispatch(
    put({
      name: "10.10.10.10",
      isOpen: true,
      connections: [{
        id: "wef-wef-efw",
        name: "FIX -> FIX",
        status: false
      }]
    })
  )

  useEffect(() =>{

    console.log(fixSessionGroups)
  }, [fixSessionGroups])

  return (
    <div className="session-list">
      <div className='session-list__tools'>
        <button>New</button>
        <button>Import</button>
      </div>
      {
        Array.from(fixSessionGroups.values()).map(sessionItem => 
          <SessionItem
            key={sessionItem.name} 
            name={sessionItem.name}
            isOpen={sessionItem.isOpen}
            connections={sessionItem.connections} 
          >
          </SessionItem>
        )
      }
    </div>
  )
}

export default SessionList