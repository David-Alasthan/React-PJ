import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValue);
  return (
    <div className='chart'>
      {props.dataPoints.map((i) => {
        return (

          <ChartBar 
            key={i.label}
            value={i.value}
            maxvalue={totalMaximum}
            label={i.label}
          />

        )

      })}
    </div>
  )
}

export default Chart