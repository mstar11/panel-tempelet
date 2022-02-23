import React,{ useState, useEffect} from 'react'
import {Chart as ChartJS,ArcElement, Tooltip,Legend} from "chart.js" 
import {Doughnut} from 'react-chartjs-2';
import './Styles/DoughnutChart.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
ChartJS.register(
        Tooltip,Legend,
        ArcElement
)

const DoughnutChart = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
        let data:{
                labels:string[],
                datasets:any[]
        } = {
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
           var options= {
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
    <div className="DoughnutChart" data-aos="fade-left">
            <Doughnut 
            data={data}
            height={300}
            options={options}
            />
    </div>
  )
}

export default DoughnutChart