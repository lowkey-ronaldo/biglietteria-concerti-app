import Table from 'react-bootstrap/Table';

import { useState } from "react";
import RowTicket from './RowTicket';

const TableTicket = (prop) => {
    const { rows } = prop;
    return (
        <>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Città</th>
          <th>Indirizzo</th>
          <th>Artista</th>
          <th>Prezzo</th>
          <th>Biglietti rimasti</th>
          <th>Data Replica</th>
          <th>Prenota ora</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((ticket, key) => {
           return <RowTicket ticket={ticket} key={key}/>
        })}
        <tr>
          </tr>
      </tbody>
    </Table>
        </>
    );
}

export default TableTicket;