import React, { useContext } from "react";
import { contextData } from "../ContextProvider/contextdata";
import './resultado.css'
function Resultado() {
  const { presu, productos } = useContext(contextData);
  console.log(presu);
  return (
    <div className="card">
      <div className="card-title">
        <h5>
          Presupuesto :{" "}
          <span class="badge text-bg-primary">{presu.presupuesto}</span>
        </h5>
        <h5>
          Gastos : <span class="badge text-bg-primary">{presu.gastos}</span>
        </h5>

        {presu.presupuesto - presu.gastos >= presu.presupuesto / 2 ? (
          <h5>
            Restante :{" "}
            <span class="badge text-bg-primary">
              {presu.presupuesto - presu.gastos}
            </span>
          </h5>
        ) : presu.presupuesto - presu.gastos >= presu.presupuesto / 3 &&
          presu.presupuesto - presu.gastos < presu.presupuesto / 2 ? (
          <h5>
            Restante :{" "}
            <span class="badge text-bg-warning">
              {presu.presupuesto - presu.gastos}
            </span>
          </h5>
        ) : presu.presupuesto - presu.gastos > 0 &&
          presu.presupuesto - presu.gastos < presu.presupuesto / 4 ? (
          <h5>
            Restante :{" "}
            <span class="badge text-bg-danger">
              {presu.presupuesto - presu.gastos}
            </span>
          </h5>
        ) : (
          <h5>
            Restante :{" "}
            <span class="badge text-bg-dark">
              {presu.presupuesto - presu.gastos}
            </span>
          </h5>
        )}
      </div>

      <div className="card-body2">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">GASTO</th>
              <th scope="col">PRECIO</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.gastos}</td>
                <td>{item.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Resultado;
