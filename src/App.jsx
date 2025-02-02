import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import DefaultLayout from "./Layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import DetailsParticipantePage from "./pages/DetailsParticipantePage";
import DetailsViaggi from "./pages/DetailsViaggiPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route
            path="DetailsParticipantePage/:id"
            Component={DetailsParticipantePage}
          />
          <Route path="DetailsViaggiPage" Component={DetailsViaggi} />
          <Route path="/contact" Component={Contact} />
          <Route path="/about" Component={About} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
