import React,{useContext} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { contextData } from '../ContextProvider/contextdata';

function Grafico1() {
    const { presu } = useContext(contextData);
    ChartJS.register(ArcElement, Tooltip, Legend);
    console.log(presu.presupuesto)
    console.log(presu.gastos)
   
 const data = {
   
  labels: ['Presupuesto','gastos' ],
  datasets: [
    {
      label: '# of Votes',
      data: [presu.presupuesto-presu.gastos, presu.gastos,],
      backgroundColor: [
        'green',
        'rgba(255, 99, 132, 0.2)',
        
      ],
      borderColor: [
        'green',
        'rgba(255, 99, 132, 0.2)',
        
      ],
      borderWidth: 1,
    },
  ],
};
  return (
    <div style={{height:"300px"}}>
       <Pie data={data} />;
    </div>
  )
}

export default Grafico1
