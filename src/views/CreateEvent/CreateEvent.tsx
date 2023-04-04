import { FunctionComponent, useState } from 'react';
import { Field, Form } from 'react-final-form';
import ReactDatePicker from 'react-datepicker';
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
} from './styles';
import { ICreateEventProps } from './types';
import Select from '../../components/Select/Select';
import Map from '../../components/Map/Map';

const CreateEvent: FunctionComponent<ICreateEventProps> = (
  props: ICreateEventProps,
) => {
  const { onCreateEvent, reserveDate, setReserveDate } = props;
  const [location, setLocation] = useState({});
  console.log('🚀 ~ location:', location);

  return (
    <>
      <Title>Create Event</Title>
      <FormContainer>
        <Form
          onSubmit={onCreateEvent}
          render={({ handleSubmit }) => (
            <CustomForm onSubmit={handleSubmit}>
              <Container>
                <div>
                  <Label>Title</Label>
                  <Field
                    render={Input}
                    name='title'
                    label='Title of the event'
                    validate={requiredValidation}
                    type='text'
                  />
                </div>
                <RowContainer>
                  <CustomCalendarForm>
                    <Label>Date</Label>
                    <ReactDatePicker
                      selected={reserveDate}
                      onChange={(date: any) => setReserveDate(date)}
                      dateFormat='dd/MM/yyyy'
                      placeholderText='Select date'
                      isClearable={true}
                      className='datePicker'
                    />
                  </CustomCalendarForm>
                  <div>
                    <Label>Time</Label>
                    <Field
                      render={Input}
                      name='time'
                      label='Time of the event'
                      validate={requiredValidation}
                      type='text'
                    />
                  </div>
                </RowContainer>
                <div>
                  <Label>Description</Label>
                  <Field
                    render={Input}
                    multiline
                    label='Description'
                    name='description'
                    validate={requiredValidation}
                    type='textarea'
                  />
                </div>
                <div>
                  <Label>Frequently Asked Questions</Label>
                  <Field
                    render={Input}
                    multiline
                    label='Frequently asked qestions'
                    name='FAQs'
                    validate={requiredValidation}
                    type='textarea'
                  />
                </div>
                <div>
                  <Label>Type of Event</Label>
                  <Field
                    label='type'
                    placeholder='Type of event'
                    name='type'
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
                          label='Type of Event'
                        />
                      </div>
                    )}
                  </Field>
                </div>
                <RowContainer>
                <VacanciesContainer>
                  <Label>Total vacancies</Label>
                  <Field
                    render={Input}
                    label='Total vacancies'
                    name='vacancies'
                    validate={requiredValidation}
                    type='number'
                  />
                </VacanciesContainer>
                <TicketsPerUserContainer>
                  <Label>Tickets per user</Label>
                  <Field
                    render={Input}
                    label='Tickets per user'
                    name='ticketsPerPerson'
                    validate={requiredValidation}
                    type='number'
                  />
                </TicketsPerUserContainer>
                </RowContainer>
                <div>
                  <Label>Location</Label>
                  {/* <Field
                    render={Input}
                    label='Location'
                    name='location'
                    validate={requiredValidation}
                    type='text'
                  /> */}
                  <Map onSearch={setLocation} />
                </div>
                <ColumnContainer>
                  <Label>
                    Pictures
                  </Label>
                  <Field name='image' validate={requiredValidation}>
                    {({ input: { value, onChange, ...input } }) => (
                      <input
                        {...input}
                        type='file'
                        onChange={({ target }) => onChange(target.files)}
                        // instead of the default target.value
                        {...props}
                      />
                    )}
                  </Field>
                </ColumnContainer>
              </Container>
              <ButtonContainer>
                <Button type='submit'>Create event</Button>
              </ButtonContainer>
            </CustomForm>
          )}
        />
      </FormContainer>
    </>
  );
};

export default CreateEvent;
