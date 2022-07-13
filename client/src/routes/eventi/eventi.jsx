import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import Axios from "axios";
import TableTicket from "../biglietteria-preview/TableTicket";

const Eventi = () => {
  
  const { category } = useParams();
  const [biglietteriaList, setBiglietteriaList] = useState([]);
  const [bigliettiFiltrati, setBigliettiFiltrati] = useState(biglietteriaList);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/getTicket")
    .then((response) => {
      setBiglietteriaList(response.data);
    });
  }, []);

  useEffect(() => {
    setBigliettiFiltrati(() => {
        return ( biglietteriaList.filter(
            (ticket) => ticket.Citta === category )
        )
    })
  }, [biglietteriaList])

  useEffect(() => {
    console.log(bigliettiFiltrati)
  })


  return (
    <div>
      {bigliettiFiltrati.map((ticket, key) => {
        return (
          <div key={key}>
            { `Concerti a ${category.toUpperCase()}`}
            <TableTicket rows = {bigliettiFiltrati}  />
          </div>
        );
      })}
    </div>
    );
};

export default Eventi;
