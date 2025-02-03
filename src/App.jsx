import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DefaultLayout from "./Layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import DetailsParticipantePage from "./pages/DetailsParticipantePage";
import DetailsViaggiPage from "./pages/DetailsViaggiPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route
            path="/DetailsParticipantePage"
            Component={DetailsParticipantePage}
          />
          <Route path="/DetailsViaggiPage" Component={DetailsViaggiPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
