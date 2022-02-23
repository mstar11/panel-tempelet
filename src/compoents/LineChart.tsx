import React,{ useState, useEffect} from 'react'
import {Chart as ChartJS,LineElement, CategoryScale, LinearScale, PointElement} from "chart.js" 
import {Line} from 'react-chartjs-2'
import "./Styles/linechart.css"
import Aos from 'aos';
import 'aos/dist/aos.css';
ChartJS.register(
        CategoryScale,
        LinearScale,
        LineElement,
        PointElement
)

const LineChart = () => {
        useEffect(()=>{
                Aos.init({duration:2000})
              },[])

        let data:{
                labels:string[],
                datasets:any[],
        }= {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 20, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(100, 99, 132, 1)',
                  
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
    <div  className="chart" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
            <Line 
            className="line"
            data={data}
            height={100}
            options={options}
           
            />
    </div>
  )
}

export default LineChart