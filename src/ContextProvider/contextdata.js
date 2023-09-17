import { createContext, useState,useReducer } from "react";

export const contextData = createContext()

export const Provi = ({children})=>{
    const [ presu,setpresu] = useState({
        presupuesto:0,
        gastos:0
    })
    if((presu.presupuesto-presu.gastos)<0){
      setpresu({presupuesto:0,gastos:presu.gastos})
  }
    const [gast,setgast] = useState(0)
    const second = [];

  const first = (state, action) => {
    console.log(action.payload, "aqui");
    switch (action.type) {
      case "añadir":
        return [
          ...state,
          { gastos: action.payload.gastos, precio: action.payload.precio },
        ];

      default:
        break;
    }
    return state;
  };
  const [productos, dispatch] = useReducer(first, second);
    return (
        <contextData.Provider value={{presu,setpresu,gast,setgast,productos, dispatch}}>
            {children}
        </contextData.Provider>
    )
}