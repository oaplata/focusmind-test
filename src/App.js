import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Preferences from './views/Preference'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </div>
  );
}

export default App;
