import List from './Components/list/List'
import Detail from './Components/detail/Detail'
import Chat from './Components/chat/Chat'
// commentt
const App = () => {
  return (
    <div className='container'>
      <List />
      <Chat />
      <Detail />
    </div>
  )
}

export default App