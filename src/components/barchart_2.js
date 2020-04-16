import React from "react";
// import { useStaticQuery, graphql } from "gatsby"
import { HorizontalBar}  from "react-chartjs-2";
import RouteData from "../data/onsight";

const BarChart = () => {
  const routeData = RouteData();

  const redpoint = {
    label: "Redpoint",
    data: routeData.redpoint.counts,
    backgroundColor: "rgba(134, 183, 113, 1)"
  };

  const onsight = {
    label: "Onsight",
    data: routeData.onsight.counts,
    backgroundColor: "rgba(113, 156, 183, 1)"
  };

  let data = {
    labels: routeData.labels,
    datasets: [redpoint, onsight]
  };

  const options = {
    minBarLength: 2,
    legend: {
      display: true
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "# of routes"
          },
          stacked: true,
          ticks: {
            min: 0,
            suggestedMax: 5
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "YDS Rating"
          },
          stacked: true,
          ticks: {
            reverse: true
          }
        }
      ]
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/2 pt-8">
        <HorizontalBar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;