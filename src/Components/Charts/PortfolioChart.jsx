import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from "axios";

function PortfolioChart() {
  const [amountData, setAmountData] = useState([]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get('http://localhost:8081/portfolio/percentages');
        const newData = [];
        for (let key in result.data) {
          if (newData.length < 3 && (key.includes("mutual") || key.includes("stock") || key.includes("crypto"))) {
            newData.push([key, result.data[key]]);
          }
        }
        setAmountData(newData);
        setOptions({
          title: {
            text: '',
            align: 'center',
            verticalAlign: 'middle',
            y: 20,
            style: {
              color: '#FFFFFF'
            }
          },
          credits: {
            enabled: false
          },
          tooltip: {
            animation: false,
            backgroundColor: '#010003',
            borderRadius: 5,
            style: {
              color: '#fff',
            }
          },
          chart: {
            type: 'pie',
            backgroundColor: '#1B2520',
          },
          series: [{
            name: 'Percentage Owned',
            colors: ['#9EDFFF', '#C9C0F6', '#F1907B', '#FED095'],
            data: newData,
            dataLabels: {
              enabled: true,
              align: 'center',
              distance: -70,
              color: '#1B2520',
            }
          }]
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="DoughnutChart">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
}

export default PortfolioChart;
