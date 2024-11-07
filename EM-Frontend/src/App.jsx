
import './App.css'
import LoginPage from './pages/LoginPage';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrganizerPage from './pages/OrganizerPage';
import EventPage from './pages/EventPage';
import CustomBadgePage from './pages/CustomizeBadgePage';
import CreateEventPage from './pages/CreateEventPage';
import AttendeePortal from './pages/SessionCheckinPage';

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
            <Route path='/custombadge' element={<CustomBadgePage />} />
            <Route path='/newses' element={<CreateEventPage />} />
            <Route path='/attendee' element={<AttendeePortal />} />
          </Routes>
        </Router>

      }
    </div>
  )
}

export default App
