import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Artists from './pages/Artists.jsx';
import Admin from './pages/Admin.jsx';
import Player from './pages/Player.jsx';
import Playlists from './pages/Playlists.jsx';
import Layout from "./Layout.jsx";
import "./styles.css";

function App() {

  return (
     <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/artists" element={<Artists/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/player" element={<Player/>}/>        
          <Route path="/" element={<Playlists/>}/>
        </Route>
      </Routes>
     </Router>
  )
} 

export default App;