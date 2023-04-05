import { useNavigate } from 'react-router-dom';
import { FunctionComponent } from 'react';
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
} from './styles';
import { IEventDetailsProps } from './types';
import { numToLargeMonth } from '../../helpers/longDates';
import { ColumnContainer } from '../CreateEvent/styles';

const EventDetails: FunctionComponent<IEventDetailsProps> = (
  props: IEventDetailsProps,
) => {
  const { event } = props;
  const navigate = useNavigate();

  const renderPictures = () => (
    <CustomImg src={`data:image/jpeg;base64,${event.image}`} />
  );

  return (
    <>
      <RowContainer onClick={() => navigate('/')}>
        <BackArrowContainer />
        <BackText>Back to events</BackText>
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
            <Subtitle>Location and time</Subtitle>
            <RowContainer>
              <CalendarIcon />
              <Text>
                {numToLargeMonth(new Date(event.date).getMonth())}
              </Text>
              <Text>
                {new Date(event.date).getDate()},
              </Text>
              <Text>
                {new Date(event.date).getFullYear()},
              </Text>
              <Text>{event.time}hs -</Text>
              <Text>{event.time}hs</Text>
            </RowContainer>
            <RowContainer>
              <LocationIcon />
              <Text>{event.location}</Text>
            </RowContainer>
          </ColumnContainer>
          <ColumnContainer>
            <Subtitle>Vacancies</Subtitle>
            <RowContainer>
              <Text>{event.vacancies} total vacancies</Text>
              <PeopleIcon />
            </RowContainer>
            <RowContainer>
              <Text>
                {event.ticketsPerPerson} tickets per person max
              </Text>
              <PersonIcon />
            </RowContainer>
          </ColumnContainer>
        </LocationAndTimeRowContainer>
        <Subtitle>Description and info</Subtitle>
        <Text>{event.description}</Text>
        <Subtitle>FAQs</Subtitle>
        <Text>{event.faqs}</Text>
      </InfoContainer>
    </>
  );
};

export default EventDetails;
