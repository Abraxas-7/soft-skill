import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import DefaultLayout from "./Layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import DetailsParticipantePage from "./pages/DetailsParticipantePage";
import DetailsViaggi from "./pages/DetailsViaggiPage";
import Contact from "./pages/Contact";
import CreateViaggio from "./pages/CreateViaggio";
import { useState, useEffect } from "react";

function App() {
  const [trips, setTrips] = useState([]);

  // Funzione per aggiungere un viaggio
  const addTrip = (newTrip) => {
    setTrips((prevTrips) => {
      const updatedTrips = [...prevTrips, newTrip];
      localStorage.setItem("trips", JSON.stringify(updatedTrips)); // Salva nel localStorage
      return updatedTrips;
    });
  };

  // Carica i viaggi dal localStorage all'avvio dell'app
  useEffect(() => {
    const savedTrips = JSON.parse(localStorage.getItem("trips")) || [];
    setTrips(savedTrips);
  }, []);

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
          <Route
            path="/CreateViaggio"
            Component={() => <CreateViaggio addTrip={addTrip} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
