import './SessionList.sass'
import { useAppSelector } from '../../hooks/redux'
import { groupListSelector} from '../../store/reducers/SessionSlice'
import { useEffect } from 'react'
import { sessionApi } from '../../store/services/SessionService'
import { NavigateFunction, useNavigate } from 'react-router-dom'

function SessionList() {

  const {data: sessions} = sessionApi.useFetchSessionStatusQuery(null)
  const fixSessionGroups = useAppSelector(groupListSelector)
  const navigate: NavigateFunction = useNavigate()

  useEffect(() => {}, [fixSessionGroups])
  

  return (
    <div className="session-list">
      <div className='session-list__tools'>
        <button>import</button>
        <button>add</button>
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