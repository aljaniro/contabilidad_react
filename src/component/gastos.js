import React, { useContext } from "react";
import "./gastos.css";
import { useForm } from "react-hook-form";
import { contextData } from "../ContextProvider/contextdata";
import toast, { Toaster } from "react-hot-toast";
function Gastos() {
  const { presu, setpresu, dispatch } = useContext(contextData);
  const { register, handleSubmit, getValues } = useForm();

  const enviar = (event) => {
    console.log(event);
    const data = getValues();
    const gas = parseInt(data.precio);

    if (presu.presupuesto - presu.gastos >= gas) {
      console.log("aun puede");
      dispatch({ type: "añadir", payload: getValues() });
      setpresu({
        presupuesto: parseInt(presu.presupuesto),
        gastos: presu.gastos + gas,
      });
      toast.success("Gasto ingresado con exito");
    } else {
      console.log("no puede");
      toast.error("Error Saldo insuficiente !");
    }

    console.log(data);
  };
  return (
    <div className="card text-center">
      <div className="card-title">
        <h3>GASTOS</h3>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit(enviar)}>
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              Producto
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              name="gastos"
              {...register("gastos", { required: true, maxLength: 20 })}
            />
          </div>
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              Precio
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              name="precio"
              {...register("precio", { required: true, maxLength: 20 })}
            />
          </div>
          <button type="submit" className="btn">
            ENVIAR
          </button>{" "}
          <Toaster
            toastOptions={{
              className: "",
              style: {
                border: "1px solid #713200",
                padding: "16px",
                color: "#713200",
              },
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default Gastos;
