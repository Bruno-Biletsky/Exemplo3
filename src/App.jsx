import Nav from "./components/nav"
import Footer from "./components/footer"
import {Outlet} from 'react-router-dom'

function App() {
  

  return (
    <>
      <Nav/>
      {/*Chamar todos componentes filho*/}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
