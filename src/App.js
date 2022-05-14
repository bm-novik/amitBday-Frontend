import { Routes, Route } from "react-router-dom"
import {VersionTwo} from "./v2"
import {Rsvp} from "./Rsvp";

function App() {
  return (
    <div >
      <Routes>
          <Route path="/" element={<VersionTwo />} />
          <Route path="rsvp" element={<Rsvp />} />
      </Routes>
    </div>
  );
}

export default App;
