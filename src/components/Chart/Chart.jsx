import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from 'react-chartjs-2';
import styles from "./Chart.module.css";
const Chart = ({data,country}) => {
  // const { dailyData, setDailyData  } = useState({});
  //console.log('dat',useState([]))
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    console.log(dailyData);
    fetchAPI();
  }, []);

  const lineChart = (
    dailyData[0] ? (
    <Line
      data=
      {{
        labels: dailyData.map(({ data }) => data),
        datasets : [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "deaths",
            borderColor: "red",
            backgroundColor: "rgb(255,0,0,0.5",
            fill: true,
          },
        ],
      }}
    />
  ) : null
  );

  return (
  <div className={styles.container}>
    {lineChart}
    <p>haha</p>
    <h1>hello sam</h1>
    </div>
  );
};

export default Chart;
