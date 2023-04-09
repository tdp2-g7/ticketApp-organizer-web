import { globalNavigate } from '../../../helpers/history';
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

  const minutes = () => {
    if (new Date(event.startTime).getMinutes() < 10) {
      return `${new Date(event.startTime).getMinutes()}0`;
    }
    return new Date(event.startTime).getMinutes();
  };

  return (
    <EventContainer
      key={event.eventId}
      onClick={() => globalNavigate(`/events/${event.eventId}`)}
    >
      {event.images ? (
        <CustomImg src={`data:image/jpeg;base64,${event.images[0]}`} />
      ) : (
        <CustomImg src={NoImage} />
      )}
      <InfoContainer>
        <DateContainer>
          <MonthLabel>{numToMonth(new Date(event.date).getMonth())}</MonthLabel>
          <DayLabel>{new Date(event.date).getDate()}</DayLabel>
          <HourLabel>
            {new Date(event.startTime).getHours()}:{minutes()}
          </HourLabel>
        </DateContainer>
        <TextContainer>
          <EventTitle>{event.title}</EventTitle>
          <RowContainer>
            <PlaceOutlinedIcon />
            <LocationText>{event.location.label}</LocationText>
          </RowContainer>
        </TextContainer>
      </InfoContainer>
    </EventContainer>
  );
};

export default EventCard;
