import Side from './components/SideBar/Side'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <>
    <Side/>
    <Outlet/>
    </>
  )
}

export default App
