import React from 'react';
import Card from './card';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { UserContext } from './page';

function priceFormatter(cell, row){
  return '$' + Number(cell).toFixed(2);
}

function Table() {
  const ctx   = React.useContext(UserContext);
  const users = ctx.users;
  return (
    <BootstrapTable
        data={users}
        bodyStyle={{ border: "none" }}
        tableStyle={{ border: "none" }}
        headerStyle={{ border: "none !important" }}
        striped
        version="4"
        height="500"
    >
      <TableHeaderColumn isKey dataField={'name'}>
        Name
      </TableHeaderColumn>
      <TableHeaderColumn dataField={'email'}>
        Email
      </TableHeaderColumn>
      <TableHeaderColumn dataField={'password'}>
        Password
      </TableHeaderColumn>
      <TableHeaderColumn dataField={'balance'} dataFormat={priceFormatter}>
        Balance
      </TableHeaderColumn>
    </BootstrapTable>
  );
}

function AllData(){
  return (
    <>
      <h1>All Data</h1>
      <Card
        txtcolor="black"
        header={'Bad Bank Accounts'}
        body={<Table/>}
      />
    </>
  );
}

export default AllData;