import React, { useState } from "react";
import "./Navbar.css";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';   

import userContext from "../Data/Datacontexter";
import axios from "axios";
import { DatePicker } from "antd";
import { useParams } from "react-router-dom";
const { RangePicker } = DatePicker;
function Navbar() {
  const contexter = useContext(userContext);
  const navigate = useNavigate();

  // const Datefilter = async () => {
  //   await axios
  //     .post(`https://dashboard.pulsework360.com:3003/Datefilter`, params_id)
  //     .then((response) => {
  //       contexter.setLiveincoming(response.data);

  //     });
  // };



  // const [isTodayActive, setIsTodayActive] = useState(true);
  // const [isWeekActive, setIsWeekActive] = useState(false);
  // const [isMonthActive, setIsMonthActive] = useState(false);
  // const [isYearActive, setIsYearActive] = useState(false);
  // const ThisTodayDataBUTTON = () => {
  //   setIsTodayActive(true);
  //   setIsWeekActive(false);
  //   setIsMonthActive(false);
  //   setIsYearActive(false);
  // };

  // const ThisWeekDataBUTTON = () => {
  //   setIsTodayActive(false);
  //   setIsWeekActive(true);
  //   setIsMonthActive(false);
  //   setIsYearActive(false);
  //   axios.get("http://144.24.111.66:3002/ThisWeekData").then((response) => {
  //     console.log(response);
  //     contexter.setWeekdata(response.data);
  //   });
  // };

  // const ThisMonthDataBUTTON = () => {
  //   setIsTodayActive(false);
  //   setIsWeekActive(false);
  //   setIsMonthActive(true);
  //   setIsYearActive(false);
  //   axios.get("http://144.24.111.66:3002/ThisMonthData").then((response) => {
  //     contexter.setData(response.data);
  //     console.log(response.data);
  //   });
  // };
  // const ThisYearDataBUTTON = () => {
  //   setIsTodayActive(false);
  //   setIsWeekActive(false);
  //   setIsMonthActive(false);
  //   setIsYearActive(true);
  //   axios.get("http://144.24.111.66:3002/ThisYearData").then((response) => {
  //     contexter.setData(response.data);
  //     console.log(response.data);
  //   });
  // };
  







  const handleDateTimeChange = (value,dateString) => {
    contexter.setDateTime(dateString);
    console.log(dateString);
  };

  const handleSubmit = () => {
    // Perform any actions with the selected date and time

    // Redirect to the next page
    navigate('/Datefilter');
  };
  return (
    <div className="Navbar">
    <div> <RangePicker
        showTime={{
          format: "HH/mm/ss",
        }}
        format="YYYY-MM-DD HH:mm:ss"
        onChange={handleDateTimeChange}
      />
      <button type="primary" onClick={handleSubmit}>
        Submit
      </button>
      </div>
     
      
      <a href="/"   >
        <button
       
          className={`tdy-btn btn ${contexter.isTodayActive ? 'active' : ''}` }
        
        >
          Today
        </button>
      </a>
      <a href="/Week"  >
        <button
    
          className={`week-btn btn ${contexter.isWeekActive ? 'active' : ''}`}
        
        >
          This Week
        </button>
      </a>
      <a href="/Month" >
        <button
        
          className={`month-btn btn ${contexter.isMonthActive ? 'active' : ''}`}
         
        >
          This Month
        </button>
      </a>
      <a href="/Year" >
        <button
      
          className={`year-btn btn ${contexter.isYearActive ? 'active' : ''}`}
          
        >
          This Year
        </button>
      </a>
    </div>
  );
}

export default Navbar;
