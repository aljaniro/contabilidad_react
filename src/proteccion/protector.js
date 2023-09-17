import React,{useContext} from 'react'
import { contextData } from '../ContextProvider/contextdata';
import { Navigate,Outlet } from 'react-router-dom';
function Protector({children}) {
    const { presu } = useContext(contextData);
    if(presu.presupuesto === 0){
        return <Navigate to='/'></Navigate>
    }

  return children ? children : <Outlet/>
}

export default Protector
