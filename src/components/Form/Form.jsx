import { useState } from "react";
import { urlApi } from "../constants";

const Form = () => {
  const [name, setName] = useState("Вася Иванов");
  const [phone, setPhone] = useState("+79745862178");
  const [email, setEmail] = useState("gosha@zz.com");
  const [product, setProduct] = useState("course-html");
  // const [fetchData, setFetchData] = useState(true)

  const putToState = (e) => {
    e.preventDefault();
    const status = "new";
    const date = new Date();
    const id = 0;

    const newRequest = { id, name, phone, email, product, status, date };

    fetch(urlApi, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRequest),
    }).then(() => {
      alert("New request was added!");
    });
  };

  return (
    <div className="form-wrapper radial-bg flex-center">
      <div className="white-plate white-plate--payment">
        <div className="container-fluid">
          <div className="white-plate__header text-center">
            <p className="white-plate__logo">
              <span>Форма</span> заявок
            </p>
          </div>

          <div className="white-plate__line-between white-plate__line-between--main"></div>

          <form id="form" onSubmit={putToState}>
            <label>Ваши данные:</label>
            <div className="form-group">
              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="name"
                className="form-control"
                placeholder="Имя и Фамилия"
                value={name}
                required
              />
            </div>
            <div className="form-group">
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                id="phone"
                type="text"
                name="phone"
                autoComplete="on"
                className="form-control"
                placeholder="Телефон"
                value={phone}
              />
            </div>
            <div className="form-group">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
                type="email"
                name="email"
                autoComplete="on"
                className="form-control"
                placeholder="Email"
                value={email}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Продукт:</label>
              <select
                onChange={(e) => {
                  setProduct(e.target.value);
                }}
                id="product"
                name="product"
                className="form-control"
                value={product}
              >
                <option value="course-html">Курс по верстке</option>
                <option value="course-js">Курс по JavaScript</option>
                <option value="course-vue">Курс по VUE JS</option>
                <option value="course-php">Курс по PHP</option>
                <option value="course-wordpress">Курс по WordPress</option>
              </select>
            </div>
            <div className="form-group">
              <button className="btn btn-lg btn-primary btn-block">
                Оформить заявку
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
