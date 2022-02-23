import React,{useState,useEffect} from 'react';
import Header from './compoents/Header'
import LineChart from './compoents/LineChart';
import "./compoents/Styles/main.css";
import LeftSideHeader from "./compoents/LeftSideHeader"
import DoughnutChart from './compoents/DoughnutChart';
import PieChart from './compoents/PieChart';
import Main2Content from './compoents/Main2Content';
import Main3 from './compoents/Main3';
import Footer from './compoents/Footer';




function App() {
  const [activebar, setActivebar] = useState<boolean>(false);
  return (
    <div>
    <section className="main1"  >
      <Header  activebar={activebar} setActivebar={setActivebar}/>
      <LeftSideHeader activebar={activebar} setActivebar={setActivebar}/>
      <LineChart  />
      <DoughnutChart />
      <PieChart/>
   </section>
   <div className="main2">
     <Main2Content />
   </div>
   <Main3 />
   <Footer />
  
   </div>
   
  );
}

export default App;
