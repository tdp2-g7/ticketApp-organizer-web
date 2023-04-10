import React, { FC, useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import _ from 'lodash';
import Input from 'src/components/Input/Input';
import { requiredValidation } from 'src/helpers/validations';
import { Sizes } from 'src/helpers/sizes';
import { Modal } from 'src/components/Modal/Modal';
import TimePicker from 'src/components/TimePicker/TimePicker';
import { IScheduleProps } from './types';
import {
  CustomForm,
  TimeContainer,
  RowDiv,
  RemoveButton,
  RemoveButtonContainer,
  SubmitButton,
  SubmitButtonContainer,
} from './styles';

const ScheduleComponent: FC<IScheduleProps> = (props: IScheduleProps) => {
  const {
    onSubmit, modalSchedule, onClose, schedule,
  } = props;
  const initialCount = (schedule && schedule.length) ? schedule.length : 1;
  const [numbers, setNumbers] = useState<any>([{ id: initialCount }]);
  const [number, setNumber] = useState<number>(initialCount + 1);
  const [scheduleData, setScheduleData] = useState<any>({});

  useEffect(() => {
    if (schedule) {
      const newNumbers = schedule.map((item, index) => ({ id: index + 1 }));
      setNumbers(newNumbers);

      const result: any = {};

      for (let i = 0; i < schedule.length; i += 1) {
        result[`description_${i + 1}`] = schedule[i].description;
        result[`startTime_${i + 1}`] = schedule[i].startTime;
        result[`endTime_${i + 1}`] = schedule[i].endTime;
      }

      setScheduleData(result);
    }
  }, [schedule]);

  const handleDeleteRow = (id: number, form: any) => {
    setNumbers(numbers.filter((item: any) => item.id !== id));
    if (form && form.getState && form.getState().values) {
      const { values } = form.getState();
      if (_.has(values, `startTime_${id}`)) {
        form.change(`startTime_${id}`, undefined);
      }
      if (_.has(values, `endTime_${id}`)) {
        form.change(`endTime_${id}`, undefined);
      }
      if (_.has(values, `description_${id}`)) {
        form.change(`description_${id}`, undefined);
      }
    }
  };

  const renderRow = (item: any, form: any) => (
    <RowDiv key={item.id}>
      <TimeContainer>
        <Field
          validate={requiredValidation}
          name={`startTime_${item.id}`}
          render={(fieldRenderProps) => (
            <TimePicker label="Hora de inicio" {...fieldRenderProps} />
          )}
        />
      </TimeContainer>
      <TimeContainer>
        <Field
          validate={requiredValidation}
          name={`endTime_${item.id}`}
          render={(fieldRenderProps) => (
            <TimePicker label="Hora de fin" {...fieldRenderProps} />
          )}
        />
      </TimeContainer>
      <Field
        validate={requiredValidation}
        render={Input}
        label="Descripcion"
        name={`description_${item.id}`}
        type="text"
      />
      <RemoveButtonContainer>
        <RemoveButton onClick={() => handleDeleteRow(item.id, form)}>
          <p style={{ margin: 0, fontSize: 30, lineHeight: '8px' }}>-</p>
        </RemoveButton>
      </RemoveButtonContainer>
    </RowDiv>
  );

  return (
    <Modal
      isOpen={modalSchedule}
      onClose={() => onClose()}
      title="Crear cronograma"
      size={Sizes.large}
    >
      <Form
        onSubmit={onSubmit}
        initialValues={scheduleData}
        render={({ handleSubmit, form }) => (
          <CustomForm onSubmit={handleSubmit} id="myform">
            <RowDiv>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                {numbers.map((item: any) => renderRow(item, form))}
              </div>
            </RowDiv>
            <SubmitButtonContainer>
              <SubmitButton
                onClick={(e) => {
                  e.preventDefault();
                  setNumber(number + 1);
                  setNumbers([...numbers, { id: number }]);
                } }
              >
                Agregar
              </SubmitButton>
            </SubmitButtonContainer>
          </CustomForm>
        )}
      />
      <SubmitButtonContainer>
        <SubmitButton type="submit" form="myform">
          Finalizar
        </SubmitButton>
      </SubmitButtonContainer>
    </Modal>
  );
};

export default ScheduleComponent;
