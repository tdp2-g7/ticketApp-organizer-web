import React, { FunctionComponent } from 'react';
import Loading from 'src/components/Loading/Loading';
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from 'recharts';
import { useNavigate } from 'react-router-dom';
import COLORS from 'src/helpers/colors';
import {
  BackArrowContainer,
  BackText,
  Container,
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

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill='black'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${statisticsData?.pie[index].name} ${(percent * 100).toFixed(0)}%`}
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
            Cantidad de clientes que ingresaron por período de tiempo
          </Subtitle>
          <StatisticsContainer>
            <BarChart width={700} height={300} data={statisticsData?.bar}>
              <XAxis dataKey='time' />
              <YAxis />
              <Bar dataKey='quantity' fill='#6C61AF' />
            </BarChart>
          </StatisticsContainer>
          <Subtitle>Cantidad de clientes que ingresaron en el tiempo</Subtitle>
          <StatisticsContainer>
            <LineChart
              width={600}
              height={300}
              data={statisticsData?.line}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='time' />
              <YAxis>
                <Label dx={-40}
                  style={{
                    textAnchor: 'middle',
                    fontSize: '100%',
                    fill: 'black',
                    marginRight: 100,
                    marginBottom: 100,
                  }}
                  angle={270}
                  value={'Cantidad de clientes ingresados'}
                />
              </YAxis>
              /
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                name='Ingresados hasta horario'
                dataKey='quantity'
                stroke='#FE53BB'
              />
            </LineChart>
          </StatisticsContainer>
          <Subtitle>Porcentaje de clientes ingresados y sin ingresar</Subtitle>
          <StatisticsContainer>
            <PieChart width={550} height={390}>
              <Pie
                data={statisticsData?.pie}
                cx={250}
                cy={200}
                innerRadius={30}
                outerRadius={180}
                fill='#8884d8'
                paddingAngle={1}
                dataKey='quantity'
                label={renderCustomizedLabel}
                labelLine={false}
              >
                <XAxis dataKey='name' />
                {statisticsData?.pie.map((entry:any, index:any) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={donutColors[index % donutColors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </StatisticsContainer>
        </Container>
      )}
    </>
  );
};

export default Statistics;
