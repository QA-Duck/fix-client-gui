import { Router, Route } from 'electron-router-dom'

import WelcomeScreen from './screens/other/WelcomeScreen'
import CreateSessionScreen from './screens/session/CreateSessionScreen'

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/connections" element={<CreateSessionScreen />} />
        </>
      }
    />
  )
}