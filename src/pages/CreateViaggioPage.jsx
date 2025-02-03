import React from "react";
import CreateViaggio from "./CreateViaggio";

function CreateViaggioPage({ addTrip }) {
  return (
    <section className="container p-4">
      <h2 className="text-center p-3">Crea un Nuovo Viaggio</h2>
      <CreateViaggio addTrip={addTrip} />
    </section>
  );
}

export default CreateViaggioPage;
