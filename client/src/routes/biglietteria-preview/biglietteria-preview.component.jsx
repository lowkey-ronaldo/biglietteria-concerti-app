import { useState, useEffect } from "react";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import TableTicket from "./TableTicket";

const BiglietteriaPreview = () => {

  const [biglietteriaList, setBiglietteriaList] = useState([]);
  const [cityIsSelected, setCityIsSelected] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/getTicket").then((response) => {
      setBiglietteriaList(response.data);
    });
  }, []);
  //console.log("biglietteriaList: ", biglietteriaList);

  const showTicket = (e) => {
    const city = e.target.value;
    if (e.target.value !== "Città") {
      const filtered = biglietteriaList.filter(
        (ticket) => ticket.Citta === city
      );
      //console.log("filtered: ", filtered);
      setCityIsSelected(true);
      setFilteredTickets(filtered);
    }else{
        setCityIsSelected(false);
    }
    //console.log("filteredTicket: ", filteredTickets);

  };

    return(
        <>
      <Form.Group className="mb-3">
        <Form.Label>Seleziona una città disponibile</Form.Label>
        <Form.Select onChange={showTicket}>
          <option>Città</option>
          {biglietteriaList.map((biglietteria, key) => {
            return <option key={key}>{biglietteria.Citta}</option>;
          })}
        </Form.Select>
      </Form.Group>

      { cityIsSelected && <TableTicket rows={filteredTickets}/>
      }
    </>

    )
} 

export default BiglietteriaPreview;