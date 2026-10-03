import {Routes, Route} from "react-router-dom"
import './css/App.css'
import HomePage from './pages/Home.jsx'
import Favourite from "./pages/Favourite.jsx";
import NavBar from "./Components/NavBar"
import {MovieProvider} from './context/MovieContext'


function App() {


  return(
      <MovieProvider>
          <NavBar />
          <main className="main-content">
              <Routes>
                  <Route  path="/" element={<HomePage />} />
                  <Route path='/favourite' element={<Favourite />} />
              </Routes>
          </main>

      </MovieProvider>


  )
}

export default App
