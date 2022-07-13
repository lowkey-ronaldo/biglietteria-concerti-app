import { useState, useEffect } from "react";
import Axios from "axios";
import Table from 'react-bootstrap/Table';
import BookingRow from "./BookingRow";

const Prenotazione = () => {
  const [prenotazione, setPrenotazione] = useState([]);
  const [prenotazioneFiltrata, setPrenotazioneFiltrata] = useState([]);


  useEffect(() => {
    Axios.get("http://localhost:3001/api/getMyBooking", {
      id: localStorage.getItem("id")
    }).then((response) => {
      setPrenotazione(response.data);
    });
    
  }, []);
  useEffect(() => {
    const mine = prenotazione.filter((p) => 
        p.ClienteID === parseInt(localStorage.getItem("id"))
      )
        setPrenotazioneFiltrata(mine);
        console.log("row: " + JSON.stringify(mine));
  }, [prenotazione]);



  return (
    <>
      <h2>Prenotazioni effettuate</h2>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Città</th>
          <th>Luogo</th>
          <th>Gruppo</th>
          <th>Prezzo</th>
          <th>Replica</th>
          <th>Azienda</th>
          <th>Quantità</th>
        </tr>
      </thead>
      <tbody>
    {prenotazioneFiltrata.map((prenotazione, key) => {
        return  <BookingRow key={key} prenotazione={prenotazione}/>
    })}
      
      </tbody>
    </Table>
    </>
  );
};

export default Prenotazione;
