import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import DefaultLayout from "./pages/DefaultLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={DefaultLayout}>
          <Route index Component={HomePage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
