import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Artists from './pages/Artists.jsx';
import ArtistsPage from './pages/ArtistsPage.jsx';
import Player from './pages/Player.jsx';
import Playlists from './pages/Playlists.jsx';

function App() {

  return (
     <Router>
      <Routes>
        <Route path="/artists" element={<Artists/>}/>
        <Route path="/artistsPage" element={<ArtistsPage/>}/>
        <Route path="/player" element={<Player/>}/>        
        <Route path="/" element={<Playlists/>}/>
      </Routes>
     </Router>
  )
} 

export default App;