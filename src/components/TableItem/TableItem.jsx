import { useState } from "react";
import { Link } from "react-router-dom";
import { statusList, productList, statusBackGround } from "../constants";

const TableItem = ({ request }) => {
  const [list, setList] = useState(request);

  // const applyFilters = ()=> {
  //     let updatedList = request;
  // }

  const { id, name, phone, email, product, date, status } = request;

  let bg = "badge badge-pill ";

  const productTitle = (item) => {
    let product = productList.filter((el) => {
      if (el.value == item) {
        return true;
      }
    });
    return product[0].title;
  };

  const statustTitle = (item) => {
    let status = statusList.filter((el) => {
      if (el.value == item) {
        return true;
      }
    });
    return status[0].title;
  };

  const styleType = (item) => {
    let bg = " badge badge-pill ";
    let backGround = statusBackGround.filter((el) => {
      if (el.value == item) {
        return true;
      }
    });
    return backGround[0].style + bg;
  };

  return (
    <tr key={id}>
      <th scope="row">{id}</th>
      <td>{date}</td>
      <td>{productTitle(product)}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>+{phone}</td>
      <td>
        <div className={styleType(status)}>{statustTitle(status)}</div>
      </td>
      <td>
        <Link to={`/edit/${id}`} request={request}>
          {" "}
          Редактировать
        </Link>
      </td>
    </tr>
  );
};

export default TableItem;

// badge badge-pill bg-danger
