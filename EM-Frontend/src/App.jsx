
import './App.css'
import LoginPage from './pages/LoginPage';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrganizerPage from './pages/OrganizerPage';
import EventPage from './pages/EventPage';
import CustomBadgePage from './pages/CustomizeBadgePage';
import CreateEventPage from './pages/CreateEventPage';

function App() {

  const { user, isAuthenticated } = useAuth0();

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
                  <CustomBadgePage />
            } />
            <Route path='/organizer' element={<OrganizerPage />} />
            <Route path='/speaker' element={<EventPage />} />
            <Route path='/custom-badge' element={<CustomBadgePage />} />
            <Route path='/new-session' element={<CreateEventPage />} />
          </Routes>
        </Router>

      }
    </div>
  )
}

export default App
