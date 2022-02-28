import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from '../../layouts/DefaultLayout'
import './App.css'
import LandingPage from '../default/LandingPage/LandingPage'
import Dashboard from '../dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route element={<DefaultLayout />}>
          <Route exact path='play' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
