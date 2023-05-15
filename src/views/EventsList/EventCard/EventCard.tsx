import { renderLocation } from 'src/helpers/location';
import { globalNavigate } from 'src/helpers/history';
import { numToMonth } from 'src/helpers/shortDates';
import { tagState } from 'src/helpers/tagState';
import NoImage from '../../../assets/noImage.png';
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
      onClick={() => (isDraft
        ? globalNavigate(`/event/edit/${event.eventDraftId}?isDraft=true`)
        : globalNavigate(`/events/${event.eventId}`))
      }
    >
      {event.mainImage ? (
        <CustomImg src={`data:image/jpeg;base64,${event.mainImage}`} />
      ) : (
        <>
          {event.images && event.images.length ? (
            <CustomImg src={`data:image/jpeg;base64,${event.images[0]}`} />
          ) : (
            <CustomImg src={NoImage} />
          )}
        </>
      )}

      {isDraft ? (
        <Tag color="red">Borrador</Tag>
      ) : (
        <Tag color={tagState(event).color}>{tagState(event).text}</Tag>
      )}
      <InfoContainer>
        <DateContainer>
          <MonthLabel>
            {numToMonth(new Date(event.date).getMonth() + 1)}
          </MonthLabel>
          <DayLabel>{new Date(event.date).getDate()}</DayLabel>
          <HourLabel>
            {new Date(event.startTime).getHours()}:{minutes()}
          </HourLabel>
        </DateContainer>
        <TextContainer>
          <EventTitle>{event.title || 'Titulo'}</EventTitle>
          <RowContainer>
            <PlaceOutlinedIcon />
            <LocationText>
              {event.location.label
                ? renderLocation(event.location.label)
                : 'Ubicación'}
            </LocationText>
          </RowContainer>
        </TextContainer>
      </InfoContainer>
    </EventContainer>
  );
};

export default EventCard;
