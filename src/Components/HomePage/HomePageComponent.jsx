import React from "react";

const trips = [
    {
        destination: "Parigi",
        startDate: "2025-02-01",
        endDate: "2025-02-10",
        imageUrl: "", 
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
    },
    {
        destination: "Roma",
        startDate: "2025-03-01",
        endDate: "2025-03-07",
        imageUrl: "",
        participants: [
            {
                firstName: "Luca",
                lastName: "Verdi",
                email: "luca.verdi@email.com",
                phone: "+39 234 567 8901",
                fiscalCode: "VRDLCA90A01H123Z",
            },
        ],
    },
    {
        destination: "Londra",
        startDate: "2025-04-15",
        endDate: "2025-04-20",
        imageUrl: "",
        participants: [
            {
                firstName: "Giulia",
                lastName: "Neri",
                email: "giulia.neri@email.com",
                phone: "+39 456 789 0123",
                fiscalCode: "NRIGLA75T47A112W",
            },
        ],
    },
];

function Trip() {
    return (
        <section className="container">
            <h2>Viaggi in corso</h2>
            <div className="row">
                {trips.map((trip, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={trip.imageUrl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{trip.destination}</h5>
                                <p className="card-text">
                                    <strong>Data di inizio:</strong> {trip.startDate}
                                </p>
                                <p className="card-text">
                                    <strong>Data di fine:</strong> {trip.endDate}
                                </p>
                                <a href="#" className="btn btn-primary">
                                    Dettagli Passeggeri
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Trip;
