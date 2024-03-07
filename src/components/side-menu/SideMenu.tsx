import './SideMenu.sass'
import ConnectionsImage from '../../assets/side-menu-icons/Connections.png'
import TemplateImage from '../../assets/side-menu-icons/Template.png'
import DictionaryImage from '../../assets/side-menu-icons/dictionary.png'
import { NavigateFunction, useNavigate } from 'react-router-dom'


function SideMenu() {
  const navigate: NavigateFunction = useNavigate()
  
  return (
    <div id="side-menu">
      <ul>
        <li className="side-menu__item" onClick={() => navigate("/connections")}>
            <img onDragStart={(e) => {e.preventDefault()}} src={ConnectionsImage} alt="" />
            <p>Connections</p>
        </li>
        <li className="side-menu__item" onClick={() => navigate("/messages")}> 
          <img onDragStart={(e) => {e.preventDefault();}} src={TemplateImage} alt="" />
          <p>Messages</p>
        </li>
        <li className="side-menu__item"> 
          <img onDragStart={(e) => {e.preventDefault();}} src={DictionaryImage} alt="" />
          <p>Dictionaries</p>
        </li>
      </ul>
    </div>
  )
}

export default SideMenu