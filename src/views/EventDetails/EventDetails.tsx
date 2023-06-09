import { useNavigate } from 'react-router-dom';
import { FunctionComponent, useState } from 'react';
import { Modal } from 'src/components/Modal/Modal';
import { numToLargeMonth } from 'src/helpers/longDates';
import { Sizes } from 'src/helpers/sizes';
import Map from 'src/components/Map/Map';
import ProgressBar from 'src/components/ProgressBar';
import { renderLocation } from 'src/helpers/location';
import Loading from 'src/components/Loading/Loading';
import { State } from 'src/helpers/states';
import COLORS from 'src/helpers/colors';
import { tagState } from 'src/helpers/tagState';
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
  OpenModalButton,
  ClockIcon,
  Type,
  CancelButton,
  InsertChartOutlinedIcon,
  MetricsContainer,
} from './styles';
import { IEventDetailsProps } from './types';
import { ColumnContainer } from '../CreateEvent/styles';
import { globalNavigate } from '../../helpers/history';

const EventDetails: FunctionComponent<IEventDetailsProps> = (
  props: IEventDetailsProps,
) => {
  const {
    event,
    setScheduleModalOpen,
    scheduleModalOpen,
    mapsModalOpen,
    setMapsModalOpen,
    loading,
    onCancel,
  } = props;
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);

  const renderPictures = () => (
    <CustomImg src={`data:image/jpeg;base64,${event.images[currentImage]}`} />
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

  const prevHandler = () => {
    if (currentImage - 1 < 0) {
      setCurrentImage(event.images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  const nextHandler = () => {
    if (currentImage + 1 === event.images.length) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };
  const renderScheduleModal = () => (
    <Modal
      isOpen={scheduleModalOpen}
      onClose={() => setScheduleModalOpen(false)}
      title='Ver cronograma'
      size={Sizes.small}
    >
      {event.schedule?.map((schedule) => (
        <RowContainer key={schedule.description} hasMargin>
          <ClockIcon />
          <Text>
            {handleTime(schedule.startTime)}hs - {handleTime(schedule.endTime)}
            hs
          </Text>
          <Text isBold>{schedule.description}</Text>
        </RowContainer>
      ))}
    </Modal>
  );

  const renderMapsModal = () => (
    <Modal
      isOpen={mapsModalOpen}
      onClose={() => setMapsModalOpen(false)}
      title='Ver mapa'
      size={Sizes.medium}
    >
      <Text>{event.location && renderLocation(event.location.label)}</Text>
      <Map
        lat={Number(event.location.lat)}
        lng={Number(event.location.lng)}
        isPreview
      />
    </Modal>
  );

  // Check if event has already started
  // let startTime = new Date();
  // if (event.startTime) {
  //   startTime = new Date(event.startTime);
  // }
  // const startEvent = new Date(startTime?.setHours(startTime.getHours() - 2));

  return (
    <>
      {renderScheduleModal()}
      {renderMapsModal()}
      <RowContainer onClick={() => navigate('/home')}>
        <BackArrowContainer />
        <BackText>Volver a eventos</BackText>
      </RowContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          <RowContainerTitleEdit>
            <RowContainer>
              <Title>{event.title}</Title>
              <Type color={COLORS.lightViolet}>{event.type} </Type>
              <Type color={tagState(event).color}>{tagState(event).text}</Type>
            </RowContainer>
            <MetricsContainer
              onClick={() => globalNavigate(`/statistics/${event.eventId}`)}
            >
              <InsertChartOutlinedIcon />
              <Button>Ver estadisticas</Button>
            </MetricsContainer>
            <RowContainer>
              <CancelButton onClick={() => onCancel()}>
                {event.state === State.CANCELLED
                  ? 'Reanudar evento'
                  : 'Cancelar evento'}
              </CancelButton>
              <ButtonContainer
                onClick={() => globalNavigate(`/event/edit/${event.eventId}`)}
              >
                <EditOutlinedIcon />
                <Button>Editar</Button>
              </ButtonContainer>
            </RowContainer>
          </RowContainerTitleEdit>
          <ImagesContainer>
            <ArrowLeftIcon onClick={() => prevHandler()} />
            {renderPictures()}
            <ArrowRightIcon onClick={() => nextHandler()} />
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
                  <Text>{renderLocation(event.location.label)}</Text>
                  <OpenModalButton onClick={() => setMapsModalOpen(true)}>
                    <p>Ver mapa</p>
                  </OpenModalButton>
                </RowContainer>
              </ColumnContainer>
              <ColumnContainer>
                <Subtitle>Vacantes</Subtitle>
                <RowContainerVacancies>
                  <Text>{event.vacancies} vacantes totales</Text>
                  <PeopleIcon />
                </RowContainerVacancies>
                <ProgressBar
                  completed={event.ticketsSold}
                  total={event.vacancies}
                />
                <DivOccupied>
                  <TextOccupied>
                    {event.ticketsSold}/{event.vacancies} ocupado
                  </TextOccupied>
                </DivOccupied>
                <RowContainerVacancies>
                  <Text>
                    {event.ticketsPerPerson} entradas por persona maximo
                  </Text>
                  <PersonIcon />
                </RowContainerVacancies>
              </ColumnContainer>
            </LocationAndTimeRowContainer>
            <Subtitle>Descripcion e informacion</Subtitle>
            <Text>{event.description}</Text>
            <Subtitle>Preguntas frecuentes</Subtitle>
            <FAQsText>{event.faqs.replace(/R:/g, '\nR:')}</FAQsText>
          </InfoContainer>
        </>
      )}
    </>
  );
};

export default EventDetails;
