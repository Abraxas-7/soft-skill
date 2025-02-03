import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa"; // Icona utente per l'accompagnatore
import { NavLink } from "react-router-dom"; // Importa NavLink per il pulsante Dettaglio

const HomePageComponent = () => {
  const [trips, setTrips] = useState([]);

  // Recupera i viaggi dal localStorage all'inizio
  useEffect(() => {
    const savedTrips = JSON.parse(localStorage.getItem("trips")) || [];
    setTrips(savedTrips);
  }, []);

  // Funzione per eliminare un viaggio
  const deleteTrip = (indexToDelete) => {
    // Rimuovi il viaggio dallo stato usando l'indice
    const updatedTrips = trips.filter((_, index) => index !== indexToDelete);

    // Aggiorna lo stato dei viaggi
    setTrips(updatedTrips);

    // Salva i viaggi aggiornati nel localStorage
    localStorage.setItem("trips", JSON.stringify(updatedTrips));
  };

  return (
    <section className="container p-4">
      <h2 className="text-center p-3">Viaggi in corso</h2>

      <div className="row">
        {trips.map((trip, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card"
              style={{
                width: "24rem",
                borderRadius: "10px",
                border: "1px solid #ddd", // Aggiungi il bordo
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Aggiungi ombra
              }}
            >
              <img
                src={trip.imageUrl}
                className="img-fluid"
                alt={`Viaggio a ${trip.destinazione}`}
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px 10px 0 0",
                }} // Immagine con bordo arrotondato
              />
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title">{trip.destinazione}</h5>
                  {trip.accompagnatore ? (
                    <div className="d-flex align-items-center">
                      <FaUser className="mr-2" />
                      <p className="card-text mb-0">
                        <strong>{trip.accompagnatore}</strong>
                      </p>
                    </div>
                  ) : (
                    <p className="card-text mb-0">
                      Accompagnatore non assegnato
                    </p>
                  )}
                </div>
                <p className="card-text">
                  <strong>Data di inizio:</strong> {trip.startDate}
                </p>
                <p className="card-text">
                  <strong>Data di fine:</strong> {trip.endDate}
                </p>

                {/* Pulsante Dettaglio */}
                <NavLink
                  to="/DetailsViaggiPage"
                  className="btn btn-light border"
                >
                  Dettaglio clienti
                </NavLink>

                {/* Pulsante Elimina */}
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => deleteTrip(index)}
                >
                  Elimina viaggio
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePageComponent;
