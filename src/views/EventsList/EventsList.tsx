import React, { FunctionComponent } from 'react';
import { IEventsList } from './types';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowsContainer,
  ColumnContainer,
  CreateEventImage,
  EmptyContainer,
  EventBusyIcon,
  EventsContainer,
  HeaderLink,
  MakeEventText,
  MakeEventTitle,
  RectangleContainer,
  Title,
} from './styles';
import EventCard from './EventCard/EventCard';
import CreateEventImg from '../../assets/createEventImage.png';

const EventsList: FunctionComponent<IEventsList> = (props: IEventsList) => {
  const {
    events, maxPage, currentPage, setCurrentPage,
  } = props;

  const nextHandler = () => {
    if (currentPage >= maxPage) return;
    setCurrentPage(currentPage + 1);
  };

  const prevHandler = () => {
    if (currentPage - 1 < 1) return;
    setCurrentPage(currentPage - 1);
  };
  return (
    <>
      {!(events.length > 0) ? (
        <EmptyContainer>
          <EventBusyIcon />
          <Title> You don't have any event </Title>
        </EmptyContainer>
      ) : (
        <>
          <Title>Your Events</Title>
          <EventsContainer>
            {events.map((event) => (
              <EventCard event={event} />
            ))}
          </EventsContainer>
          <ArrowsContainer>
            <ArrowLeftIcon
              isDisabled={currentPage === 1}
              onClick={() => prevHandler()}
            />
            <ArrowRightIcon
              isDisabled={currentPage === maxPage}
              onClick={() => nextHandler()}
            />
          </ArrowsContainer>
        </>
      )}

      <RectangleContainer>
        <CreateEventImage src={CreateEventImg} alt='logo' />
        <ColumnContainer>
          <MakeEventTitle>Make your own Event</MakeEventTitle>
          <MakeEventText>
            Now you can create your event very easily
          </MakeEventText>
          <HeaderLink href='/createEvent'>Crear eventos</HeaderLink>
        </ColumnContainer>
      </RectangleContainer>
    </>
  );
};

export default EventsList;
