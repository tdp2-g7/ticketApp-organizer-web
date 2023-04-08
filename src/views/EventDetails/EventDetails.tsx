import { useNavigate } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { Modal } from 'src/components/Modal/Modal';
import { numToLargeMonth } from 'src/helpers/longDates';
import { Sizes } from 'src/helpers/sizes';
import ProgressBar from 'src/components/ProgressBar';
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
  OpenModalButton,
  ClockIcon,
} from './styles';
import { IEventDetailsProps } from './types';
import { ColumnContainer } from '../CreateEvent/styles';

const EventDetails: FunctionComponent<IEventDetailsProps> = (
  props: IEventDetailsProps,
) => {
  const { event, setScheduleModalOpen, scheduleModalOpen } = props;
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

  const renderScheduleModal = () => (
    <Modal
      isOpen={scheduleModalOpen}
      onClose={() => setScheduleModalOpen(false)}
      title="Ver cronograma"
      size={Sizes.small}
    >
      {event.schedule?.map((schedule) => (
        <RowContainer key={schedule.description} hasMargin>
          <ClockIcon />
          <Text>{handleTime(schedule.startTime)}hs - {handleTime(schedule.endTime)}hs</Text>
          <Text isBold>{schedule.description}</Text>
        </RowContainer>
      ))}
    </Modal>
  );

  return (
    <>
      {renderScheduleModal()}
      <RowContainer onClick={() => navigate('/')}>
        <BackArrowContainer />
        <BackText>Volver a eventos</BackText>
      </RowContainer>
      <Title>{event.title}</Title>
      <ImagesContainer>
        <ArrowLeftIcon />
        {renderPictures()}
        <ArrowRightIcon />
      </ImagesContainer>
      <InfoContainer>
        <LocationAndTimeRowContainer>
          <ColumnContainer>
            <Subtitle>Ubicacion y horario</Subtitle>
            <RowContainer hasMargin>
              <CalendarIcon />
              <Text>
                <>
                  {numToLargeMonth(new Date(event.date).getMonth())}{' '}
                  {new Date(event.date).getDate()},{' '}
                  {new Date(event.date).getFullYear()},{' '}
                  {event.startTime && handleTime(event.startTime)}hs
                  {event.endTime && `- ${handleTime(event.endTime)}hs`}
                </>
              </Text>
              {event.schedule && (
                <OpenModalButton onClick={() => setScheduleModalOpen(true)}>
                  <p>Ver cronograma</p>
                </OpenModalButton>
              )}
            </RowContainer>
            <RowContainer>
              <LocationIcon />
              <Text>{event.location.label}</Text>
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
