import List from './Components/list/List'
import Detail from './Components/detail/Detail'
import Chat from './Components/chat/Chat'
import SignIn from './Components/auth/signIn/SignIn'
import SignUp from './Components/auth/signUp/SignUp'
import { useState } from 'react'
const App = () => {
  const [auth, setAuth] = useState(true)
  return (
    <div className='container'>
      {auth ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <>
          <SignIn />
          <SignUp />
        </>
      )}
    </div>
  )
}

export default App