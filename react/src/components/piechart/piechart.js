import * as React from 'react';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { country: 'Russia', area: 70 },
  { country: 'Canada', area: 10 },
  { country: 'USA', area: 20 },
];



export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
          width={400}
          height={305}
          options={{maintainAspectRatio: false}}
        >
          <PieSeries
  
            valueField="area"
            argumentField="country"
          />
          <Title
            text="Trend Calculation"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
