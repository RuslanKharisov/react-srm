import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { urlApi } from "../constants";

const Edit = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [status, setStatus] = useState("new");
  const [date, setDate] = useState("");
  const [request, setRequest] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect");
    fetch(urlApi + "/" + id)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setRequest(data);
        setName(data.name);
        setPhone(data.phone);
        setEmail(data.email);
        setProduct(data.product);
        setStatus(data.status);
        setDate(data.date);
      });
  }, []);

  const saveChanges = (e) => {
    e.preventDefault();
    const data = { ...request, product, status, phone, email, name };

    fetch(urlApi + "/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        navigate("/");
      });
  };

  const deleteRequest = () => {
    fetch(urlApi + "/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="form-wrapper">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col">
            <div className="admin-heading-1">Работа с заявкой</div>
          </div>
          <div className="col text-right">
            <Link to="/" className="btn btn-link">
              Вернуться назад
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form onSubmit={saveChanges}>
              <div className="card mb-4">
                <div className="card-header">Данные о заявке</div>
                {name && (
                  <div className="card-body">
                    <div className="row mb-3">
                      <div className="col-md-2">
                        <strong>ID:</strong>
                      </div>
                      <div className="col">
                        Заявка №<span id="number">{id}</span>
                      </div>
                      <input name="id" type="hidden" id={id} />
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-2">
                        <strong>Дата создания: </strong>
                      </div>
                      <div className="col" id="date">
                        {date}
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-2">
                        <strong>Продукт:</strong>
                      </div>
                      <div className="col">
                        <select
                          onChange={(e) => {
                            setProduct(e.target.value);
                          }}
                          id="product"
                          name="product"
                          className="custom-select"
                          value={product}
                        >
                          <option value="course-html">Курс по верстке</option>
                          <option value="course-js">Курс по JavaScript</option>
                          <option value="course-vue">Курс по VUE JS</option>
                          <option value="course-php">Курс по PHP</option>
                          <option value="course-wordpress">
                            Курс по WordPress
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-2">
                        <strong>Имя:</strong>
                      </div>
                      <div className="col">
                        <input
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          type="text"
                          className="form-control"
                          value={name}
                          name="name"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-2">
                        <strong>Email:</strong>
                      </div>
                      <div className="col">
                        <input
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          type="text"
                          className="form-control"
                          value={email}
                          id="email"
                          name="email"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-2">
                        <strong>Телефон:</strong>
                      </div>
                      <div className="col">
                        <input
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                          type="text"
                          className="form-control"
                          value={phone}
                          id="phone"
                          name="phone"
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-2">
                        <strong>Статус заявки:</strong>
                      </div>
                      <div className="col">
                        <select
                          onChange={(e) => {
                            setStatus(e.target.value);
                          }}
                          className="custom-select"
                          id="status"
                          name="status"
                          value={status}
                        >
                          <option selected="">Выберите...</option>
                          <option value="new">Новая</option>
                          <option value="inwork">В работе</option>
                          <option value="complete">Завершена</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="row justify-content-between">
                <div className="col text-right">
                  <button className="btn btn-primary">
                    Сохранить изменения
                  </button>
                </div>
              </div>
            </form>

            <div className="row justify-content-between pt-20">
              <div className="col text-right">
                <button
                  onClick={() => {
                    deleteRequest();
                  }}
                  className="btn btn-danger"
                >
                  Удалить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
