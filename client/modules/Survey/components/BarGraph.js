/**
 * Created by ryanpan on 2018-10-05.
 */
import React, { PropTypes } from 'react';
import { Bar } from 'react-chartjs-2';

export function BarGraph(props, context) {
  let solution = {
    labels: [],
    datasets: []
  };

  let dataset = {
    label: 'User Percentage',
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
    data: []
  }

  for (let result of props.responseObj.result) {
    let percentage = Math.round(result.value / props.responseObj.categoryPoint * 10000) / 100
    solution.labels.push(result.text);
    dataset.data.push(percentage);
  }
  dataset.data.push(0);
  dataset.data.push(100);
  solution.datasets.push(dataset)

  let graphHeight = (window.innerHeight/2>300? window.innerHeight/2 :300);
  return <Bar
    data={solution}
    width={10}
    height={graphHeight}
    options={{
      maintainAspectRatio: false
    }}
  />;
}

export default BarGraph;
