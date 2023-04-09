import { FunctionComponent } from 'react';
import { Field, Form } from 'react-final-form';
import ReactDatePicker from 'react-datepicker';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Input from '../../components/Input/Input';
import { typesOfEvents } from '../../helpers/options';
import { requiredValidation } from '../../helpers/validations';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Button,
  ButtonContainer,
  RowContainer,
  Container,
  CustomCalendarForm,
  CustomForm,
  FormContainer,
  Label,
  Title,
  VacanciesContainer,
  TicketsPerUserContainer,
  ColumnContainer,
  ActionButton,
} from './styles';
import { ICreateEventProps } from './types';
import Select from '../../components/Select/Select';
import Map from '../../components/Map/Map';

const CreateEvent: FunctionComponent<ICreateEventProps> = (
  props: ICreateEventProps,
) => {
  const {
    onCreateEvent,
    reserveDate,
    setReserveDate,
    setEventStartTime,
    eventStartTime,
    setEventEndTime,
    eventEndTime,
    setLocation,
    setModalSchedule,
    schedule,
  } = props;

  return (
    <>
      <Title>Crear evento</Title>
      <FormContainer>
        <Form
          onSubmit={onCreateEvent}
          render={({ handleSubmit }) => (
            <CustomForm onSubmit={handleSubmit}>
              <Container>
                <div>
                  <Label>Título</Label>
                  <Field
                    render={Input}
                    name="title"
                    label="Título del evento"
                    validate={requiredValidation}
                    type="text"
                  />
                </div>
                <RowContainer>
                  <CustomCalendarForm>
                    <Label>Fecha</Label>
                    <ReactDatePicker
                      selected={reserveDate}
                      onChange={(date: any) => setReserveDate(date)}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Seleccionar fecha"
                      isClearable={true}
                      className="datePicker"
                    />
                  </CustomCalendarForm>
                  <ColumnContainer>
                    <Label>Horario</Label>
                    <RowContainer>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['TimeField', 'TimeField']}>
                          <div style={{ width: '80%' }}>
                            <TimeField
                              label="Hora inicio"
                              value={eventStartTime}
                              onChange={(newValue) => setEventStartTime(newValue)
                              }
                            />
                          </div>
                          <div style={{ width: '80%' }}>
                            <TimeField
                              label="Hora fin"
                              value={eventEndTime}
                              onChange={(newValue) => setEventEndTime(newValue)}
                            />
                          </div>
                        </DemoContainer>
                      </LocalizationProvider>
                    </RowContainer>
                  </ColumnContainer>
                </RowContainer>
                <div>
                  <Label>Descripcion</Label>
                  <Field
                    render={Input}
                    multiline
                    label="Descripcion"
                    name="description"
                    validate={requiredValidation}
                    type="textarea"
                  />
                </div>
                <div>
                  <Label>Preguntas frecuentes</Label>
                  <Field
                    render={Input}
                    multiline
                    label="Preguntas frecuentes"
                    name="faqs"
                    validate={requiredValidation}
                    type="textarea"
                  />
                </div>
                <div>
                  <Label>Cronograma</Label>
                  <ActionButton onClick={() => setModalSchedule(true)}>
                    {schedule.length ? 'Editar' : 'Agregar'} cronograma
                  </ActionButton>
                </div>
                <div />
                <div>
                  <Label>Tipo de evento</Label>
                  <Field
                    label="type"
                    placeholder="Tipo de evento"
                    name="type"
                    validate={requiredValidation}
                  >
                    {({ input, meta }) => (
                      <div style={{ marginBottom: 10 }}>
                        <Select
                          disabled
                          options={typesOfEvents}
                          showError={false}
                          input={input}
                          meta={meta}
                          label="Type of Event"
                        />
                      </div>
                    )}
                  </Field>
                </div>
                <RowContainer>
                  <VacanciesContainer>
                    <Label>Vacantes totales</Label>
                    <Field
                      render={Input}
                      label="Vacantes totales"
                      name="vacancies"
                      validate={requiredValidation}
                      type="number"
                    />
                  </VacanciesContainer>
                  <TicketsPerUserContainer>
                    <Label>Entradas por persona</Label>
                    <Field
                      render={Input}
                      label="Entradas por persona"
                      name="ticketsPerPerson"
                      validate={requiredValidation}
                      type="number"
                    />
                  </TicketsPerUserContainer>
                </RowContainer>
                <div>
                  <Label>Ubicacion</Label>
                  <Map onSearch={setLocation} />
                </div>
                <ColumnContainer>
                  <Label>Imagenes</Label>
                  <Field name="image" validate={requiredValidation}>
                    {({ input: { value, onChange, ...input } }) => (
                      <input
                        {...input}
                        type="file"
                        onChange={({ target }) => onChange(target.files)}
                        // instead of the default target.value
                        {...props}
                      />
                    )}
                  </Field>
                </ColumnContainer>
              </Container>
              <ButtonContainer>
                <Button type="submit">Crear evento</Button>
              </ButtonContainer>
            </CustomForm>
          )}
        />
      </FormContainer>
    </>
  );
};

export default CreateEvent;
