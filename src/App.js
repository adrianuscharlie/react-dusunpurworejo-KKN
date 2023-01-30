import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import Kegiatan from './pages/Kegiatan';
import KKN from './pages/KKN';
import Struktur from './pages/Struktur';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='kegiatan' element={<Kegiatan/>}/>
          <Route path='struktur' element={<Struktur/>}/>  
          <Route path='kkn' element={<KKN/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
