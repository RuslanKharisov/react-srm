import { useState, useEffect, createContext } from "react";
import LeftNavPanel from "../LeftNavPanel/LeftNavPanel";
import TopNavPanel from "../TopNavPanel/TopNavPanel";
import Request from "../TableItem/TableItem";
import { urlApi } from "../constants";

export const AppContext = createContext(null);

const Table = () => {
  const [table, setTable] = useState(null);
  const [toggleStatus, setToggleStatus] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState("all");

  //GET /products?status=new&product=course-js

  useEffect(() => {
    console.log("fetch");
    fetch(`${urlApi}?${applyFilters()}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setTable(data);
      });
  }, [selectedProduct, selectedStatus]);

  const applyFilters = () => {
    let request;
    let product = "";
    let status = "";
    if (selectedProduct !== "all") {
      product = `&product=${selectedProduct}`;
    }
    if (selectedStatus !== "all") {
      status = `status=${selectedStatus}`;
    }
    request = status + product;
    // console.log(request);
    return request;
  };

  const requests = () => {
    if (table) {
      return table.map((rqst) => {
        // console.log(rqst);
        return <Request request={rqst} key={rqst.id} />;
      });
    }
  };

  return (
    <>
      {/* Side bar filter panel */}
      <LeftNavPanel
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />

      {/* Main page */}
      <div className="main-wrapper">
        <div className="container-table">
          <div className="admin-heading-1">Все заявки</div>
          {/* Main page filter tabs */}
          <TopNavPanel
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />

          {/* Table header */}
          <table className="table fs-14">
            <thead>
              <tr>
                <th>ID</th>
                <th>дата</th>
                <th>продукт</th>
                <th>имя</th>
                <th>email</th>
                <th>телефон</th>
                <th>статус</th>
                <th></th>
              </tr>
            </thead>
            {/* List &  */}
            <tbody id="tbody">{table && requests()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
