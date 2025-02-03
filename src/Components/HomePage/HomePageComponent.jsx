import React from "react";
import style from "./HomePageComponent.module.css";
import { FaUser } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import trips from "../data/trips"
import upcomingTrips from "../data/upcomingTrips"

function Trip() {
    return (        

        <section className="container p-4">
            <h2 className="text-center p-3">Viaggi in corso</h2>            
            <div className="row">
                {trips.map((trip, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card" style={{ width: "24rem", borderRadius: "10px" }}>
                            <img
                                src={trip.imageUrl}
                                className={`${style.img} img-fluid`}
                                alt={`Viaggio a ${trip.destination}`}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title">{trip.destination}</h5>
                                    {trip.accompanier ? (
                                        <div className="d-flex align-items-center">
                                            <FaUser className="mr-2 m-1" />
                                            <p className="card-text mb-0">
                                                <strong>{trip.accompanier.firstName} {trip.accompanier.lastName}</strong>
                                            </p>
                                        </div>
                                    ) : (
                                        <p className="card-text mb-0">Non assegnato</p>
                                    )}
                                </div>
                                <p className="card-text">
                                    <strong>Data di inizio:</strong> {trip.startDate}
                                </p>
                                <p className="card-text">
                                    <strong>Data di fine:</strong> {trip.endDate}
                                </p>
                                <NavLink to="/ListaPartecipanti" className="btn btn-primary">
                                    Dettaglo clienti
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-center p-3 mt-5">Viaggi in programma</h2>
            <div className="row">
                {upcomingTrips.map((trip, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card" style={{ width: "24rem", borderRadius: "10px" }}>
                            <img
                                src={trip.imageUrl}
                                className={`${style.img} img-fluid`}
                                alt={`Viaggio a ${trip.destination}`}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title">{trip.destination}</h5>
                                    <div className="d-flex align-items-center">
                                        <FaUser className="mr-2 m-1" />
                                        <p className="card-text mb-0">Da assegnare</p>
                                    </div>
                                </div>

                                <p className="card-text">
                                    <strong>Data di inizio:</strong> {trip.startDate}
                                </p>
                                <p className="card-text">
                                    <strong>Data di fine:</strong> {trip.endDate}
                                </p>

                                <NavLink to="/ListaPartecipanti" className="btn btn-primary">
                                    Dettagli Passeggeri
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Trip;
