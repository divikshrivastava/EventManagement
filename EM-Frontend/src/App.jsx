
import './App.css'
import LoginPage from './pages/LoginPage';
import { useAuth0 } from "@auth0/auth0-react";



function App() {

  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  return (
    <div>
      <LoginPage />
      {isLoading &&
        <div>Checking your profile</div>}
      {isAuthenticated ?
        <div>You are Awesome</div> :
        <div>You are Bitch</div>}
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>
    </div>
  )
}

export default App
