import { useNavigate } from 'react-router-dom';
import { FunctionComponent } from 'react';

import ProgressBar from '../../components/ProgressBar';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BackArrowContainer,
  BackText,
  CalendarIcon,
  CustomImg,
  Text,
  ImagesContainer,
  InfoContainer,
  LocationAndTimeRowContainer,
  LocationIcon,
  PeopleIcon,
  PersonIcon,
  RowContainer,
  Subtitle,
  Title,
  RowContainerVacancies,
  TextOccupied,
  DivOccupied,
  FAQsText,
  EditOutlinedIcon,
  ButtonContainer,
  Button,
  RowContainerTitleEdit,
} from './styles';
import { IEventDetailsProps } from './types';
import { numToLargeMonth } from '../../helpers/longDates';
import { ColumnContainer } from '../CreateEvent/styles';
import { globalNavigate } from '../../helpers/history';

const EventDetails: FunctionComponent<IEventDetailsProps> = (
  props: IEventDetailsProps,
) => {
  const {
    event,
  } = props;
  const navigate = useNavigate();

  const renderPictures = () => (
    <CustomImg src={`data:image/jpeg;base64,${event.image}`} />
  );

  const handleTime = (time: Date) => {
    let minutes;
    let hours;
    if (new Date(time).getMinutes() < 10) {
      minutes = `${new Date(time).getMinutes()}0`;
    } else {
      minutes = `${new Date(time).getMinutes()}`;
    }
    if (new Date(time).getHours() < 10) {
      hours = `${new Date(time).getHours()}0`;
    } else {
      hours = `${new Date(time).getHours()}`;
    }
    return `${hours}:${minutes}`;
  };

  return (
    <>
      <RowContainer onClick={() => navigate('/')}>
        <BackArrowContainer />
        <BackText>Volver a eventos</BackText>
      </RowContainer>
      <RowContainerTitleEdit>
        <Title>{event.title}</Title>
        <ButtonContainer>
          <EditOutlinedIcon />
          <Button onClick={() => globalNavigate(`/event/edit/${event.eventId}`)}>Editar</Button>
        </ButtonContainer>
      </RowContainerTitleEdit>
      <ImagesContainer>
        <ArrowLeftIcon />
        {renderPictures()}
        <ArrowRightIcon />
      </ImagesContainer>
      <InfoContainer>
        <LocationAndTimeRowContainer>
          <ColumnContainer>
            <Subtitle>Ubicacion y horario</Subtitle>
            <RowContainer>
              <CalendarIcon />
              <Text>
                <>
                  {numToLargeMonth(new Date(event.date).getMonth())}{' '}
                  {new Date(event.date).getDate()},{' '}
                  {new Date(event.date).getFullYear()},{' '}
                  {event.startTime && handleTime(event.startTime)}hs -{' '}
                  {event.endTime && handleTime(event.endTime)}hs
                </>
              </Text>
            </RowContainer>
            <RowContainer>
              <LocationIcon />
              <Text>{event.location}</Text>
            </RowContainer>
          </ColumnContainer>
          <ColumnContainer>
            <Subtitle>Vacantes</Subtitle>
            <RowContainerVacancies>
              <Text>{event.vacancies} vacantes totales</Text>
              <PeopleIcon />
            </RowContainerVacancies>
            <ProgressBar
              completed={event.vacancies / 5}
              total={event.vacancies}
            />
            <DivOccupied>
              <TextOccupied>
                {event.vacancies / 5}/{event.vacancies} ocupado
              </TextOccupied>
            </DivOccupied>
            <RowContainer>
              <Text>{event.ticketsPerPerson} entradas por persona max</Text>
              <PersonIcon />
            </RowContainer>
          </ColumnContainer>
        </LocationAndTimeRowContainer>
        <Subtitle>Descripcion e informacion</Subtitle>
        <Text>{event.description}</Text>
        <Subtitle>Preguntas frecuentes</Subtitle>
        <FAQsText>{event.faqs.replace(/R:/g, '\nR:')}</FAQsText>
      </InfoContainer>
    </>
  );
};

export default EventDetails;
