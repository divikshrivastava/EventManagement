
import './App.css'
import LoginPage from './pages/LoginPage';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrganizerPage from './pages/OrganizerPage';
import EventPage from './pages/EventPage';

function App() {

  const { user, isAuthenticated, logout } = useAuth0();

  console.log("Users details")
  console.log(user)

  isAuthenticated && console.log(user['https://eventplan/roles'].includes('organizer'))

  return (
    <div style={{ 'padding': "3rem" }}>
      {
        !isAuthenticated && <LoginPage />
      }
      {
        isAuthenticated &&
        <Router>
          <Routes>
            <Route path="/" element={
              user['https://eventplan/roles'].includes('organizer') ? <OrganizerPage /> :
                user['https://eventplan/roles'].includes('speaker') ? <EventPage /> :
                  <button onClick={logout}>Lougout</button>
            } />
          </Routes>
        </Router>

      }
    </div>
  )
}

export default App
