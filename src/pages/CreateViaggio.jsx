import React, { useState } from "react";

function CreateViaggio({ addTrip }) {
  // Stato per raccogliere i dati del form
  const [formData, setFormData] = useState({
    destinazione: "",
    accompagnatore: "",
    startDate: "",
    endDate: "",
    imageUrl: "", // Aggiungiamo il campo immagine
  });

  // Funzione per gestire il cambiamento nei campi del form
  function handleInputChange(e) {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  }

  // Funzione per gestire il submit del form
  function handleSubmit(e) {
    e.preventDefault();
    const tripWithAccompagnatore = {
      ...formData,
      accompagnatore: formData.accompagnatore || null, // Se non c'è accompagnatore, mettiamo null
    };
    addTrip(tripWithAccompagnatore); // Aggiungi il nuovo viaggio
    setFormData({
      destinazione: "",
      accompagnatore: "",
      startDate: "",
      endDate: "",
      imageUrl: "", // Reset anche il campo immagine
    }); // Reset form
  }

  return (
    <form className="row gy-2 gx-3 align-items-center" onSubmit={handleSubmit}>
      <div className="col-auto">
        <label htmlFor="destinazione">Destinazione</label>
        <input
          type="text"
          className="form-control"
          id="destinazione"
          value={formData.destinazione}
          onChange={handleInputChange}
          placeholder="Destinazione"
        />
      </div>
      <div className="col-auto">
        <label htmlFor="accompagnatore">Accompagnatore</label>
        <input
          type="text"
          className="form-control"
          id="accompagnatore"
          value={formData.accompagnatore}
          onChange={handleInputChange}
          placeholder="Accompagnatore"
        />
      </div>
      <div className="col-auto">
        <label htmlFor="startDate">Data di inizio</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          value={formData.startDate}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-auto">
        <label htmlFor="endDate">Data di fine</label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          value={formData.endDate}
          onChange={handleInputChange}
        />
      </div>

      {/* Campo immagine */}
      <div className="col-auto">
        <label htmlFor="imageUrl">URL immagine</label>
        <input
          type="text"
          className="form-control"
          id="imageUrl"
          value={formData.imageUrl}
          onChange={handleInputChange}
          placeholder="URL immagine del viaggio"
        />
      </div>

      <div className="col-auto">
        <button type="submit" className="btn btn-primary">
          Creare viaggio
        </button>
      </div>
    </form>
  );
}

export default CreateViaggio;
