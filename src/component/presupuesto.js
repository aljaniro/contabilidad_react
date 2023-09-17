import React, { useContext, useRef } from "react";
import "./presupuesto.css";
import { contextData } from "../ContextProvider/contextdata";
import { useNavigate } from "react-router-dom";

function Presupuesto() {
    const {presu,setpresu} = useContext(contextData)
    const pre = useRef(0)
    const navi = useNavigate()
    const prueba = (event) =>{
        event.preventDefault()
        console.log(pre.current.value)
        setpresu({presupuesto:pre.current.value,gastos:0})
        navi('/finanzas',{replace: true})
    }
  return (
    <div className="container2" >
      {console.log(presu)}
      
      <div className="card text-center" style={{height:"200px"}}>
        <div className="card-body">
          <form onSubmit={prueba}>
            <div className="mb-3">
              <label className="form-label">
                <h4 style={{marginTop:"20px"}}>PRESUPUESTO</h4>
              </label>
              <input
                type="number"
                className="form-control"
                aria-describedby="emailHelp"
                name="presupuesto"
                ref={pre}
              />
            </div>

            <button type="submit" className="btn">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Presupuesto;
