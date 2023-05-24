import React, { FunctionComponent } from 'react';
import Loading from 'src/components/Loading/Loading';
import {
  PieChart, Pie, Cell, XAxis, YAxis, BarChart, Bar,
} from 'recharts';
import { useNavigate } from 'react-router-dom';
import COLORS from 'src/helpers/colors';
import {
  BackArrowContainer,
  BackText,
  BarChartIcon,
  Container,
  DonutSmallIcon,
  EmptyStatistics,
  EmptyTitle,
  RowContainer,
  StatisticsContainer,
  Subtitle,
  Title,
} from './styles';
import { IStatisticsProps } from './types';

const Statistics: FunctionComponent<IStatisticsProps> = (
  props: IStatisticsProps,
) => {
  const { loading, eventData, statisticsData } = props;
  const navigate = useNavigate();

  const donutColors = [COLORS.greenLimeade, COLORS.warningRed];

  const checkEmptyQuantities = (data: any) => {
    let allZero = true;
    data.forEach((item:any) => {
      if (item.quantity !== 0) {
        allZero = false;
      }
    });
    return allZero;
  };

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
        dominantBaseline='central'
      >
        {statisticsData.pie[index].name} - {value} ({(percent * 100).toFixed(0)}
        %)
      </text>
    );
  };

  return (
    <>
      <RowContainer onClick={() => navigate(`/events/${eventData?.eventId}`)}>
        <BackArrowContainer />
        <BackText>Volver al detalle del evento</BackText>
      </RowContainer>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Title>Estadísticas de {eventData?.title}</Title>
          <Subtitle>
            Cantidad de clientes acreditados por período de tiempo
          </Subtitle>
          {!statisticsData?.bar.length ? (
            <EmptyStatistics>
              <BarChartIcon />
              <EmptyTitle>
                {' '}
                Aún no hay estadisticas para este evento{' '}
              </EmptyTitle>
            </EmptyStatistics>
          ) : (
            <StatisticsContainer>
              <BarChart width={700} height={300} data={statisticsData?.bar}>
                <XAxis dataKey='time' />
                <YAxis />
                <Bar dataKey='quantity' fill='#6C61AF' />
              </BarChart>
            </StatisticsContainer>
          )}

          <Subtitle>Porcentaje de clientes ingresados y sin ingresar</Subtitle>
          {!statisticsData?.pie.length || checkEmptyQuantities(statisticsData.pie) ? (
            <EmptyStatistics>
              <DonutSmallIcon />
              <EmptyTitle>
                {' '}
                Aún no hay estadisticas para este evento{' '}
              </EmptyTitle>
            </EmptyStatistics>
          ) : (
            <StatisticsContainer>
              <PieChart width={800} height={450}>
                <Pie
                  data={statisticsData?.pie}
                  cx={400}
                  cy={220}
                  innerRadius={30}
                  outerRadius={180}
                  fill='#8884d8'
                  paddingAngle={1}
                  dataKey='quantity'
                  label={renderCustomizedLabel}
                >
                  <XAxis dataKey='name' />
                  {statisticsData?.pie.map((entry: any, index: any) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={donutColors[index % donutColors.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </StatisticsContainer>
          )}
        </Container>
      )}
    </>
  );
};

export default Statistics;
