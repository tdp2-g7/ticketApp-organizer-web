import React, { FunctionComponent, useState } from 'react';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { Modal } from 'src/components/Modal/Modal';
import { soryByOptions, typesOfEvents } from 'src/helpers/options';
import { IEventsList } from './types';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowsContainer,
  ColumnContainer,
  CreateEventImage,
  CustomButton,
  CustomInput,
  CustomSelect,
  EmptyContainer,
  EventBusyIcon,
  EventsContainer,
  FiltersBox,
  HeaderLink,
  MainContainer,
  MakeEventText,
  MakeEventTitle,
  OrderBySelect,
  RectangleContainer,
  RowDiv,
  SortBy,
  Title,
} from './styles';
import EventCard from './EventCard/EventCard';
import CreateEventImg from '../../assets/createEventImage.png';

const EventsList: FunctionComponent<IEventsList> = (props: IEventsList) => {
  const {
    events,
    maxPage,
    currentPage,
    setCurrentPage,
    filters,
    setFilters,
    handleFilters,
    drafts,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const nextHandler = () => {
    if (currentPage >= maxPage) return;
    setCurrentPage(currentPage + 1);
  };

  const prevHandler = () => {
    if (currentPage - 1 < 1) return;
    setCurrentPage(currentPage - 1);
  };

  const filtersView = (
    <Modal title='Filters' onClose={() => setIsOpen(false)} isOpen={isOpen}>
      <div>
        <CustomInput
          type='text'
          placeholder='Buscar por Titulo'
          value={filters.title}
          onInput={(e) => setFilters({ ...filters, title: e.currentTarget.value })
          }
        />
      </div>
      <div>
        <CustomSelect
          isPlaceholder={filters.type === ''}
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.currentTarget.value })
          }
        >
          <option value=''>Buscar por Tipo de evento</option>
          {typesOfEvents.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </CustomSelect>
      </div>
      <CustomButton
        isInverted
        onClick={() => {
          setFilters({
            title: '',
            type: '',
            orderBy: '',
          });
        }}
      >
        Clear
      </CustomButton>
      <CustomButton
        onClick={() => {
          handleFilters();
          setIsOpen(false);
        }}
      >
        Filter
      </CustomButton>
    </Modal>
  );

  return (
    <MainContainer>
      {isOpen && filtersView}
      <RowDiv>
        <FiltersBox onClick={() => setIsOpen(true)}>
          <p>Filtros</p>
        </FiltersBox>
        <OrderBySelect
          value={filters.orderBy}
          onChange={(e) => {
            setFilters({ ...filters, orderBy: e.currentTarget.value });
          }}
        >
          <option value='' disabled>
            Ordenar por
          </option>
          {soryByOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </OrderBySelect>
        <SortBy
          onClick={() => {
            setFilters({
              ...filters,
              sortBy: filters.sortBy === 'asc' ? 'desc' : 'asc',
            });
          }}
        >
          {filters.sortBy === 'asc' ? <ArrowUpward /> : <ArrowDownward />}
        </SortBy>
      </RowDiv>
      {!(events.length > 0) ? (
        <EmptyContainer>
          <EventBusyIcon />
          <Title> Aún no creaste ningún evento </Title>
        </EmptyContainer>
      ) : (
        <>
          <Title>Tus eventos</Title>
          <EventsContainer>
            {events.map((event) => (
              <EventCard event={event} />
            ))}
            {drafts.map((event) => (
              <EventCard event={event} isDraft />
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
      <div>
        <RectangleContainer>
          <CreateEventImage src={CreateEventImg} alt='logo' />
          <ColumnContainer>
            <MakeEventTitle>Crea tu propio evento</MakeEventTitle>
            <MakeEventText>
              Ahora puedes crear tu evento muy fácilmente
            </MakeEventText>
            <HeaderLink href='/createEvent'>Crear eventos</HeaderLink>
          </ColumnContainer>
        </RectangleContainer>
      </div>
    </MainContainer>
  );
};

export default EventsList;
