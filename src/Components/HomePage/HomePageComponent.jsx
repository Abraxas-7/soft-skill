import React from "react";
import style from "./HomePageComponent.module.css";
import { FaUser } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const trips = [
    {
        destination: "Parigi",
        startDate: "2025-02-01",
        endDate: "2025-02-10",
        imageUrl: "/parigi.jpg",
        participants: [
            {
                firstName: "Marco",
                lastName: "Rossi",
                email: "marco.rossi@email.com",
                phone: "+39 123 456 7890",
                fiscalCode: "RSSMRC85M01H501Z",
            },
            {
                firstName: "Anna",
                lastName: "Bianchi",
                email: "anna.bianchi@email.com",
                phone: "+39 098 765 4321",
                fiscalCode: "BNCHNA75P45D325V",
            },
        ],
        accompanier: {
            firstName: "Giovanni",
            lastName: "Gialli",
            email: "giovanni.gialli@email.com",
        },
    },
    {
        destination: "Roma",
        startDate: "2025-03-01",
        endDate: "2025-03-07",
        imageUrl: "/roma.jpg",
        participants: [
            {
                firstName: "Luca",
                lastName: "Verdi",
                email: "luca.verdi@email.com",
                phone: "+39 234 567 8901",
                fiscalCode: "VRDLCA90A01H123Z",
            },
        ],
        accompanier: {
            firstName: "Francesca",
            lastName: "Blu",
            email: "francesca.blu@email.com",
        },
    },
    {
        destination: "Londra",
        startDate: "2025-04-15",
        endDate: "2025-04-20",
        imageUrl: "/londra.jpg",
        participants: [
            {
                firstName: "Giulia",
                lastName: "Neri",
                email: "giulia.neri@email.com",
                phone: "+39 456 789 0123",
                fiscalCode: "NRIGLA75T47A112W",
            },
        ],
        accompanier: {
            firstName: "Alessandro",
            lastName: "Gialli",
            email: "alessandro.gialli@email.com",
        },
    },
];


function Trip() {
    return (
        <section className="container">
            <h2 className="text-center p-3">Viaggi in corso</h2>
            <div className="row">
                {trips.map((trip, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card" style={{ width: "24rem", borderRadius: "10px" }}>
                            <img src={trip.imageUrl} className={style.img} alt="..." />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title">{trip.destination}</h5>
                                    <div className="d-flex align-items-center">
                                        <FaUser className="mr-2 m-1" />
                                        <p className="card-text mb-0">
                                            <strong>{trip.accompanier.firstName} {trip.accompanier.lastName}</strong>
                                        </p>
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
