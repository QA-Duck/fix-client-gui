import { useState } from 'react';
import './SessionItem.sass'

export interface SessionItemProps {
    name: string;
    list: Array<string>
    isOpen: boolean
};

const SessionItem : React.FC<SessionItemProps> = ({name, list, isOpen}) => {
    
    const [isOpenState, setIsOpen] = useState(isOpen)

    return (
        <div className="session-list__group">
            <div className='session-list__title' onClick={() => { setIsOpen(!isOpenState)}}>
                <i className={isOpenState ? "arrow arrow-down" : "arrow arrow-right"}></i>
                <p>{name}</p> 
            </div>
            <div className="session-list__container">
            <ul className={isOpenState ? "session-list__slider show" : "session-list__slider hide"}>
            {
                list.map(text => 
                    <li key={text}>
                        <div className="circle green"></div>
                        <p>{text}</p>
                    </li>
                )
            }
            </ul>
            </div>
        </div>
    )
}

export default SessionItem