import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export const Chart = () => {
  const [data, setData] = useState({
    series: [
      {
        data: [
          {
            x: new Date("2018-02-12").getTime(),
            y: 76,
          },
          {
            x: new Date("2018-02-12").getTime(),
            y: 100,
          },
          {
            x: new Date("2018-02-12").getTime(),
            y: 100,
          },
          {
            x: new Date("2018-02-12").getTime(),
            y: 100,
          },
        ],
      },
    ],
    xaxis: {
      type: "datetime",
    },
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
    },
  });

  return (
    <ReactApexChart
      options={data.options}
      series={data.series}
      type="line"
      height={350}
    />
  );
};
