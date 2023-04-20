import { renderLocation } from 'src/helpers/location';
import { globalNavigate } from 'src/helpers/history';
import { numToMonth } from 'src/helpers/shortDates';
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
  Tag,
  TextContainer,
} from './styles';
import NoImage from '../../../assets/noImage.png';

const EventCard = (props: any) => {
  const { event, isDraft } = props;

  const minutes = () => {
    if (new Date(event.startTime).getMinutes() < 10) {
      return `${new Date(event.startTime).getMinutes()}0`;
    }
    return new Date(event.startTime).getMinutes();
  };

  return (
    <EventContainer
      key={event.eventId}
      onClick={() => (isDraft ? globalNavigate(`/event/edit/${event.eventId}`) : globalNavigate(`/events/${event.eventId}`))}
    >
      {event.images ? (
        <CustomImg src={`data:image/jpeg;base64,${event.images[0]}`} />
      ) : (
        <CustomImg src={NoImage} />
      )}
      {isDraft && <Tag>Borrador</Tag>}
      <InfoContainer>
        <DateContainer>
          <MonthLabel>{numToMonth(new Date(event.date).getMonth())}</MonthLabel>
          <DayLabel>{new Date(event.date).getDate()}</DayLabel>
          <HourLabel>
            {new Date(event.startTime).getHours()}:{minutes()}
          </HourLabel>
        </DateContainer>
        <TextContainer>
          <EventTitle>{event.title || 'Titulo'}</EventTitle>
          <RowContainer>
            <PlaceOutlinedIcon />
            <LocationText>{event.location ? renderLocation(event.location.label) : 'Ubicación'}</LocationText>
          </RowContainer>
        </TextContainer>
      </InfoContainer>
    </EventContainer>
  );
};

export default EventCard;
