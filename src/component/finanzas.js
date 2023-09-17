import React from 'react'
import Gastos from './gastos'
import Resultado from './resultado'
import './finanzas.css'
import Grafico1 from './grafico1'
function Finanzas() {
    
  return (
    <section className='total'>
      <h1 style={{color:"white"}}>CONTABILIDAD</h1>
      <div className='grafi'>
      <Grafico1 style={{heigth:"100px"}}></Grafico1>
      </div>
      
      <div className='container'>
     
     <div className='col1' style={{marginTop:"-220px"}} ><Gastos></Gastos></div>
     <div className='col2' style={{marginTop:"-220px"}}><Resultado></Resultado></div>
   </div>
    </section>
    
  )
}

export default Finanzas

      