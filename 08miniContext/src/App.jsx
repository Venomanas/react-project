import React from 'react'
import Profile from "./components/profile";
import Login from './components/login';
import UserContextProvider from './Context/userContextProvider';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>react video for context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App
