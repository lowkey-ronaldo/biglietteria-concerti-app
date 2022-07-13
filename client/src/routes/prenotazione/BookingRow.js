import { useState, useEffect } from "react";

const BookingRow = (prop) => {
    const { prenotazione } = prop;
    const [modifica, setModifica] = useState(false);
    const [modificaTxt, setModificaTxt] = useState("Modifica");
    const [quantita, setQuantita] = useState(prenotazione.Quantita);

    const modificaHandler = () => {
        if (modifica) {
          setModifica(false);
          setModificaTxt("Modifica");
        } else {
          setModifica(true);
          setModificaTxt("Annulla");
          setQuantita(prenotazione.Quantita);
        }
      }

      const plus = () => {
        setQuantita((quantita) => quantita + 1);
      }
      const minus = () => {
        setQuantita((quantita) =>quantita - 1);
      }

    return <tr>
    <th>{prenotazione.Citta}</th>
    <th>{prenotazione.Luogo}</th>
    <th>{prenotazione.Gruppo}</th>
    <th>{prenotazione.Prezzo}</th>
    <th>{prenotazione.Replica}</th>
    <th>{prenotazione.NomeAzienda}</th>
    <th>{quantita} {modifica && <><button onClick={plus}>+</button><button onClick={minus}>-</button><button>OK</button></>} <button onClick={modificaHandler}>{modificaTxt}</button></th>
  </tr>
}

export default BookingRow;