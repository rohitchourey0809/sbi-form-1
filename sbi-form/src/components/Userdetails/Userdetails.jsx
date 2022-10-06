import axios from "axios";
import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory,{Type} from "react-bootstrap-table2-editor";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import "bootstrap/dist/css/bootstrap.min.css";

const AllUser = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios("http://localhost:8080/Sbiform").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  const emailFormatter = (data, row) => {
    return <span>{data}</span>;
  };

  //CheckBox
 


  const columns = [
    {
      dataField: "Email",
      text: "EMAIL",
      sort: true,
      editable: false,
     
    },
    {
      dataField: "Username",
      text: "USERNAME",
      sort: true,
     
      filter: textFilter(),
      editable: false,
    },
    {
        dataField: "Mobile",
        text: "MOBILE",
        sort: true,
        
        filter: textFilter(),
        editable: false,
      },
  
  ];
  return (
    <div>
      <h2>React Table</h2>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
     //   pagination={paginationFactory()}
        cellEdit={cellEditFactory({ mode: "click", blurToSave: true })}
        striped
        hover
        condensed
        
        filter={ filterFactory() }
      />
    </div>
  );
};

export default AllUser;
