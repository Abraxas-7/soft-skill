import React from "react";

import ListaPartecipanti from "./ListaPartecipanti";

function DetailsViaggi() {
  return (
    <div className="container py-5">
      <div>
        <h1>Dettaglio sul viaggio</h1>
      </div>

      <ListaPartecipanti />
    </div>
  );
}

export default DetailsViaggi;
