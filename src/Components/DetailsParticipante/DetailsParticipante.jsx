import React from "react";
import { useParams } from "react-router-dom";

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
  {
    id: 4,
    nome: "Elena",
    cognome: "Galli",
    codiceFiscale: "GLLLNE90D22H501X",
    immagineProfilo: "https://randomuser.me/api/portraits/women/4.jpg",
    email: "elena.galli@example.com",
    telefono: "+39 331 234 5678",
  },
  {
    id: 5,
    nome: "Francesco",
    cognome: "Neri",
    codiceFiscale: "NRIFNC88E15H501V",
    immagineProfilo: "https://randomuser.me/api/portraits/men/5.jpg",
    email: "francesco.neri@example.com",
    telefono: "+39 347 654 3210",
  },
  {
    id: 6,
    nome: "Sara",
    cognome: "Fontana",
    codiceFiscale: "FNTNRA95F10H501T",
    immagineProfilo: "https://randomuser.me/api/portraits/women/6.jpg",
    email: "sara.fontana@example.com",
    telefono: "+39 349 987 6543",
  },
  {
    id: 7,
    nome: "Matteo",
    cognome: "Ferrari",
    codiceFiscale: "FRRMTT84G20H501U",
    immagineProfilo: "https://randomuser.me/api/portraits/men/7.jpg",
    email: "matteo.ferrari@example.com",
    telefono: "+39 338 123 4567",
  },
  {
    id: 8,
    nome: "Chiara",
    cognome: "Romano",
    codiceFiscale: "RMNCHR91H30H501S",
    immagineProfilo: "https://randomuser.me/api/portraits/women/8.jpg",
    email: "chiara.romano@example.com",
    telefono: "+39 342 345 6789",
  },
  {
    id: 9,
    nome: "Davide",
    cognome: "Colombo",
    codiceFiscale: "CLMDVD77I05H501Q",
    immagineProfilo: "https://randomuser.me/api/portraits/men/9.jpg",
    email: "davide.colombo@example.com",
    telefono: "+39 336 567 8901",
  },
  {
    id: 10,
    nome: "Laura",
    cognome: "Greco",
    codiceFiscale: "GRCLRA93J15H501P",
    immagineProfilo: "https://randomuser.me/api/portraits/women/10.jpg",
    email: "laura.greco@example.com",
    telefono: "+39 355 678 9012",
  },
  {
    id: 11,
    nome: "Andrea",
    cognome: "Conti",
    codiceFiscale: "CNTNDR82K12H501O",
    immagineProfilo: "https://randomuser.me/api/portraits/men/11.jpg",
    email: "andrea.conti@example.com",
    telefono: "+39 321 456 7890",
  },
  {
    id: 12,
    nome: "Valentina",
    cognome: "Martini",
    codiceFiscale: "MRTVNT89L05H501N",
    immagineProfilo: "https://randomuser.me/api/portraits/women/12.jpg",
    email: "valentina.martini@example.com",
    telefono: "+39 334 123 4567",
  },
  {
    id: 13,
    nome: "Simone",
    cognome: "Moretti",
    codiceFiscale: "MRTSMN85M25H501M",
    immagineProfilo: "https://randomuser.me/api/portraits/men/13.jpg",
    email: "simone.moretti@example.com",
    telefono: "+39 348 234 5678",
  },
  {
    id: 14,
    nome: "Federica",
    cognome: "Pellegrini",
    codiceFiscale: "PLLFDR94N18H501L",
    immagineProfilo: "https://randomuser.me/api/portraits/women/14.jpg",
    email: "federica.pellegrini@example.com",
    telefono: "+39 337 987 6543",
  },
  {
    id: 15,
    nome: "Giorgio",
    cognome: "Lombardi",
    codiceFiscale: "LMBGRG80O09H501K",
    immagineProfilo: "https://randomuser.me/api/portraits/men/15.jpg",
    email: "giorgio.lombardi@example.com",
    telefono: "+39 326 567 8901",
  },
  {
    id: 16,
    nome: "Alessia",
    cognome: "De Luca",
    codiceFiscale: "DLCLSS97P22H501J",
    immagineProfilo: "https://randomuser.me/api/portraits/women/16.jpg",
    email: "alessia.deluca@example.com",
    telefono: "+39 335 678 9012",
  },
  {
    id: 17,
    nome: "Paolo",
    cognome: "Ricci",
    codiceFiscale: "RCCPLL79Q15H501H",
    immagineProfilo: "https://randomuser.me/api/portraits/men/17.jpg",
    email: "paolo.ricci@example.com",
    telefono: "+39 323 456 7890",
  },
  {
    id: 18,
    nome: "Martina",
    cognome: "Esposito",
    codiceFiscale: "SPSMRT98R03H501G",
    immagineProfilo: "https://randomuser.me/api/portraits/women/18.jpg",
    email: "martina.esposito@example.com",
    telefono: "+39 332 234 5678",
  },
  {
    id: 19,
    nome: "Stefano",
    cognome: "Giordano",
    codiceFiscale: "GRDSTF83S14H501F",
    immagineProfilo: "https://randomuser.me/api/portraits/men/19.jpg",
    email: "stefano.giordano@example.com",
    telefono: "+39 329 987 6543",
  },
  {
    id: 20,
    nome: "Ilaria",
    cognome: "Barbieri",
    codiceFiscale: "BRBLRI96T29H501E",
    immagineProfilo: "https://randomuser.me/api/portraits/women/20.jpg",
    email: "ilaria.barbieri@example.com",
    telefono: "+39 346 678 9012",
  },
];

function DetailsPartecipantePage() {
  const { id } = useParams();

  const partecipante = partecipanti.find((p) => p.id === parseInt(id));

  return (
    <div className="container mt-5" style={{ backgroundColor: "#F9EFDB" }}>
      <h2 className="text-center">Dettagli Partecipante</h2>
      {partecipante ? (
        <div className="card my-5 mx-auto" style={{ maxWidth: "900px" }}>
          <div className="row g-0 p-3" style={{ backgroundColor: "#F9EFDB" }}>
            <div className="col-md-4 d-flex justify-content-center align-items-center mb-3 mb-md-0">
              <img
                src={partecipante.immagineProfilo}
                className="img-fluid rounded-circle"
                alt="Immagine Profilo"
                style={{
                  objectFit: "cover",
                  width: "180px",
                  height: "180px",
                }}
              />
            </div>
            <div className="col-md-8 col-12">
              <div className="card-body">
                <h4 className="card-title pb-2">{`${partecipante.nome} ${partecipante.cognome}`}</h4>
                <p className="card-text">
                  <strong>Codice Fiscale:</strong> {partecipante.codiceFiscale}
                </p>
                <p className="card-text">
                  <strong>Email:</strong> {partecipante.email}
                </p>
                <p className="card-text">
                  <strong>Telefono:</strong> {partecipante.telefono}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Partecipante non trovato.</p>
      )}
    </div>
  );
}

export default DetailsPartecipantePage;
