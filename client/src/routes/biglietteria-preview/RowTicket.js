import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useState } from "react";
import Axios from "axios";

const RowTicket = (prop) => {
  const [quantity, setQuantity] = useState(0);
  const [bookingText, setBookingText] = useState("Prenota");
  const [booking, setBooking] = useState(false);
  const { ticket } = prop;
  const [errorTxt, setErrorTxt] = useState("Scegli quantità di biglietti");
  const [allBooking, setAllBooking] = useState([]);

  //after he confirm the quantity
  const bookingHandler = async () => {
    //check quantity
    if (quantity < 1 || quantity > ticket.Quantita) {
      setErrorTxt("Quantità non valida!!!!");
    } else {
      //-------------------------------------------
      //write the booking in the database
      console.log("new booking")
      Axios.post("http://localhost:3001/api/insertBook", {
        cliente: localStorage.getItem("id"),
        biglietto: ticket.BigliettoID,
        quantita: quantity,
      }).then(() => {
        console.log("booking inserted");
      });
      
      //update the quantity of the ticket
      const newQuantity = ticket.Quantita - quantity;
      Axios.post("http://localhost:3001/api/updateQuantity", {
        id: ticket.BigliettoID,
        quantita: newQuantity,
      }).then(() => {
        console.log("booking quantity updated");
      });

      window.location.reload(false);
      alert("prenotazione effettuata");
    }
  };

  //change button form to "Prenota" to "Annulla"
  const textHandler = () => {
    if (bookingText === "Prenota") {
      setBooking(true);
      setBookingText("Chiudi");
    } else {
      setBooking(false);
      setBookingText("Prenota");
    }
  };

  return (
    <>
      <tr>
        <td>{ticket.Citta}</td>
        <td>{ticket.Luogo}</td>
        <td>{ticket.Gruppo}</td>
        <td>{ticket.Prezzo}</td>
        <td>{ticket.Quantita}</td>
        <td>{ticket.Replica}</td>
        <td>
          <OverlayTrigger
            trigger="click"
            key="left"
            placement="left"
            overlay={
              <Popover id={`popover-positioned-'left'`}>
                <Popover.Header as="h3">{errorTxt}</Popover.Header>
                <Popover.Body>
                  <input
                    type="number"
                    min="1"
                    max={`${ticket.Quantita}`}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                      setErrorTxt("Scegli quantità di biglietti");
                    }}
                  />
                  <button onClick={bookingHandler}>OK</button>
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant="secondary" onClick={textHandler}>
              {bookingText}
            </Button>
          </OverlayTrigger>
        </td>
      </tr>
    </>
  );
};
export default RowTicket;
