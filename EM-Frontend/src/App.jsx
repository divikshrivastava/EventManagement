
import './App.css'
import LoginPage from './pages/LoginPage';
import { useAuth0 } from "@auth0/auth0-react";
import OrganizerPage from './pages/OrganizerPage';
import EventPage from './pages/EventPage';



function App() {

  const { user, isAuthenticated, isLoading, logout, getAccessTokenSilently } = useAuth0();


  console.log(user)

  isAuthenticated && getAccessTokenSilently().then(res => console.log(res))

  return (
    <div style={{'padding' : "3rem"}}>
      {
        !isAuthenticated && <LoginPage />
      }
      {
        isAuthenticated && <EventPage />
      }
    </div>
  )
}

export default App
