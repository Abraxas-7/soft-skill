import React, { useState } from "react";

function SearchBarComponent() {
  const partecipanti = [
    {
      id: 1,
      nome: "Luca",
      cognome: "Rossi",
      codiceFiscale: "RSSLCU85M01H501Z",
      immagineProfilo: "https://randomuser.me/api/portraits/men/1.jpg",
      email: "luca.rossi@example.com",
      telefono: "+39 320 123 4567",
    },
    {
      id: 2,
      nome: "Giulia",
      cognome: "Bianchi",
      codiceFiscale: "BNCGLI92A45H501Y",
      immagineProfilo: "https://randomuser.me/api/portraits/women/2.jpg",
      email: "giulia.bianchi@example.com",
      telefono: "+39 345 765 4321",
    },
    {
      id: 3,
      nome: "Marco",
      cognome: "Verdi",
      codiceFiscale: "VRDMRC78C12H501W",
      immagineProfilo: "https://randomuser.me/api/portraits/men/3.jpg",
      email: "marco.verdi@example.com",
      telefono: "+39 328 456 7890",
    },
    // altri partecipanti...
  ];

  // Stato per memorizzare il testo della ricerca
  const [searchQuery, setSearchQuery] = useState("");
  // Stato per memorizzare il partecipante trovato
  const [selectedParticipant, setSelectedParticipant] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const [nomeQuery, cognomeQuery] = searchQuery.split(" ");

    const result = partecipanti.find(
      (p) =>
        p.nome.toLowerCase().includes(nomeQuery?.toLowerCase()) &&
        p.cognome.toLowerCase().includes(cognomeQuery?.toLowerCase())
    );

    setSelectedParticipant(result);
  }

  function handleInput(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div>
      <nav className="navbar navbar-light bg-light d-flex">
        <form className="form-inline d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleInput}
            id="search"
            name="search"
            value={searchQuery}
          />
          <button className="btn " type="submit">
            Search
          </button>
        </form>
      </nav>

      {selectedParticipant && (
        <div className="participant-info">
          <h3>
            Dettagli di {selectedParticipant.nome} {selectedParticipant.cognome}
          </h3>
          <img
            src={selectedParticipant.immagineProfilo}
            alt={selectedParticipant.nome}
          />

          <p>Email: {selectedParticipant.email}</p>

          <p>Telefono: {selectedParticipant.telefono}</p>
          <p>Codice Fiscale: {selectedParticipant.codiceFiscale}</p>
        </div>
      )}
    </div>
  );
}

export default SearchBarComponent;
