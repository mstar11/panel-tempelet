import React,{ useState, useEffect} from 'react'
import {Chart as ChartJS,BarElement, CategoryScale, LinearScale} from "chart.js" 
import {Pie} from 'react-chartjs-2'
import './Styles/DoughnutChart.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement
)

const PieChart = () => {
        const [chart, setChart] = useState([])
        useEffect(()=>{
                Aos.init({duration:2000})
              },[])


        const data :{
                labels:string[],
                datasets:any[],
        }= {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 20, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }
           const options= {
                   maintianAspectRatio:false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                legend:{
                        labels:{
                                fontSize:"18"
                        }
                }
            }
  return (
    <div  className="PieChart" data-aos="fade-right">
            <Pie
            data={data}
            height={100}
            options={options}
            />
    </div>
  )
}

export default PieChart