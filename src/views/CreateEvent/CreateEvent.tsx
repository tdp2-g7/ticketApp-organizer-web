import { FunctionComponent } from 'react';
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
  TimeContainer,
} from './styles';
import { ICreateEventProps } from './types';
import Select from '../../components/Select/Select';
import TimePicker from '../../components/TimePicker/TimePicker';

const CreateEvent: FunctionComponent<ICreateEventProps> = (
  props: ICreateEventProps,
) => {
  const {
    onSubmit, reserveDate, setReserveDate, eventInitialValues, isEdit,
  } = props;

  return (
    <>
      <Title>{ isEdit ? 'Editar evento' : 'Crear evento' }</Title>
      <FormContainer>
        <Form
          onSubmit={onSubmit}
          initialValues={eventInitialValues}
          render={({ handleSubmit }) => (
            <>
              <CustomForm onSubmit={handleSubmit}>
                <Container>
                  <div>
                    <Label>Título</Label>
                    <Field
                      render={Input}
                      name='title'
                      label='Título del evento'
                      validate={requiredValidation}
                      type='text'
                    />
                  </div>
                  <RowContainer>
                    <CustomCalendarForm>
                      <Label>Fecha</Label>
                      <ReactDatePicker
                        selected={reserveDate}
                        onChange={(date: any) => setReserveDate(date)}
                        dateFormat='dd/MM/yyyy'
                        placeholderText='Seleccionar fecha'
                        isClearable={true}
                        className='datePicker'
                      />
                    </CustomCalendarForm>
                    <ColumnContainer>
                      <Label>Horario</Label>
                      <RowContainer>
                        <TimeContainer>
                          <Field
                            validate={requiredValidation}
                            name={'startTime'}
                            render={(fieldRenderProps) => (
                              <TimePicker
                                label='Hora de inicio'
                                {...fieldRenderProps}
                              />
                            )}
                          />
                        </TimeContainer>
                        <TimeContainer>
                          <Field
                            name={'endTime'}
                            render={(fieldRenderProps) => (
                              <TimePicker
                                label='Hora de fin'
                                {...fieldRenderProps}
                              />
                            )}
                          />
                        </TimeContainer>
                      </RowContainer>
                    </ColumnContainer>
                  </RowContainer>
                  <div>
                    <Label>Descripcion</Label>
                    <Field
                      render={Input}
                      multiline
                      label='Descripcion'
                      name='description'
                      validate={requiredValidation}
                      type='textarea'
                    />
                  </div>
                  <div>
                    <Label>Preguntas frecuentes</Label>
                    <Field
                      render={Input}
                      multiline
                      label='Preguntas frecuentes'
                      name='faqs'
                      validate={requiredValidation}
                      type='textarea'
                    />
                  </div>
                  <div>
                    <Label>Tipo de evento</Label>
                    <Field
                      label='type'
                      placeholder='Tipo de evento'
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
                      <Label>Vacantes totales</Label>
                      <Field
                        render={Input}
                        label='Vacantes totales'
                        name='vacancies'
                        validate={requiredValidation}
                        type='number'
                      />
                    </VacanciesContainer>
                    <TicketsPerUserContainer>
                      <Label>Entradas por persona</Label>
                      <Field
                        render={Input}
                        label='Entradas por persona'
                        name='ticketsPerPerson'
                        validate={requiredValidation}
                        type='number'
                      />
                    </TicketsPerUserContainer>
                  </RowContainer>
                  <div>
                    <Label>Ubicacion</Label>
                    <Field
                      render={Input}
                      label='Ubicacion'
                      name='location'
                      validate={requiredValidation}
                      type='text'
                    />
                  </div>
                  <ColumnContainer>
                    <Label>Imagenes</Label>
                    {/* <Field name='image' validate={requiredValidation}>
                      {({ input: { value, onChange, ...input } }) => (
                        <input
                          {...input}
                          type='file'
                          onChange={({ target }) => onChange(target.files)}
                          // instead of the default target.value
                          {...props}
                        />
                      )}
                    </Field> */}
                  </ColumnContainer>
                </Container>
                <ButtonContainer>
                  <Button type='submit'>{ isEdit ? 'Editar evento' : 'Crear evento' }</Button>
                </ButtonContainer>
              </CustomForm>
            </>
          )}
        />
      </FormContainer>
    </>
  );
};

export default CreateEvent;
