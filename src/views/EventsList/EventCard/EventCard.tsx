import { useNavigate } from 'react-router-dom';
import {
  CustomImg,
  DateContainer,
  DayLabel,
  EventContainer,
  EventTitle,
  HourLabel,
  InfoContainer,
  LocationText,
  MonthLabel,
  PlaceOutlinedIcon,
  RowContainer,
  TextContainer,
} from './styles';
import NoImage from '../../../assets/noImage.png';
import { numToMonth } from '../../../helpers/shortDates';

const EventCard = (props: any) => {
  const { event } = props;
  const navigate = useNavigate();

  return (
    <EventContainer
      key={event.eventId}
      onClick={() => navigate(`/events/${event.eventId}`)}
    >
      {event.image ? (
        <CustomImg src={`data:image/jpeg;base64,${event.image}`} />
      ) : (
        <CustomImg src={NoImage} />
      )}
      <InfoContainer>
        <DateContainer>
          <MonthLabel>{numToMonth(event.date.getMonth)}</MonthLabel>
          <DayLabel>{event.date.getDate}</DayLabel>
          <HourLabel>{event.time.split(' ')[0]}</HourLabel>
        </DateContainer>
        <TextContainer>
          <EventTitle>{event.title}</EventTitle>
          <RowContainer>
            <PlaceOutlinedIcon />
            <LocationText>{event.location}</LocationText>
          </RowContainer>
        </TextContainer>
      </InfoContainer>
    </EventContainer>
  );
};

export default EventCard;
