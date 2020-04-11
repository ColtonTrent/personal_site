import React from "react";
// import { useStaticQuery, graphql } from "gatsby"
import { HorizontalBar}  from "react-chartjs-2";
import RouteData from "../data/routeData";

const BarChart = () => {
  const routeData = RouteData();

  const trad = {
    label: "Trad",
    data: routeData.trad.counts,
    backgroundColor: "rgba(134, 183, 113, 1)"
  };

  const sport = {
    label: "Sport",
    data: routeData.sport.counts,
    backgroundColor: "rgba(113, 156, 183, 1)"
  };

  let data = {
    labels: routeData.labels,
    datasets: [trad, sport]
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