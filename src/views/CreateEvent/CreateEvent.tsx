import { FunctionComponent, useState } from 'react';
import { Field, Form } from 'react-final-form';
import ReactDatePicker from 'react-datepicker';
import { Tooltip } from 'react-tooltip';
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
  CustomImg,
  ImagesRowContainer,
  ImagesToEditContainer,
  ImageCard,
  RemoveIcon,
  RowImage,
  ActionButton,
  RowFAQsContainer,
  InfoOutlinedIcon,
} from './styles';
import { ICreateEventProps } from './types';
import Select from '../../components/Select/Select';
import TimePicker from '../../components/TimePicker/TimePicker';
import Map from '../../components/Map/Map';
import 'react-tooltip/dist/react-tooltip.css';

const CreateEvent: FunctionComponent<ICreateEventProps> = (
  props: ICreateEventProps,
) => {
  const {
    onSubmit,
    reserveDate,
    setReserveDate,
    eventInitialValues,
    isEdit,
    deleteImage,
    setModalSchedule,
    setLocation,
    schedule,
  } = props;

  const [imagesFile, setImagesFile] = useState<any>([]);

  return (
    <>
      <Title>{isEdit ? 'Editar evento' : 'Crear evento'}</Title>
      <FormContainer>
        <Form
          onSubmit={onSubmit}
          initialValues={eventInitialValues}
          render={({ handleSubmit }) => (
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
                  <RowFAQsContainer>
                    <Label>Preguntas frecuentes</Label>
                      <Tooltip id='my-tooltip' />
                      <a
                        data-tooltip-id='my-tooltip'
                        data-tooltip-content='Las preguntas deben empezar con P: y las respuestas con R:'
                      >
                        <InfoOutlinedIcon />
                      </a>
                  </RowFAQsContainer>

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
                  <Label>Cronograma</Label>
                  <ActionButton onClick={() => setModalSchedule(true)}>
                    {schedule.length ? 'Editar' : 'Agregar'} cronograma
                  </ActionButton>
                </div>
                <div />
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
                          label='Tipo de evento'
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
                  <Map
                    onSearch={setLocation}
                    lat={Number(eventInitialValues?.location.lat)}
                    lng={Number(eventInitialValues?.location.lng)}
                    isPreview
                  />
                </div>
                <ColumnContainer>
                  <RowFAQsContainer>
                  <Label>Imagenes</Label>

                      <Tooltip id='my-tooltip' />
                      <a
                        data-tooltip-id='my-tooltip'
                        data-tooltip-content='Al eliminar una imagen se debe confirmar con el boton Editar Evento'
                      >
                        <InfoOutlinedIcon />
                      </a>
                  </RowFAQsContainer>
                  <Field name='images' validate={requiredValidation}>
                    {({ input: { value, onChange, ...input } }) => (
                      <input
                        {...input}
                        multiple
                        type='file'
                        onChange={({ target }) => {
                          if (target.files) {
                            const urls = Array.from(target.files)
                              .map((file) => URL.createObjectURL(file));
                            setImagesFile([...imagesFile, ...urls]);
                          }
                          onChange(target.files);
                        }}
                        // instead of the default target.value
                        {...props}
                      />
                    )}
                  </Field>
                  <ImagesRowContainer>
                    {imagesFile.map((image: any) => (
                      <CustomImg src={image} />
                    ))}
                  </ImagesRowContainer>
                  <ImagesToEditContainer>
                    {eventInitialValues
                      && eventInitialValues.images.map((image: any) => (
                        <RowImage>
                          <ImageCard src={`data:image/jpeg;base64,${image}`} />
                          <RemoveIcon
                            onClick={() => {
                              if (deleteImage) {
                                deleteImage(image);
                              }
                            }}
                          />
                        </RowImage>
                      ))}
                  </ImagesToEditContainer>
                </ColumnContainer>
              </Container>
              <ButtonContainer>
                <Button type='submit'>
                  {isEdit ? 'Editar evento' : 'Crear evento'}
                </Button>
              </ButtonContainer>
            </CustomForm>
          )}
        />
      </FormContainer>
    </>
  );
};

export default CreateEvent;
