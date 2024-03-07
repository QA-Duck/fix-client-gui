import './SessionList.sass'
import SessionItem, { SessionItemProps } from './session-item/SessionItem'

function SessionList() {

  let items : Array<SessionItemProps> = [
    {
      "name" : "10.10.10.10",
      "isOpen": false,
      "list" : [
        "ASD",
        "FWF",
        "SDSD"
      ],
    },
    {
      "name" : "10.10.10.qw",
      "isOpen": false,
      "list" : [
        "ASD",
        "FWF",
        "SDSD"
      ],
    },
    {
      "name" : "10.10.10.1we",
      "isOpen": false,
      "list" : [
        "ASD",
        "FWF",
        "SDSD"
      ],
    },
    {
      "name" : "10.10.10.ds",
      "isOpen": false,
      "list" : [
        "ASD",
        "FWF",
        "SDSD"
      ],
    }
  ]

  return (
    <div className="session-list">
      <div className='session-list__tools'>
        <button>New</button>
        <button>Import</button>
      </div>
      {
        items.map(sessionItem => <SessionItem key={sessionItem.name}
            isOpen={sessionItem.isOpen} 
            name={sessionItem.name} 
            list={sessionItem.list}>
          </SessionItem>)
      }
    </div>
  )
}

export default SessionList