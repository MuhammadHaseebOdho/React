
import './App.css'
import Profile from './components/Profile'
import Login  from './components/Login'
import UserContextProvider from './contexts/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
