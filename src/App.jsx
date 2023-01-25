import './App.css'
import HomePage from './Pages/HomePage'
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {


  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

        </Route>
      </Routes>
    </BrowserRouter> 
    </div>
  )
}

export default App
