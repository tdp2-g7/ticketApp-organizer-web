import React, { FunctionComponent } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  XAxis,
  BarChart,
  CartesianGrid,
  YAxis,
  Bar,
  Tooltip,
  Label,
} from 'recharts';
import COLORS from 'src/helpers/colors';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Container,
  RowContainer,
  StatisticsContainer,
  Subtitle,
  Title,
} from './styles';
import { IMetricsProps } from './types';

const Metrics: FunctionComponent<IMetricsProps> = (props: IMetricsProps) => {
  const {
    year, setYear, eventsByMonth, eventsByStatus,
  } = props;

  const donutColors = [
    COLORS.redMandy,
    COLORS.clementine,
    COLORS.greenLimeade,
    COLORS.electricViolet,
    COLORS.pink,
    COLORS.jordyBlue,
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    value,
    index,
  }: any) => {
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill={`${donutColors[index % donutColors.length]}`}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {eventsByStatus[index].name} - {value} ({(percent * 100).toFixed(0)}%)
      </text>
    );
  };

  return (
    <>
      {eventsByMonth && eventsByStatus
      && (<Container>
        <Title>Metricas</Title>
        <Subtitle>
          Estado de todos los eventos creados en la plataforma
        </Subtitle>
        <StatisticsContainer>
          <PieChart width={700} height={400}>
            <Pie
              data={eventsByStatus}
              cx={350}
              cy={200}
              fill="#8884d8"
              paddingAngle={1}
              dataKey="value"
              label={renderCustomizedLabel}
            >
              <XAxis dataKey="name" />
              {eventsByStatus.map((entry: any, index: any) => (
                <Cell
                  key={`cell-${index}`}
                  fill={donutColors[index % donutColors.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </StatisticsContainer>
        <Subtitle>Eventos realizados a lo largo de los meses</Subtitle>
        <StatisticsContainer>
          <RowContainer hasMargin>
            <ArrowLeftIcon onClick={() => setYear(year - 1)} />
            {year}
            <ArrowRightIcon onClick={() => setYear(year + 1)} />
          </RowContainer>
          <BarChart
            width={1000}
            height={300}
            data={eventsByMonth}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis>
              <Label
                dx={-40}
                style={{
                  textAnchor: 'middle',
                  fontSize: '100%',
                  fill: 'black',
                  marginRight: 100,
                  marginBottom: 100,
                }}
                angle={270}
                value={'Cantidad de eventos'}
              />
            </YAxis>
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </StatisticsContainer>
      </Container>)}
    </>
  );
};

export default Metrics;
