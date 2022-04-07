import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Chart,ArgumentAxis,ValueAxis,LineSeries,Title,Legend} from '@devexpress/dx-react-chart-material-ui';
import { styled } from '@mui/material/styles';
import { Animation } from '@devexpress/dx-react-chart';
import { confidence as data } from './data-vizualization';

const PREFIX = 'Charts';

const classes = {
  chart: `${PREFIX}-chart`,
};

const format = () => tick => tick;

const Root = props => (
  <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto' }} />
);
const Label = props => (
  <Legend.Label {...props} />
);
const Item = props => (
  <Legend.Item {...props} />
);

const ValueLabel = (props) => {
  const { text } = props;
  return (
    <ValueAxis.Label
      {...props}
      text={`${text}`}
    />
  );
};

const TitleText = props => (
  <Title.Text {...props} sx={{ fontSize:'15px' }} />
);

const StyledChart = styled(Chart)(() => ({
  [`&.${classes.chart}`]: {
   paddingBottom:'130px',
    paddingRight:'20px',
    paddingLeft:'20px',
    // height: '300px'
  },
}));

export default class Charts extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper sx={{height:'40.4vh'}}>
        <StyledChart 
          data={chartData}
          className={classes.chart}
          width={700}
          height={500}
          options={{maintainAspectRatio: false}}
        >
          <ArgumentAxis tickFormat={format} />
          <ValueAxis
            max={50}
            labelComponent={ValueLabel}
          />

          <LineSeries style={{fontSize:'10px'}}
            name="Search"
            valueField="search"
            argumentField="month"
          />
          <LineSeries
            name="Referrals"
            valueField="referrals"
            argumentField="month"
          />
          <LineSeries
            name="Direct"
            valueField="direct"
            argumentField="month"
          />
          <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
          <Title 
            text={`Active users`}
            textComponent={TitleText}
          />
          <Animation />
        </StyledChart>
      </Paper>
    );
  }
}
