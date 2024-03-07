import './App.css'
import { MemoryRouter as Router, Routes, Route} from 'react-router-dom'
import TitleBar from './components/title-bar/TitleBar'
import SideMenu from './components/side-menu/SideMenu'
import WelcomeScreen from './screens/other/WelcomeScreen'
import CreateSessionScreen from './screens/session/CreateSessionScreen'

function App() {

  return (
    <Router>
      <TitleBar></TitleBar>
      <div id='wrapper'>
        <SideMenu></SideMenu>
        <Routes>
          <Route path='/' element={<WelcomeScreen/>}/>
          <Route path='/connections' element={<CreateSessionScreen />} />
          <Route path='/messages' element={<WelcomeScreen />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
