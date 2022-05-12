import { Routes, Route } from "react-router-dom"
import {VersionTwo} from "./v2"

function App() {
  return (
    <div >
      <Routes>
          <Route path="/" element={<VersionTwo />} />
      </Routes>
    </div>
  );
}

export default App;
